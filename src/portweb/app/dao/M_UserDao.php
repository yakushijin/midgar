<?php

namespace Dao;

use App\model\M_User;
use Constants\DbConstants as Dc;

class M_UserDao extends BaseDao
{
   public function count()
   {
      return M_User::count();
   }

   public function select($id)
   {
      return M_User::find($id);
   }

   public function insert($data)
   {
   }

   public function update($id, $data)
   {
      M_User::find($id)->update(
         [
            Dc::UserName => $data[Dc::UserName],
         ]
      );
   }

   public function delete($id)
   {
      M_User::find($id)->delete();
   }
}
