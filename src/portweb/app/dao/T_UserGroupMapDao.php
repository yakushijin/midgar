<?php

namespace Dao;


use App\model\T_UserGroupMap;
use Constants\DbConstants as Dc;

class T_UserGroupMapDao extends BaseDao
{
   public function count()
   {
      return T_UserGroupMap::count();
   }

   public function select($id)
   {
   }

   public function ownerGroupIdSelect($id)
   {
      $groupIdData =
         T_UserGroupMap::select(DC::GroupId)
         ->where(DC::UserId, $id)
         ->where(DC::OwnerFlg, 1)
         ->get();
      $groupId = count($groupIdData) < 1 ? false : $groupIdData[0]->groupId;
      return $groupId;
   }

   public function insert($data)
   {
      T_UserGroupMap::insert(
         [
            Dc::UserId => $data[Dc::UserId],
            Dc::GroupId => $data[Dc::GroupId],
            Dc::OwnerFlg => 1,
         ]
      );
   }

   public function update($id, $data)
   {
      T_UserGroupMap::find($id)->update(
         []
      );
   }

   public function delete($id)
   {
      T_UserGroupMap::find($id)->delete();
   }
}
