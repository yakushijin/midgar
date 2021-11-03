<?php

namespace Dao;


use App\model\T_MatterTechMap;
use Constants\DbConstants as Dc;

class T_MatterTechMapDao extends BaseDao
{
   public function count()
   {
      return T_MatterTechMap::count();
   }

   public function select($id)
   {
      return T_MatterTechMap::find($id);
   }

   public function insert($data)
   {
      T_MatterTechMap::insert(
         [

         ]
      );
   }

   public function update($id, $data)
   {
      T_MatterTechMap::find($id)->update(
         [

         ]
      );
   }

   public function delete($id)
   {
      T_MatterTechMap::find($id)->delete();
   }
}
