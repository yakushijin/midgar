<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class EngineerSearchBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [

      ];
      $this->dbUseData = [
         DC::UserId => $initData[PC::SesData][DC::UserId],
         DC::GroupId => 0,
         Pc::EngineerList => []
      ];
      $this->resData = [
         Pc::EngineerList => [],
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
      $t_UserGroupMapDao = new Dao\T_UserGroupMapDao;
      $this->dbUseData[DC::GroupId] = $t_UserGroupMapDao->ownerGroupIdSelect($this->dbUseData[DC::UserId]);
      $p_GroupEngineerSearchDao = new Dao\P_GroupEngineerSearchDao;
      $this->dbUseData[Pc::EngineerList] = $p_GroupEngineerSearchDao->select($this->dbUseData);
   }

   protected function outDataFormat()
   {
      $this->resData[Pc::EngineerList] = $this->dbUseData[Pc::EngineerList];

   }
}
