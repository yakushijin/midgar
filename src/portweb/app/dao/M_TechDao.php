<?php

namespace Dao;


use App\model\M_Tech;
use Constants\DbConstants as Dc;

class M_TechDao extends BaseDao
{
   public function count()
   {
      return M_Tech::count();
   }

   public function select($id)
   {
      return M_Tech::find($id);
   }

   public function selectAll()
   {
      return M_Tech::get();
   }

   public function insert($data)
   {
      M_Tech::insert(
         [

         ]
      );
   }

   public function update($id, $data)
   {
      M_Tech::find($id)->update(
         [

         ]
      );
   }

   public function delete($id)
   {
      M_Tech::find($id)->delete();
   }
}
