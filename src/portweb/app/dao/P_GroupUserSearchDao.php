<?php

namespace Dao;

use App\model\M_Group;
use App\model\M_User;
use App\model\T_UserGroupMap;
use Constants\DbConstants as Dc;
use Constants\PropertyConstants as Pc;

class P_GroupUserSearchDao extends BaseDao
{
   public function count()
   {
   }

   public function select($dbUseData)
   {
      // $dbUseData[DC::UserName] = $dbUseData[DC::UserName] == '' ? DC::M_User . '.' .DC::UserName:$dbUseData[DC::UserName];

      $groupUserList = \DB::connection()->table(DC::M_User)
         ->select([
            DC::M_User . '.' . DC::UserId,
            DC::M_User . '.' . DC::UserName,
            // DC::M_User . '.' . DC::OwnerGroupId,
            DC::M_User . '.' . DC::Email,
            DC::M_User . '.' . DC::Authority
         ])
         ->where(DC::T_UserGroupMap . '.' . DC::GroupId, $dbUseData[DC::GroupId])
         // ->where(DC::M_User . '.' . DC::UserName, $dbUseData[DC::UserName])
         // ->where(DC::M_User . '.' . DC::UserName,'1=1')
         ->join(DC::T_UserGroupMap, DC::T_UserGroupMap . '.' . DC::UserId, DC::M_User . '.' . DC::UserId)
         ->get();
      return $groupUserList;
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
