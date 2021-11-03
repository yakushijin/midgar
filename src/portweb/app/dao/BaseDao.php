<?php

namespace Dao;

abstract class BaseDao
{
   abstract protected function count();

   abstract protected function select($id);

   abstract protected function insert($value);

   abstract protected function update($id,$value);
   
   abstract protected function delete($id);
}
