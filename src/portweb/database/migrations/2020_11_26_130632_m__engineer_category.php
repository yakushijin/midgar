<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class MEngineerCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::M_EngineerCategory, function (Blueprint $table) {
            $table->Integer(DbConstants::EngineerCategoryId)->primary();
            $table->string(DbConstants::EngineerCategoryName,50);
            $table->tinyInteger(DbConstants::EngineerClassification);
            $table->string(DbConstants::DispColor,50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::M_EngineerCategory);
    }
}
