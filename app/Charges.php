<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Charge_types;

class Charges extends Model
{
    protected $fillable = ['charge_type_id', 'amount', 'charge_date', 'comment'];

    public $relations = ['Charges_types'];

    public function type()
    {
        return $this->belongsTo('App\Charge_types', 'charge_type_id');
    }
}
