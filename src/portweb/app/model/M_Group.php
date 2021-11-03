<?php

namespace App\model;

use Constants\DbConstants as DC;

use Illuminate\Database\Eloquent\Model;

class M_Group extends Model
{
    protected $table = DC::M_Group;
    protected $primaryKey = DC::GroupId;

    const CREATED_AT = null;
    const UPDATED_AT = null;

    protected $guarded = [
        DC::GroupToken ,
    ];

    public $data = [
        DC::GroupId => DC::ValueInit,
        DC::GroupName => DC::ValueInit,
        DC::GroupToken => DC::ValueInit,
        DC::OrganizationName => DC::ValueInit,
        DC::OrganizationResidence => DC::ValueInit,
        DC::OrganizationSite => DC::ValueInit,
        DC::OrganizationTel => DC::ValueInit,
        DC::OrganizationEmail => DC::ValueInit,
        DC::OrganizationContact => DC::ValueInit,
        DC::OrganizationSupplement => DC::ValueInit,
        DC::OrganizationRelease => DC::ValueInit,
        DC::OrganizationUrl => DC::ValueInit,
    ];

}
