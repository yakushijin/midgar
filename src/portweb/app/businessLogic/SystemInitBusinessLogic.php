<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class SystemInitBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [

      ];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         DC::GroupId => $initData[Pc::SesData][DC::UserId],
         DC::EngineerId => $initData[Pc::SesData][DC::UserId],
         DC::GroupName => $initData[Pc::SesData][DC::UserName]."_group",
         DC::EngineerName => $initData[Pc::SesData][DC::UserName]."_engineer",
      ];
      $this->resData = [
         Pc::UserList => [],
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
      $m_GroupDao = new Dao\M_GroupDao;
      $m_GroupDao->insert($this->dbUseData);
      $t_UserGroupMapDao = new Dao\T_UserGroupMapDao;
      $t_UserGroupMapDao->insert($this->dbUseData);
      $m_EngineerDao = new Dao\M_EngineerDao;
      $m_EngineerDao->insert($this->dbUseData);
      
   }

   protected function outDataFormat()
   {
      // $this->resData[Pc::UserList] = $this->dbUseData[Pc::UserList];
   }
}
