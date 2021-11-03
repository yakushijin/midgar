<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class T_UserGroupMap extends Model
{
    protected $table = DC::T_UserGroupMap;

    public $data = [
        DC::UserId => DC::ValueInit,
        DC::GroupId => DC::ValueInit,
    ];
}
