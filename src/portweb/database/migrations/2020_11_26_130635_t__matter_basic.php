<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class TMatterBasic extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::T_MatterBasic, function (Blueprint $table) {
            $table->bigIncrements(DbConstants::MatterBasicId);
            $table->Integer(DbConstants::UserId);
            $table->Integer(DbConstants::EngineerId);
            $table->string(DbConstants::MatterName,50);
            $table->date(DbConstants::PeriodFrom);
            $table->date(DbConstants::PeriodTo);
            $table->boolean(DbConstants::PmFlag)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::T_MatterBasic);
    }
}
