<?php

namespace BusinessLogic;

use Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

final class UserBaseEditBusinessLogic extends BaseBusinessLogic
{

   public function __construct($initData)
   {
      $this->reqData = [

      ];
      $this->dbUseData = [
         DC::UserId => $initData[Pc::SesData][DC::UserId],
         Pc::NowDate => \Carbon\Carbon::now(),
         DC::UserName => $initData[Pc::ReqData][DC::UserName],
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
      $m_userDao = new Dao\M_UserDao;
      $m_userDao->update($this->dbUseData[DC::UserId],$this->dbUseData);
   }

   protected function outDataFormat()
   {
      
   }
}
