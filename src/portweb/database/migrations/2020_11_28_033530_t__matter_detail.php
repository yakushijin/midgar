<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class TMatterDetail extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::T_MatterDetail, function (Blueprint $table) {
            $table->bigIncrements(DbConstants::MatterDetailId);
            $table->Integer(DbConstants::MatterBasicId);
            $table->Integer(DbConstants::UserId);
            $table->Integer(DbConstants::EngineerId);
            $table->Integer(DbConstants::EngineerCategoryId);
            $table->tinyInteger(DbConstants::PeriodProportion)->default(0);
            $table->boolean(DbConstants::LeaderFlag)->default(0);
            $table->tinyInteger(DbConstants::Requirements)->default(0);
            $table->tinyInteger(DbConstants::BasicDesign)->default(0);
            $table->tinyInteger(DbConstants::DetailDesign)->default(0);
            $table->tinyInteger(DbConstants::Implementation)->default(0);
            $table->tinyInteger(DbConstants::Test)->default(0);
            $table->tinyInteger(DbConstants::Maintenance)->default(0);
            $table->string(DbConstants::MatterSupplement,255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::T_MatterDetail);
    }
}
