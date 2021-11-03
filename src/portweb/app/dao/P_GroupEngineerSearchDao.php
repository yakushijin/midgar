<?php

namespace Dao;

use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

class P_GroupEngineerSearchDao extends BaseDao
{
   public function count()
   {
   }

   public function select($dbUseData)
   {
       $groupEngineerList = \DB::connection()->table(DC::M_Engineer)
         ->select([
            DC::M_Engineer . '.' . DC::EngineerId,
            DC::M_Engineer . '.' . DC::EngineerName,
            \DB::raw('TIMESTAMPDIFF(YEAR,' .DC::M_Engineer . '.' . DC::EngineerBirthday.',CURDATE()) AS '.DC::EngineerBirthday),
            DC::M_Engineer . '.' . DC::EngineerResidence,
            DC::M_Engineer . '.' . DC::EngineerGender,
            DC::M_Engineer . '.' . DC::EngineerRelease,
            DC::M_Engineer . '.' . DC::EngineerUrl
         ])
         ->where(DC::T_UserGroupMap . '.' . DC::GroupId, $dbUseData[DC::GroupId])
         ->join(DC::T_UserGroupMap, DC::T_UserGroupMap . '.' . DC::UserId, DC::M_Engineer . '.' . DC::UserId)
         ->get();
      return $groupEngineerList;
   }

   public function insert($data)
   {
   }

   public function update($id, $data)
   {
   }

   public function delete($id)
   {
   }
}
