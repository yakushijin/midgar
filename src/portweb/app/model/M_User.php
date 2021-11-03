<?php

namespace App\model;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Constants\DbConstants as DC;

class M_User extends Authenticatable implements MustVerifyEmail
{
    protected $table = 'M_User';
    protected $primaryKey = 'userId';

    const CREATED_AT = 'createDate';
    const UPDATED_AT = 'updateDate';

    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'userName', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    // public $colum = ["userId" => "userId","userName" => "userName"];
    // public $colum = [$userId,$userName];


    // private const UserId = "userId";
    public $data = [
        DC::UserId => DC::ValueInit,
        DC::UserName => DC::ValueInit,
        DC::Email =>  DC::ValueInit,
        DC::Email_verified_at => DC::ValueInit,
        DC::Remember_token =>  DC::ValueInit,
        DC::Password =>  DC::ValueInit,
        DC::CreateDate =>  DC::ValueInit,
        DC::UpdateDate =>  DC::ValueInit,

    ];
}
