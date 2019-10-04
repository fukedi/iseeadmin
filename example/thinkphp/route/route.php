<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

Route::get('think', function () {
    return 'hello,ThinkPHP5!';
});

Route::get('hello/:name', 'index/hello');
Route::get('/pages/goods/index', 'index/goodsIndex');
Route::get('/pages/goods/unit12', 'index/goodsUnit12');
Route::get('/pages/goods/unit22', 'index/goodsUnit22');
Route::get('/pages/goods/category', 'index/goodsCategory');
Route::get('/pages/manage/profile', 'index/manageProfile');
Route::get('/pages/manage/modify', 'index/manageModify');
Route::get('/pages/manage/logout', 'index/manageLogout');

return [

];
