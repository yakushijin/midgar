<?php

namespace BusinessLogic;
use Dao;

use App\model\M_User;
use Constants\DbConstants as Dc;

final class TestBaseBusinessLogic extends BaseBusinessLogic
{

   public function __construct($request)
   {
      $this->reqData = [
         "name" => $request["name"],
         "name2" => $request["name"],
      ];
      $this->tmpData = [
         "name" => $request["name"],
         "name2" => $request["name"],
      ];
      $this->resData = [
         "name" => $request["name"],
         "name2" => $request["name"],
      ];
      // $this->name = $request["name"];
   }

   public function LogicRun()
   {
      $this->inDataCehck();
      $this->mainLogicProcessing();
      $this->outDataFormat();
   }

   protected function inDataCehck()
   {
      $a = $this->reqData;
   }

   protected function mainLogicProcessing()
   {
      $now = \Carbon\Carbon::now();
      $m_User = new M_User();

      // $m_User->data[Dc::UserId] = "1";
      // $m_User->data[Dc::UserName] = "hogehoge";
      $m_User->data[Dc::UserName] = "fugafuga";
      $m_User->data[Dc::Email] = "test@test.com";
      $m_User->data[Dc::Email_verified_at] = $now;
      $m_User->data[Dc::Remember_token] = "aaa";
      $m_User->data[Dc::Password] = "test";
      $m_User->data[Dc::CreateDate] = $now;
      $m_User->data[Dc::UpdateDate] = $now;


      $m_userDao = new Dao\M_UserDao;

      $p_EngineerDataSetDao = new Dao\P_EngineerDataSetDao;

      // $m_userDao->insert($m_User->data);
      // $m_userDao->update(2,$m_User->data);
      // $m_userDao->delete(2);

      $test2 = $p_EngineerDataSetDao->select(1);

      $test = $m_userDao->select(1);


   }

   protected function outDataFormat()
   {
   }
}
