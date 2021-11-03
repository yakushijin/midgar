<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class TUserGroupMap extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('T_UserGroupMap', function (Blueprint $table) {
            $table->Integer(DbConstants::UserId);
            $table->Integer(DbConstants::GroupId);
            $table->boolean(DbConstants::OwnerFlg);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_UserGroupMap');
    }
}
