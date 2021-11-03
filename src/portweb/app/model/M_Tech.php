<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class M_Tech extends Model
{
    protected $table = DC::M_Tech;
    protected $primaryKey = DC::TechId;

    public $data = [
        DC::TechId => DC::ValueInit,
        DC::TechCategoryId => DC::ValueInit,
        DC::TechName => DC::ValueInit,
        ];

}
