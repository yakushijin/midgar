<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class MEngineer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::M_Engineer, function (Blueprint $table) {
            $table->Integer(DbConstants::EngineerId)->primary();
            $table->Integer(DbConstants::UserId)->unique();
            $table->string(DbConstants::EngineerName,50);
            $table->date(DbConstants::EngineerBirthday)->nullable();
            $table->tinyInteger(DbConstants::EngineerResidence)->default(0);
            $table->tinyInteger(DbConstants::EngineerGender)->default(0);
            $table->string(DbConstants::EngineerEmail,255)->nullable();
            $table->string(DbConstants::EngineerTwitter,255)->nullable();
            $table->string(DbConstants::EngineerFacebook,255)->nullable();
            $table->string(DbConstants::EngineerGitHub,255)->nullable();
            $table->string(DbConstants::EngineerLinkedin,255)->nullable();
            $table->string(DbConstants::EngineerSite,255)->nullable();
            $table->string(DbConstants::EngineerSupplement,255)->nullable();
            $table->tinyInteger(DbConstants::EngineerRelease)->default(0);
            $table->string(DbConstants::EngineerUrl,255)->unique();;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::M_Engineer);
    }
}
