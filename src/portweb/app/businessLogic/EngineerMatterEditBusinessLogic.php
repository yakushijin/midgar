<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class EngineerMatterEditBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [

      ];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         Pc::MatterData => $initData[Pc::ReqData],
      ];
      $this->resData = [
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
      $p_EngineerDataSetDao = new Dao\P_EngineerDataSetDao;
      $p_EngineerDataSetDao->update($this->dbUseData[DC::UserId], $this->dbUseData);

   }

   protected function outDataFormat()
   {
         }
}
