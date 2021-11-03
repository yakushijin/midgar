<?php

namespace Dao;


use App\model\M_Group;
use Constants\DbConstants as Dc;

class M_GroupDao extends BaseDao
{
   public function count()
   {
      return M_Group::count();
   }

   public function countId($id)
   {
      return M_Group::where(Dc::GroupId,$id)->count();
   }

   public function select($id)
   {
      return M_Group::find($id);
   }

   public function insert($data)
   {
      M_Group::insert(
         [
            Dc::GroupId => $data[Dc::GroupId],
            Dc::GroupName => $data[Dc::GroupName],
         ]
      );
   }

   public function update($id, $data)
   {
      M_Group::find($data[Dc::GroupId])->update(
         [
            Dc::GroupName => $data[Dc::GroupName],
            Dc::OrganizationName => $data[Dc::OrganizationName] ?? null,
            Dc::OrganizationResidence => $data[Dc::OrganizationResidence]?? null,
            Dc::OrganizationSite => $data[Dc::OrganizationSite]?? null,
            Dc::OrganizationTel => $data[Dc::OrganizationTel]?? null,
            Dc::OrganizationEmail => $data[Dc::OrganizationEmail]?? null,
            Dc::OrganizationContact => $data[Dc::OrganizationContact]?? null,
            Dc::OrganizationSupplement => $data[Dc::OrganizationSupplement]?? null,
         ]
      );
   }

   public function delete($id)
   {
      M_Group::find($id)->delete();
   }
}
