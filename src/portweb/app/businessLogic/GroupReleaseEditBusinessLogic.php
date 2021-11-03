<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;

final class GroupReleaseEditBusinessLogic extends BaseBusinessLogic
{

   public function __construct($request)
   {
      $this->reqData = [];
      $this->tmpData = [
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
      $this->tmpData["groupList"] = $m_GroupDao->select(1);
   }

   protected function outDataFormat()
   {
      $this->resData[DC::GroupName] = $this->tmpData["groupList"]->groupName;
      $this->resData[DC::OrganizationName] = $this->tmpData["groupList"]->organizationName;
      $this->resData[DC::OrganizationResidence] = $this->tmpData["groupList"]->organizationResidence;
      $this->resData[DC::OrganizationSite] = $this->tmpData["groupList"]->organizationSite;
      $this->resData[DC::OrganizationTel] = $this->tmpData["groupList"]->organizationTel;
      $this->resData[DC::OrganizationEmail] = $this->tmpData["groupList"]->organizationEmail;
      $this->resData[DC::OrganizationContact] = $this->tmpData["groupList"]->organizationContact;
      $this->resData[DC::OrganizationSupplement] = $this->tmpData["groupList"]->organizationSupplement;
      $this->resData[DC::OrganizationRelease] = $this->tmpData["groupList"]->organizationRelease;
      $this->resData[DC::OrganizationUrl] = $this->tmpData["groupList"]->organizationUrl;
   }
}
