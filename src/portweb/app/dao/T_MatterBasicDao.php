<?php

namespace Dao;


use App\model\T_MatterBasic;
use Constants\DbConstants as Dc;

class T_MatterBasicDao extends BaseDao
{
   public function count()
   {
      return T_MatterBasic::count();
   }

   public function select($id)
   {
      return T_MatterBasic::find($id);
   }

   public function insert($data)
   {
      T_MatterBasic::insert(
         [

         ]
      );
   }

   public function update($id, $data)
   {
      T_MatterBasic::find($id)->update(
         [

         ]
      );
   }

   public function delete($id)
   {
      T_MatterBasic::find($id)->delete();
   }
}
