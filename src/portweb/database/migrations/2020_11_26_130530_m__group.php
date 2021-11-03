<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class MGroup extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::M_Group, function (Blueprint $table) {
            $table->Integer(DbConstants::GroupId)->primary();
            $table->string(DbConstants::GroupName, 50);
            $table->string(DbConstants::GroupToken, 255)->nullable();
            $table->string(DbConstants::OrganizationName, 50)->nullable();
            $table->tinyInteger(DbConstants::OrganizationResidence)->default(0);
            $table->string(DbConstants::OrganizationSite, 255)->nullable();
            $table->string(DbConstants::OrganizationTel, 20)->nullable();
            $table->string(DbConstants::OrganizationEmail, 255)->nullable();
            $table->string(DbConstants::OrganizationContact, 255)->nullable();
            $table->string(DbConstants::OrganizationSupplement, 255)->nullable();
            $table->tinyInteger(DbConstants::OrganizationRelease)->default(0);
            $table->string(DbConstants::OrganizationUrl, 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::M_Group);
    }
}
