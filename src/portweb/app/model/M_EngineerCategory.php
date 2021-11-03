<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class M_EngineerCategory extends Model
{
    protected $table = DC::M_EngineerCategory;
    protected $primaryKey = DC::EngineerCategoryId;

    public $data = [
        DC::EngineerCategoryId => DC::ValueInit,
        DC::EngineerCategoryName => DC::ValueInit,
        DC::EngineerClassification => DC::ValueInit, 
    ];

}
