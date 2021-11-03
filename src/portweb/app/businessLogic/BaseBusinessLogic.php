<?php

namespace BusinessLogic;

/*========================================
ビジネスロジック基底クラス
========================================*/

abstract class BaseBusinessLogic
{
   /*---------------------------------------
    抽象メソッド
    ---------------------------------------*/

   //ビジネスロジックインターフェース
   abstract protected function LogicRun();

   //データチェック
   abstract protected function inDataCehck();

   //ロジック実行
   abstract protected function mainLogicProcessing();

   //返却データを整形
   abstract protected function outDataFormat();

   /*---------------------------------------
    子クラスで使用する共通メソッド
    ---------------------------------------*/
}
