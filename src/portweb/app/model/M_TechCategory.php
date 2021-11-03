<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class M_TechCategory extends Model
{
    protected $table = DC::M_TechCategory;
    protected $primaryKey = DC::TechCategoryId;

    public $data = [
        DC::TechCategoryId => DC::ValueInit,
        DC::TechCategoryName => DC::ValueInit,
            ];

}
