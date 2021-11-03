<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class T_MatterDetail extends Model
{
    protected $table = DC::T_MatterDetail;
    protected $primaryKey = DC::MatterDetailId;

    const CREATED_AT = null;
    const UPDATED_AT = null;
  
    protected $guarded = [
        DC::MatterDetailId ,
        DC::MatterBasicId ,
        DC::UserId ,
        DC::EngineerId ,
    ];

    public $data = [
        DC::MatterDetailId => DC::ValueInit,
        DC::MatterBasicId => DC::ValueInit,
        DC::EngineerCategoryId => DC::ValueInit,
        DC::PeriodProportion => DC::ValueInit,
        DC::LeaderFlag => DC::ValueInit,
        DC::Requirements => DC::ValueInit,
        DC::BasicDesign => DC::ValueInit,
        DC::DetailDesign => DC::ValueInit,
        DC::Implementation => DC::ValueInit,
        DC::Test => DC::ValueInit,
        DC::Maintenance => DC::ValueInit,
        DC::MatterSupplement => DC::ValueInit,
    ];
}
