<?php

namespace Dao;


use App\model\T_MatterDetail;
use Constants\DbConstants as Dc;

class T_MatterDetailDao extends BaseDao
{
   public function count()
   {
      return T_MatterDetail::count();
   }

   public function select($id)
   {
      return T_MatterDetail::find($id);
   }

   public function insert($data)
   {
      T_MatterDetail::insert(
         [

         ]
      );
   }

   public function update($id, $data)
   {
      T_MatterDetail::find($id)->update(
         [

         ]
      );
   }

   public function delete($id)
   {
      T_MatterDetail::find($id)->delete();
   }
}
