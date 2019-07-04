<?php

namespace App\Http\Controllers\Api;

use App\Charge_types;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Charges;

class ChargeController extends Controller
{

    /**
     * @return \Illuminate\Http\Response
     */
    public function types()
    {
        return Charge_types::all(['id', 'title']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->get('searchType', false) && $request->get('searchQuery', false)) {
            $searchType = $request->get('searchType', false);
            $searchQuery = $request->get('searchQuery', false);
            if ($searchType == 'charge_type') {
                // search in related table charge_types
                $query = Charges::with('type')->whereHas('type', function ($q) use ($searchQuery) {
                    $q->where('title', 'like', '%'.$searchQuery.'%');
                });
            } else {
                $query = Charges::with('type')->where($searchType, 'like', '%'.$searchQuery.'%');
            }
        } else {
            $query = Charges::with('type');
        }
        return $query->orderByDesc('created_at')->paginate($request->get('per_page', 5));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Charges::create($request->get('charge'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Charges::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Charges::findOrFail($id)->update($request->all());
        return '';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Charges::findOrFail($id)->delete();
        return '';
    }
}
