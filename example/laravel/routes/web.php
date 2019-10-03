<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});


    Route::get('/index',['as'=>'index','uses'=>'Admin\IndexController@index']);
    Route::get('/',['as'=>'index','uses'=>'Admin\IndexController@index']);
    Route::get('/pages/manage/profile',['as'=>'/manage/profile','uses'=>'Admin\IndexController@profile']);
    Route::get('/pages/manage/modify',['as'=>'/manage/modify','uses'=>'Admin\IndexController@modify']);
    Route::get('/pages/manage/logout',['as'=>'/manage/logout','uses'=>'Admin\IndexController@logout']);
    Route::get('/pages/goods/index',['as'=>'/manage/goods/index','uses'=>'Admin\IndexController@goodsIndex']);
    Route::get('/pages/goods/category',['as'=>'/manage/logout','uses'=>'Admin\IndexController@goodsCategory']);
    Route::get('/pages/goods/unit12',['as'=>'/pages/goods/unit12','uses'=>'Admin\IndexController@goodsUnit12']);
    Route::get('/pages/goods/unit22',['as'=>'/pages/goods/unit22','uses'=>'Admin\IndexController@goodsUnit22']);
