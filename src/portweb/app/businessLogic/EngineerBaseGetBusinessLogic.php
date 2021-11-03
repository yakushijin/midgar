<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class EngineerBaseGetBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         DC::UserName => $initData[Pc::SesData][DC::UserName],
         // "newEngineerId" => $initData[Pc::SesData][DC::UserId],
         DC::EngineerId => 0,
         "engineerList" => [],
         "techList" => [],
         "engineerCategoryList" => [],
      ];
      $this->resData = [
         DC::EngineerName => "",
         DC::EngineerBirthday => "",
         DC::EngineerResidence => "",
         DC::EngineerGender => "",
         DC::EngineerEmail => "",
         DC::EngineerTwitter => "",
         DC::EngineerFacebook => "",
         DC::EngineerLinkedin => "",
         DC::EngineerSite => "",
         DC::EngineerSupplement => "",
         DC::EngineerRelease => "",
         DC::EngineerUrl => "",
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
      $p_EngineerDataSetDao = new Dao\P_EngineerDataSetDao;
      $m_TechDao = new Dao\M_TechDao;
      $m_EngineerCategoryDao = new Dao\M_EngineerCategoryDao;

      $this->dbUseData[DC::EngineerId] = $m_EngineerDao->engineerIdSelect($this->dbUseData[DC::UserId]);
      if (!$this->dbUseData[DC::EngineerId]) {
         $this->dbUseData[DC::EngineerId] = $this->dbUseData[DC::UserId];
         $this->dbUseData[DC::EngineerName] = $this->dbUseData[DC::UserName]."_engineer";
         $this->dbUseData[DC::EngineerUrl] = "engineer_".$this->dbUseData[DC::UserId];
         $m_EngineerDao->insert($this->dbUseData);
      } 

      $this->dbUseData["engineerList"] = $p_EngineerDataSetDao->select($this->dbUseData);
      $this->dbUseData["techList"] = $m_TechDao->selectAll();
      $this->dbUseData["engineerCategoryList"] = $m_EngineerCategoryDao->selectAll();
   }

   protected function outDataFormat()
   {
      $this->resData[DC::EngineerName] = $this->dbUseData["engineerList"]->engineerName;
      $this->resData[DC::EngineerBirthday] = $this->dbUseData["engineerList"]->engineerBirthday;
      $this->resData[DC::EngineerResidence] = $this->dbUseData["engineerList"]->engineerResidence;
      $this->resData[DC::EngineerGender] = $this->dbUseData["engineerList"]->engineerGender;
      $this->resData[DC::EngineerEmail] = $this->dbUseData["engineerList"]->engineerEmail;
      $this->resData[DC::EngineerTwitter] = $this->dbUseData["engineerList"]->engineerTwitter;
      $this->resData[DC::EngineerFacebook] = $this->dbUseData["engineerList"]->engineerFacebook;
      $this->resData[DC::EngineerGitHub] = $this->dbUseData["engineerList"]->engineerGitHub;
      $this->resData[DC::EngineerLinkedin] = $this->dbUseData["engineerList"]->engineerLinkedin;
      $this->resData[DC::EngineerSite] = $this->dbUseData["engineerList"]->engineerSite;
      $this->resData[DC::EngineerSupplement] = $this->dbUseData["engineerList"]->engineerSupplement;
      $this->resData[DC::EngineerRelease] = $this->dbUseData["engineerList"]->engineerRelease;
      $this->resData[DC::EngineerUrl] = $this->dbUseData["engineerList"]->engineerUrl;
      $this->resData["matterData"] = $this->dbUseData["engineerList"]->matterBasic;
      $this->resData["techList"] = $this->dbUseData["techList"];
      $this->resData["engineerCategoryList"] = $this->dbUseData["engineerCategoryList"];
   }
}
