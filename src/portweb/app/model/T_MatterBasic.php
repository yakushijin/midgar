<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class T_MatterBasic extends Model
{
  protected $table = DC::T_MatterBasic;
  protected $primaryKey = DC::MatterBasicId;

  const CREATED_AT = null;
  const UPDATED_AT = null;

  protected $guarded = [
      DC::MatterBasicId ,
  ];

  public $data = [
    DC::MatterBasicId => DC::ValueInit,
    DC::EngineerId => DC::ValueInit,
    DC::MatterName => DC::ValueInit,
    DC::PeriodFrom => DC::ValueInit,
    DC::PeriodTo => DC::ValueInit,
    DC::PmFlag => DC::ValueInit,
  ];
}
