<?php

namespace Dao;

use App\model\M_Engineer;
use App\model\T_MatterBasic;
use App\model\T_MatterDetail;
use App\model\T_MatterTechMap;
use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

class P_EngineerDataSetDao extends BaseDao
{
   public function count()
   {
   }

   public function select($data)
   {
      //エンジニアレコードを取得
      $engineerData = M_Engineer::where(DC::EngineerId, $data[DC::EngineerId])
         ->where(DC::UserId, $data[DC::UserId])
         ->get()[0];

      //エンジニアIDから案件基本レコードを取得
      $engineerData->matterBasic = \DB::connection()->table(DC::T_MatterBasic)
         ->select([
            DC::T_MatterBasic . '.' . DC::MatterBasicId,
            \DB::raw('DATE_FORMAT(' . DC::PeriodFrom . ', "%Y-%m") as ' . DC::PeriodFrom),
            \DB::raw('DATE_FORMAT(' . DC::PeriodTo . ', "%Y-%m") as ' . DC::PeriodTo),
            DC::T_MatterBasic . '.' . DC::MatterName,
            DC::T_MatterBasic . '.' . DC::PmFlag,
         ])
         ->where(DC::EngineerId, $data[DC::EngineerId])
         ->where(DC::UserId, $data[DC::UserId])
         ->get();
      // $engineerData->matterBasic = T_MatterBasic::where(DC::EngineerId, $engineerData->engineerId)->get();

      //案件基本IDから案件詳細レコードを取得
      foreach ($engineerData->matterBasic as $index => $value) {
         $engineerData->matterBasic[$index]->matterDetail = T_MatterDetail::where(DC::MatterBasicId, $value->matterBasicId)
            ->join(DC::M_EngineerCategory, DC::M_EngineerCategory . '.' . DC::EngineerCategoryId, DC::T_MatterDetail . '.' . DC::EngineerCategoryId)
            ->where(DC::T_MatterDetail . '.' .DC::EngineerId, $data[DC::EngineerId])
            ->where(DC::T_MatterDetail . '.' .DC::UserId, $data[DC::UserId])
            ->get();
         //案件詳細レコードの各IDから各種テーブルのレコードを取得
         foreach ($value->matterDetail as $inIndex => $inValue) {
            $value->matterDetail[$inIndex]->tech = T_MatterTechMap::where(DC::MatterDetailId, $value->matterDetail[$inIndex]->matterDetailId)
               ->join(DC::M_Tech, DC::M_Tech . '.' . DC::TechId, DC::T_MatterTechMap . '.' . DC::TechId)
               ->join(DC::M_TechCategory, DC::M_TechCategory . '.' . DC::TechCategoryId, DC::M_Tech . '.' . DC::TechCategoryId)
               ->where(DC::T_MatterTechMap . '.' .DC::EngineerId, $data[DC::EngineerId])
               ->where(DC::T_MatterTechMap . '.' .DC::UserId, $data[DC::UserId])
               ->get();
         }
      }

      return $engineerData;
   }

   public function insert($data)
   {
   }

