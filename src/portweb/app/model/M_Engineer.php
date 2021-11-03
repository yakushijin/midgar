<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class M_Engineer extends Model
{
    protected $table = DC::M_Engineer;
    protected $primaryKey = DC::EngineerId;

    const CREATED_AT = null;
    const UPDATED_AT = null;

    protected $guarded = [
        DC::UserId ,
    ];

    public $data = [
        DC::EngineerId => DC::ValueInit,
        DC::UserId => DC::ValueInit,
        DC::EngineerName => DC::ValueInit,
        DC::EngineerBirthday => DC::ValueInit,
        DC::EngineerResidence => DC::ValueInit,
        DC::EngineerGender => DC::ValueInit,
        DC::EngineerEmail => DC::ValueInit,
        DC::EngineerTwitter => DC::ValueInit,
        DC::EngineerFacebook => DC::ValueInit,
        DC::EngineerGitHub => DC::ValueInit,
        DC::EngineerLinkedin => DC::ValueInit,
        DC::EngineerSite => DC::ValueInit,
        DC::EngineerSupplement => DC::ValueInit,
        DC::EngineerRelease => DC::ValueInit,
        DC::EngineerUrl => DC::ValueInit,
    ];
}
