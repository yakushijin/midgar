<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class GroupBaseEditBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [

      ];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         DC::GroupId => 0,
         DC::GroupName => $initData[Pc::ReqData][DC::GroupName],
         DC::OrganizationName => $initData[Pc::ReqData][DC::OrganizationName],
         DC::OrganizationResidence => $initData[Pc::ReqData][DC::OrganizationResidence],
         DC::OrganizationSite => $initData[Pc::ReqData][DC::OrganizationSite],
         DC::OrganizationTel => $initData[Pc::ReqData][DC::OrganizationTel],
         DC::OrganizationEmail => $initData[Pc::ReqData][DC::OrganizationEmail],
         DC::OrganizationContact => $initData[Pc::ReqData][DC::OrganizationContact],
         DC::OrganizationSupplement => $initData[Pc::ReqData][DC::OrganizationSupplement],
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
      $t_UserGroupMapDao = new Dao\T_UserGroupMapDao;
      $this->dbUseData[DC::GroupId] = $t_UserGroupMapDao->ownerGroupIdSelect($this->dbUseData[DC::UserId]);
      $m_GroupDao = new Dao\M_GroupDao;
      $m_GroupDao->update(0, $this->dbUseData);
   }

   protected function outDataFormat()
   {
   }
}
