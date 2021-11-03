<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;
class MTech extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(DbConstants::M_Tech, function (Blueprint $table) {
            $table->Integer(DbConstants::TechId);
            $table->string(DbConstants::TechName, 100);
            $table->Integer(DbConstants::TechCategoryId);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(DbConstants::M_Tech);
    }
}
