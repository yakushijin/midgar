<?php

namespace Dao;


use App\model\M_TechCategory;
use Constants\DbConstants as Dc;

class M_TechCategoryDao extends BaseDao
{
   public function count()
   {
      return M_TechCategory::count();
   }

   public function select($id)
   {
      return M_TechCategory::find($id);
   }

   public function insert($data)
   {
      M_TechCategory::insert(
         [

         ]
      );
   }

   public function update($id, $data)
   {
      M_TechCategory::find($id)->update(
         [

         ]
      );
   }

   public function delete($id)
   {
      M_TechCategory::find($id)->delete();
   }
}
