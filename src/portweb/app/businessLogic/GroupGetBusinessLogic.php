<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class GroupGetBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         DC::UserName => $initData[Pc::SesData][DC::UserName],
         DC::GroupId => 0,
         DC::GroupName => "",
         "groupList" => []
      ];
      $this->resData = [
         DC::GroupName => "",
         DC::OrganizationName => "",
         DC::OrganizationResidence => "",
         DC::OrganizationSite => "",
         DC::OrganizationTel => "",
         DC::OrganizationEmail => "",
         DC::OrganizationContact => "",
         DC::OrganizationSupplement => "",
         DC::OrganizationRelease => "",
         DC::OrganizationUrl => "",
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
      $t_UserGroupMapDao = new Dao\T_UserGroupMapDao;

      $this->dbUseData[DC::GroupId] = $t_UserGroupMapDao->ownerGroupIdSelect($this->dbUseData[DC::UserId]);
      if (!$this->dbUseData[DC::GroupId]) {
         $this->dbUseData[DC::GroupId] = $this->dbUseData[DC::UserId];
         $this->dbUseData[DC::GroupName] = $this->dbUseData[DC::UserName] . "_group";
         $m_GroupDao->insert($this->dbUseData);
         $t_UserGroupMapDao->insert($this->dbUseData);
      }
      $this->dbUseData["groupList"] = $m_GroupDao->select($this->dbUseData[DC::GroupId]);
   }

   protected function outDataFormat()
   {
      $this->resData[DC::GroupName] = $this->dbUseData["groupList"]->groupName;
      $this->resData[DC::OrganizationName] = $this->dbUseData["groupList"]->organizationName;
      $this->resData[DC::OrganizationResidence] = $this->dbUseData["groupList"]->organizationResidence;
      $this->resData[DC::OrganizationSite] = $this->dbUseData["groupList"]->organizationSite;
      $this->resData[DC::OrganizationTel] = $this->dbUseData["groupList"]->organizationTel;
      $this->resData[DC::OrganizationEmail] = $this->dbUseData["groupList"]->organizationEmail;
      $this->resData[DC::OrganizationContact] = $this->dbUseData["groupList"]->organizationContact;
      $this->resData[DC::OrganizationSupplement] = $this->dbUseData["groupList"]->organizationSupplement;
      $this->resData[DC::OrganizationRelease] = $this->dbUseData["groupList"]->organizationRelease;
      $this->resData[DC::OrganizationUrl] = $this->dbUseData["groupList"]->organizationUrl;
   }
}
