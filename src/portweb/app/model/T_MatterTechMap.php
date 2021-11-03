<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class T_MatterTechMap extends Model
{
    protected $table = DC::T_MatterTechMap;

    const CREATED_AT = null;
    const UPDATED_AT = null;
  
    protected $fillable = [
        DC::MatterDetailId ,
        DC::TechId ,
        DC::UserId ,
        DC::EngineerId ,
    ];

    public $data = [
        DC::MatterDetailId => DC::ValueInit,
        DC::TechId => DC::ValueInit,
        DC::UserId => DC::UserId,
        DC::EngineerId => DC::EngineerId,
    ];
}
