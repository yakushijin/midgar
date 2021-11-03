<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class UserSearchBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [
         DC::UserName => $initData[Pc::ReqData][DC::UserName],
         DC::Authority => $initData[Pc::ReqData][DC::Authority]
      ];
      $this->dbUseData = [
         DC::UserId => $initData[PC::SesData][DC::UserId],
         DC::UserName => $initData[Pc::ReqData][DC::UserName],
         DC::Authority => $initData[Pc::ReqData][DC::Authority],
         DC::GroupId => 0,
         Pc::UserList => []
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
      $t_UserGroupMapDao = new Dao\T_UserGroupMapDao;
      $this->dbUseData[DC::GroupId] = $t_UserGroupMapDao->ownerGroupIdSelect($this->dbUseData[DC::UserId]);
      $m_GroupDao = new Dao\P_GroupUserSearchDao;
      $this->dbUseData[Pc::UserList] = $m_GroupDao->select($this->dbUseData);
   }

   protected function outDataFormat()
   {
      $this->resData[Pc::UserList] = $this->dbUseData[Pc::UserList];
   }
}
