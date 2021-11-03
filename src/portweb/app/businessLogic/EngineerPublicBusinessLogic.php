<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class EngineerPublicBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         DC::EngineerId => 0,
         DC::EngineerRelease => $initData[Pc::ReqData][DC::EngineerRelease],
         DC::EngineerUrl => $initData[Pc::ReqData][DC::EngineerUrl],
      ];
      $this->resData = [
         DC::EngineerUrl => ""
      ];
   }

   public function LogicRun()
   {
      $this->inDataCehck();
      $this->mainLogicProcessing();
      $this->outDataFormat();
   }

   protected function inDataCehck()
   {
   }

   protected function mainLogicProcessing()
   {
      $m_EngineerDao = new Dao\M_EngineerDao;
      $this->dbUseData[DC::EngineerId] = $m_EngineerDao->engineerIdSelect($this->dbUseData[DC::UserId]);

      //変更前のurlを取得
      $beforeUrlString = $m_EngineerDao->select($this->dbUseData[DC::EngineerId])->engineerUrl;

      //公開設定情報を更新
      $m_EngineerDao->releaseUpdate($this->dbUseData);

      //設定した公開情報を取得
      $releaseInfo = $m_EngineerDao->select($this->dbUseData[DC::EngineerId]);
      $releaseTyle = $releaseInfo->engineerRelease;
      $urlStging = $releaseInfo->engineerUrl;

      /*
      releaseTyleによりそれぞれデータを格納するかと生成するデータを判定する
      0:公開しない
      1:すべて公開する
      2:プロフィールのみ公開する
      3:プロフィールとパラメータを公開する
      4:プロフィールと実績を公開する
      */

      //0の場合はディレクトリを削除し終了する
      if ($releaseTyle == 0) {
         \Storage::disk('public')->deleteDirectory($beforeUrlString);
         \Storage::disk('public')->deleteDirectory($urlStging);
      } else {
         //エンジニアプロフィール
         $v_EngineerDataDao = new Dao\V_EngineerDataDao;
         $v_EngineerData = $v_EngineerDataDao->select($this->dbUseData)[0];

         if ($releaseTyle == 1 || $releaseTyle == 3) {
            //各種グラフ
            $v_BubbleGlaphDao = new Dao\V_BubbleGlaphDao;
            $v_LineGlaphDao = new Dao\V_LineGlaphDao;
            $v_PieGlaphDao = new Dao\V_PieGlaphDao;
            $v_RadarGlaphDao = new Dao\V_RadarGlaphDao;

            //年を最新の10年分取得
            $YearLabel = [];
            $dispPastYear = 10;
            for ($i = 1; $dispPastYear >= $i; $i++) {
               $year = \Carbon\Carbon::now()->addYears(-($dispPastYear-$i))->year;
               array_push($YearLabel, strval($year));
            }

            //エンジニアカテゴリのマスタ情報を設定
            $m_EngineerCategoryDao = new Dao\M_EngineerCategoryDao;
            $m_EngineerCategoryData = $m_EngineerCategoryDao->selectAll();
            $m_EngineerCategoryIdArray = [];
            $m_EngineerCategoryDispLabel = [];
            foreach ($m_EngineerCategoryData as $value) {
               array_push($m_EngineerCategoryIdArray, $value->engineerCategoryId);
               array_push($m_EngineerCategoryDispLabel, $value->engineerCategoryName);
            }

            $bubbleGlaphData = array(
               "data" => $v_BubbleGlaphDao->select($this->dbUseData)
            );
            $lineGlaphData = array(
               "year" => $YearLabel,
               "data" => $this->lineGlaphArrange($YearLabel,$v_LineGlaphDao->select($this->dbUseData))
            );
            $radarGlaphData = array(
               "label" => $m_EngineerCategoryDispLabel,
               "data" => $this->radarGlaphArrange($m_EngineerCategoryIdArray, $radarGlaphData = $v_RadarGlaphDao->select($this->dbUseData))
            );
            $pieGlaphData =  $this->pieGlaphArrange($v_PieGlaphDao->select($this->dbUseData));

            $glaphData = array(
               "bubbleData" => $bubbleGlaphData,
               "lineData" => $lineGlaphData,
               "radarData" => $radarGlaphData,
               "pieData" => $pieGlaphData,
            );
         } else {
            $glaphData = false;
         }

         if ($releaseTyle == 1 || $releaseTyle == 4) {
            //実績情報
            $p_EngineerDataSetDao = new Dao\P_EngineerDataSetDao;
            $matterDataSet = $p_EngineerDataSetDao->select($this->dbUseData)->matterBasic;
            $matterData = $this->matterArrange($matterDataSet);
         } else {
            $matterData = false;
         }

         //公開用テキストデータを生成
         $arrayData = array(
            "engineerData" => $v_EngineerData,
            "glaphData" => $glaphData,
            "matterData" => $matterData
         );
         $jsonText = json_encode($arrayData);

         //urlに変更があった場合古いディレクトリを削除する
         if ($beforeUrlString != $urlStging) {
            \Storage::disk('public')->deleteDirectory($beforeUrlString);
         }
         //公開用テキストデータ格納先のディレクトリを上書き作成しデータを格納
         \Storage::disk('public')->makeDirectory($urlStging);
         \Storage::disk('public')->put($urlStging . '/resourceData.json', $jsonText);
      }
   }

   protected function outDataFormat()
   {
      $this->resData[DC::EngineerUrl] = $this->dbUseData[DC::EngineerUrl];
   }

   //実績情報データ整形
   private function matterArrange($matterDataSet)
   {
      $arrangeData = array('matterBasic' => []);
      foreach ($matterDataSet as $mbIndex => $mbValue) {
         array_push($arrangeData['matterBasic'], array(
            'matterName' => $mbValue->matterName,
            'periodFrom' => $mbValue->periodFrom,
            'periodTo' => $mbValue->periodTo,
            'pmFlag' => $mbValue->pmFlag,
            'matterDetail' => [],
         ));
         foreach ($mbValue->matterDetail as $mdIndex => $mdValue) {
            array_push($arrangeData['matterBasic'][$mbIndex]['matterDetail'], array(
               'periodProportion' => $mdValue->periodProportion,
               'leader' => $mdValue->leaderFlag,
               'requirements' => $mdValue->requirements,
               'basicDesign' => $mdValue->basicDesign,
               'detailDesign' => $mdValue->detailDesign,
               'implementation' => $mdValue->implementation,
               'test' => $mdValue->test,
               'maintenance' => $mdValue->maintenance,
               'matterSupplement' => $mdValue->matterSupplement,
               'engineerCategoryName' => $mdValue->engineerCategoryName,
               'techList' => [],
            ));
            foreach ($mdValue->tech as $tValue) {
               array_push($arrangeData['matterBasic'][$mbIndex]['matterDetail'][$mdIndex]['techList'], array(
                  'techName' => $tValue->techName,
                  'dispColor' => $tValue->dispColor,
               ));
            }
         }
      }
      return $arrangeData;
   }


   //折れ線グラフデータ整形
   private function lineGlaphArrange($YearLabel,$lineGlaphData)
   {
      $arrangeData = [];
      $categoryArray = [];

      //カテゴリの重複除外リスト作成
      foreach ($lineGlaphData as $categoryValue) {
         array_push($categoryArray, array(
            'engineerCategoryId' => $categoryValue->engineerCategoryId,
            'engineerCategoryName' => $categoryValue->engineerCategoryName,
            'dispColor' => $categoryValue->dispColor,
         ));
      }
      //重複を除外
      $categoryTmpArray = [];
      foreach ($categoryArray as $key => $value) {
         if (!in_array($value, $categoryTmpArray)) {
            $categoryTmpArray[$key] = $value;
         }
      }
      //配列の番号を振り直す（歯抜けさせない為）
      $categoryUniqueArray = [];
      foreach ($categoryTmpArray as $value) {
         array_push($categoryUniqueArray, $value);
      }

      //カテゴリごとにデータを作成
      foreach ($categoryUniqueArray as $index => $categoryValue) {
         array_push($arrangeData, array(
            'engineerCategoryId' => $categoryValue["engineerCategoryId"],
            'engineerCategoryName' => $categoryValue["engineerCategoryName"],
            'dispColor' => $categoryValue["dispColor"],
            'value' => []
         ));
         $existenceYear = [];
         $existenceYearDataSet = [];
         $noExistenceYearDataSet = [];

         //DBから取得したデータを展開
         foreach ($lineGlaphData as $scaleValue) {
            if ($categoryValue["engineerCategoryId"] == $scaleValue->engineerCategoryId) {
               if (in_array($scaleValue->scaleYear, $YearLabel)) {
                  //存在する年を格納
                  array_push($existenceYear, $scaleValue->scaleYear);
                  //存在する年とデータを格納
                  $existenceYearDataSet += array($scaleValue->scaleYear => $scaleValue->scaleMonth);
               }
            }
         }

         //0埋め用データセット作成
         foreach ($YearLabel as $yearArray) {
            if (!in_array($yearArray, $existenceYear)) {
               $noExistenceYearDataSet += array($yearArray => 0);
            }
         }

         //存在する年と存在しない年のデータセットを結合しソート
         $yearDataSet = $noExistenceYearDataSet + $existenceYearDataSet;
         ksort($yearDataSet);

         //ファイル書き出し用データに追加
         foreach ($yearDataSet as $value) {
            array_push($arrangeData[$index]['value'], $value);
         }
      }
      return $arrangeData;
   }


   //レーダーチャートグラフデータ整形
   private function radarGlaphArrange($m_EngineerCategoryIdArray, $radarGlaphData)
   {
      $arrangeData = array('manage' => [], 'tech' => []);

      $existenceCategory = [];
      $existenceCategoryDataSet = [];
      $noExistenceCategoryDataSet = [];

      //DBから取得したデータを展開
      foreach ($radarGlaphData as $dbValue) {
         if (in_array($dbValue->engineerCategoryId, $m_EngineerCategoryIdArray)) {
            //存在する年を格納
            array_push($existenceCategory, $dbValue->engineerCategoryId);
            //存在する年とデータを格納
            // array_push($existenceCategoryDataSet, array($dbValue->engineerCategoryId => $dbValue->manage));
            $existenceCategoryDataSet += array($dbValue->engineerCategoryId => array('manage' => $dbValue->manage, 'tech' => $dbValue->tech));
         }
      }

      //0埋め用データセット作成
      foreach ($m_EngineerCategoryIdArray as $category) {
         if (!in_array($category, $existenceCategory)) {
            $noExistenceCategoryDataSet += array($category => array('manage' => 0, 'tech' => 0));
         }
      }

      //存在するカテゴリと存在しないカテゴリのデータセットを結合しソート
      $categoryDataSet = $existenceCategoryDataSet + $noExistenceCategoryDataSet;
      ksort($categoryDataSet);

      //ファイル書き出し用データに追加
      foreach ($categoryDataSet as $value) {
         array_push($arrangeData['manage'], $value['manage']);
         array_push($arrangeData['tech'], $value['tech']);
      }

      return $arrangeData;
   }

   //円グラフデータ整形
   private function pieGlaphArrange($pieGlaphData)
   {

      $pieDataSet = [];
      $labelData = [];
      $pieData = [];
      $colorData = [];
      foreach ($pieGlaphData as $value) {
         $pieDataSet =
            array(
               'requirements' => $value->requirements,
               'basicDesign' => $value->basicDesign,
               'detailDesign' => $value->detailDesign,
               'implementation' => $value->implementation,
               'test' => $value->test,
               'maintenance' => $value->maintenance
            );
      }

      arsort($pieDataSet);

      foreach ($pieDataSet as $value) {
         array_push($pieData, $value);
      }

      for ($i = 0; $i < count($pieDataSet); $i++) {
         $name = array_keys($pieDataSet)[$i];
         switch ($name) {
            case 'requirements':
               array_push($labelData, '要件定義');
               array_push($colorData, '#88ff88');
               break;
            case 'basicDesign':
               array_push($labelData, '詳細設計');
               array_push($colorData, '#ffff88');
               break;
            case 'detailDesign':
               array_push($labelData, '基本設計');
               array_push($colorData, '#88ffff');
               break;
            case 'implementation':
               array_push($labelData, '実装');
               array_push($colorData, '#ff8888');
               break;
            case 'test':
               array_push($labelData, 'テスト');
               array_push($colorData, '#8888ff');
               break;
            case 'maintenance':
               array_push($labelData, '保守');
               array_push($colorData, '#ff88ff');
               break;
         }
      }

      $arrangeData = array(
         "label" => $labelData,
         "color" => $colorData,
         "data" => $pieData
      );

      return $arrangeData;
   }
}
