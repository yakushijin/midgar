<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Constants\DbConstants;

class TMatterTechMap extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('T_MatterTechMap', function (Blueprint $table) {
            $table->Integer(DbConstants::MatterDetailId);
            $table->Integer(DbConstants::TechId);
            $table->Integer(DbConstants::UserId);
            $table->Integer(DbConstants::EngineerId);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('T_MatterTechMap');
    }
}