   public function update($userId, $data)
   {
      //ユーザIDからエンジニアIDを取得
      $engineer = M_Engineer::select(DC::EngineerId)->where(DC::UserId, $userId)->get()[0];
      $engineerId = $engineer->engineerId;

      $notDeleteMatterBasicId = [];
      $notDdeleteMatterDetailId = [];

      //技術情報のdelete（後の手順で最新にinsertする為一旦全削除）
      T_MatterTechMap::where(DC::UserId, $userId)->where(DC::EngineerId, $engineerId)->delete();

      //案件基本の更新（案件基本IDが0は画面上で作られたものでありinsert、それ以外はupdate）
      foreach ($data[Pc::MatterData] as $basicIndex => $basicValue) {
         if ($basicValue[Dc::MatterBasicId] == 0) {
            $matterBasicId = T_MatterBasic::insertGetId(
               [
                  Dc::UserId => $userId,
                  Dc::EngineerId => $engineerId,
                  Dc::MatterName => $basicValue[Dc::MatterName],
                  Dc::PeriodFrom => $basicValue[Dc::PeriodFrom] . '-01',
                  Dc::PeriodTo => $basicValue[Dc::PeriodTo] . '-01',
                  Dc::PmFlag => $basicValue[Dc::PmFlag],
               ]
            );
            array_push($notDeleteMatterBasicId, $matterBasicId);
            $matterBasicIdInDetail = $matterBasicId;
         } else {
            T_MatterBasic::where(Dc::UserId, $userId)
               ->where(Dc::EngineerId, $engineerId)
               ->where(Dc::MatterBasicId, $basicValue[Dc::MatterBasicId])
               ->update(
                  [
                     Dc::MatterName => $basicValue[Dc::MatterName],
                     Dc::PeriodFrom => $basicValue[Dc::PeriodFrom] . '-01',
                     Dc::PeriodTo => $basicValue[Dc::PeriodTo] . '-01',
                     Dc::PmFlag => $basicValue[Dc::PmFlag],
                  ]
               );
            array_push($notDeleteMatterBasicId, $basicValue[Dc::MatterBasicId]);
            $matterBasicIdInDetail = $basicValue[Dc::MatterBasicId];
         }

         //案件詳細の更新（案件詳細IDが0は画面上で作られたものでありinsert、それ以外はupdate）
         foreach ($basicValue[Pc::MatterDetail] as $detailIndex => $detailValue) {
            if ($detailValue[Dc::MatterDetailId] == 0) {
               $matterDetailId = T_MatterDetail::insertGetId(
                  [
                     Dc::UserId => $userId,
                     Dc::EngineerId => $engineerId,
                     Dc::EngineerCategoryId => $detailValue[Dc::EngineerCategoryId],
                     Dc::MatterBasicId => $matterBasicIdInDetail,
                     Dc::PeriodProportion => $detailValue[Dc::PeriodProportion],
                     Dc::LeaderFlag => $detailValue[Dc::LeaderFlag],
                     Dc::Requirements => $detailValue[Dc::Requirements],
                     Dc::BasicDesign => $detailValue[Dc::BasicDesign],
                     Dc::DetailDesign => $detailValue[Dc::DetailDesign],
                     Dc::Implementation => $detailValue[Dc::Implementation],
                     Dc::Test => $detailValue[Dc::Test],
                     Dc::Maintenance => $detailValue[Dc::Maintenance],
                     Dc::MatterSupplement => $detailValue[Dc::MatterSupplement] ?? null,
                  ]
               );
               array_push($notDdeleteMatterDetailId, $matterDetailId);
               $matterDetailIdInTech = $matterDetailId;
            } else {
               T_MatterDetail::where(Dc::UserId, $userId)
                  ->where(Dc::EngineerId, $engineerId)
                  ->where(Dc::MatterBasicId, $matterBasicIdInDetail)
                  ->where(Dc::MatterDetailId, $detailValue[Dc::MatterDetailId])
                  ->update(
                     [
                        Dc::EngineerCategoryId => $detailValue[Dc::EngineerCategoryId],
                        Dc::PeriodProportion => $detailValue[Dc::PeriodProportion],
                        Dc::LeaderFlag => $detailValue[Dc::LeaderFlag],
                        Dc::Requirements => $detailValue[Dc::Requirements],
                        Dc::BasicDesign => $detailValue[Dc::BasicDesign],
                        Dc::DetailDesign => $detailValue[Dc::DetailDesign],
                        Dc::Implementation => $detailValue[Dc::Implementation],
                        Dc::Test => $detailValue[Dc::Test],
                        Dc::Maintenance => $detailValue[Dc::Maintenance],
                        Dc::MatterSupplement => $detailValue[Dc::MatterSupplement],
                     ]
                  );
               array_push($notDdeleteMatterDetailId, $detailValue[Dc::MatterDetailId]);
               $matterDetailIdInTech = $detailValue[Dc::MatterDetailId];
            }
            //技術情報の更新（先の手順ですべてdeleteしているのでinsertのみ）
            foreach ($detailValue[Pc::Tech] as $techIndex => $techValue) {
               T_MatterTechMap::insert(
                  [
                     Dc::UserId => $userId,
                     Dc::EngineerId => $engineerId,
                     Dc::TechId => $techValue[Dc::TechId],
                     Dc::MatterDetailId => $matterDetailIdInTech,
                  ]
               );
            }
         }
      }

      //不要レコードの削除
      T_MatterBasic::where(DC::UserId, $userId)->where(DC::EngineerId, $engineerId)->whereNotIn(Dc::MatterBasicId, $notDeleteMatterBasicId)->delete();
      T_MatterDetail::where(DC::UserId, $userId)->where(DC::EngineerId, $engineerId)->whereNotIn(Dc::MatterDetailId, $notDdeleteMatterDetailId)->delete();
   }

   public function delete($id)
   {
   }
}
