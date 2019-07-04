<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChargesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('charges', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('charge_type_id')->unsigned()->index();
            $table->float('amount')->nullable();
            $table->date('charge_date')->nullable();
            $table->timestamps();
        });

        Schema::table('charges',  function (Blueprint $table) {
            $table->foreign('charge_type_id')->references('id')->on('charge_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('charges');
    }
}
