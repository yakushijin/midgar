<?php

namespace Dao;


use App\model\M_EngineerCategory;
use Constants\DbConstants as Dc;

class M_EngineerCategoryDao extends BaseDao
{
   public function count()
   {
      return M_EngineerCategory::count();
   }

   public function selectAll()
   {
      return M_EngineerCategory::get();
   }

   public function select($id)
   {
      return M_EngineerCategory::find($id);
   }

   public function insert($data)
   {
      M_EngineerCategory::insert(
         [

         ]
      );
   }

   public function update($id, $data)
   {
      M_EngineerCategory::find($id)->update(
         [

         ]
      );
   }

   public function delete($id)
   {
      M_EngineerCategory::find($id)->delete();
   }
}
