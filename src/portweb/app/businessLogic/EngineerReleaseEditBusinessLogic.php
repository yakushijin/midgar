<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class EngineerReleaseEditBusinessLogic extends BaseBusinessLogic
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
      $m_EngineerDao->releaseUpdate($this->dbUseData);
   }

   protected function outDataFormat()
   {

   }
}
