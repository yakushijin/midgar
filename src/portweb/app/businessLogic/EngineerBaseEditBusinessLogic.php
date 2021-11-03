<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class EngineerBaseEditBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [

      ];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         DC::EngineerName => $initData[Pc::ReqData][DC::EngineerName],
         DC::EngineerBirthday => $initData[Pc::ReqData][DC::EngineerBirthday],
         DC::EngineerResidence => $initData[Pc::ReqData][DC::EngineerResidence],
         DC::EngineerGender => $initData[Pc::ReqData][DC::EngineerGender],
         DC::EngineerEmail => $initData[Pc::ReqData][DC::EngineerEmail],
         DC::EngineerTwitter => $initData[Pc::ReqData][DC::EngineerTwitter],
         DC::EngineerFacebook => $initData[Pc::ReqData][DC::EngineerFacebook],
         DC::EngineerGitHub => $initData[Pc::ReqData][DC::EngineerGitHub],
         DC::EngineerLinkedin => $initData[Pc::ReqData][DC::EngineerLinkedin],
         DC::EngineerSite => $initData[Pc::ReqData][DC::EngineerSite],
         DC::EngineerSupplement => $initData[Pc::ReqData][DC::EngineerSupplement],
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
      $m_EngineerDao->update($this->dbUseData[DC::UserId], $this->dbUseData);
   }

   protected function outDataFormat()
   {
       }
}
