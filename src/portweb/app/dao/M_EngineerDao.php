<?php

namespace Dao;


use App\model\M_Engineer;
use Constants\DbConstants as Dc;

class M_EngineerDao extends BaseDao
{
   public function count()
   {
      return M_Engineer::count();
   }

   public function countId($id)
   {
      return M_Engineer::where(Dc::EngineerId, $id)->count();
   }

   public function select($id)
   {
      return M_Engineer::find($id);
   }

   public function engineerIdSelect($userId)
   {
      $engineerIdData = M_Engineer::select([DC::EngineerId])->where(DC::UserId, $userId)->get();
      $engineerId = count($engineerIdData) < 1 ? false : $engineerIdData[0]->engineerId;
      return $engineerId;
   }

   public function insert($data)
   {
      M_Engineer::insert(
         [
            Dc::EngineerId => $data[Dc::EngineerId],
            Dc::UserId => $data[Dc::UserId],
            Dc::EngineerName => $data[Dc::EngineerName],
            Dc::EngineerUrl => $data[Dc::EngineerUrl],
         ]
      );
   }

   public function update($id, $data)
   {
      M_Engineer::find($id)->update(
         [
            Dc::EngineerName => $data[Dc::EngineerName],
            Dc::EngineerBirthday => $data[Dc::EngineerBirthday] ?? null,
            Dc::EngineerResidence => $data[Dc::EngineerResidence] ?? null,
            Dc::EngineerGender => $data[Dc::EngineerGender],
            Dc::EngineerEmail => $data[Dc::EngineerEmail] ?? null,
            Dc::EngineerTwitter => $data[Dc::EngineerTwitter] ?? null,
            Dc::EngineerFacebook => $data[Dc::EngineerFacebook] ?? null,
            Dc::EngineerGitHub => $data[Dc::EngineerGitHub] ?? null,
            Dc::EngineerLinkedin => $data[Dc::EngineerLinkedin] ?? null,
            Dc::EngineerSite => $data[Dc::EngineerSite] ?? null,
            Dc::EngineerSupplement => $data[Dc::EngineerSupplement] ?? null,
         ]
      );
   }

   public function releaseUpdate($data)
   {
      M_Engineer::find($data[Dc::EngineerId])->update(
         [
            Dc::EngineerRelease => $data[Dc::EngineerRelease],
            Dc::EngineerUrl => $data[Dc::EngineerUrl],
         ]
      );
   }

   public function delete($id)
   {
      M_Engineer::find($id)->delete();
   }
}
