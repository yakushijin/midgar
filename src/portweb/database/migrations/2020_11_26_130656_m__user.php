<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;
class MUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::M_User, function (Blueprint $table) {
            $table->bigIncrements(DbConstants::UserId);
            $table->string(DbConstants::UserName);
            $table->string(DbConstants::Email)->unique();
            $table->timestamp(DbConstants::Email_verified_at)->nullable();
            $table->string(DbConstants::Password);
            $table->boolean(DbConstants::Authority)->default(0);
            $table->rememberToken();
            $table->dateTime(DbConstants::CreateDate);
            $table->dateTime(DbConstants::UpdateDate);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::M_User);
    }
}
