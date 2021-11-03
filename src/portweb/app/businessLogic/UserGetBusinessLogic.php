<?php

namespace BusinessLogic;

use Dao;

use App\model\M_User;
use Constants\DbConstants as Dc;

final class UserGetBusinessLogic extends BaseBusinessLogic
{

   public function __construct($request)
   {
      $this->reqData = [];
      $this->tmpData = [
         "userList" => []
      ];
      $this->resData = [
         DC::UserName => "",
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
      $this->tmpData["userList"] = $m_userDao->select(1);
   }

   protected function outDataFormat()
   {
      $this->resData[DC::UserName] = $this->tmpData["userList"]->userName;
      return $this->resData;
   }
}
