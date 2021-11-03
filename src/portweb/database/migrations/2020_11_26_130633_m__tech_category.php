<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class MTechCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::M_TechCategory, function (Blueprint $table) {
            $table->Integer(DbConstants::TechCategoryId)->primary();
            $table->string(DbConstants::TechCategoryName,50);
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
        Schema::dropIfExists(DbConstants::M_TechCategory);
    }
}
