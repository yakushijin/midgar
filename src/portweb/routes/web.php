<?php
use Constants\ApiConstants as AC;

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

Route::get('/', AC::EntryPageClassName.'@'.AC::GetFunctionName);

Route::get('/'.AC::UserEditPage, AC::EntryPageClassName.'@'.AC::GetFunctionName);
Route::get('/'.AC::UserListPage, AC::EntryPageClassName.'@'.AC::GetFunctionName);
Route::get('/'.AC::GroupEditPage, AC::EntryPageClassName.'@'.AC::GetFunctionName);
Route::get('/'.AC::EngineerListPage, AC::EntryPageClassName.'@'.AC::GetFunctionName);
Route::get('/'.AC::EngineerEditPage, AC::EntryPageClassName.'@'.AC::GetFunctionName);

// Route::get('/'.AC::UserEditPage, function () {
//     return view(AC::EntryPage);
// });

// Route::get('/'.AC::UserListPage, function () {
//     return view(AC::EntryPage);
// });

// Route::get('/'.AC::GroupEditPage, function () {
//     return view(AC::EntryPage);
// });

// Route::get('/'.AC::EngineerListPage, function () {
//     return view(AC::EntryPage);
// });

// Route::get('/'.AC::EngineerEditPage, function () {
//     return view(AC::EntryPage);
// });

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/systeminit', 'SystemInitController@get');

// Route::get('/{any}', function () {
//     return view('app');
// })->where('any','.*');

Route::get('profile', function () {
})->middleware('verified');

Route::post('/test', 'TestController@test');

Route::post('/'.AC::UserSearchUrl, AC::UserSearchClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::UserGetUrl, AC::UserGetClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::UserBaseEditUrl, AC::UserBaseEditClassName.'@'.AC::PostFunctionName);

Route::post('/'.AC::GroupGetUrl, AC::GroupGetClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::GroupBaseEditUrl, AC::GroupBaseEditClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::GroupReleaseEditUrl, AC::GroupReleaseEditClassName.'@'.AC::PostFunctionName);

Route::post('/'.AC::EngineerSearchUrl, AC::EngineerSearchClassName.'@'.AC::PostFunctionName);

Route::post('/'.AC::EngineerGetUrl, AC::EngineerGetClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::EngineerBaseEditUrl, AC::EngineerBaseEditClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::EngineerMatterEditUrl, AC::EngineerMatterEditClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::EngineerReleaseEditUrl, AC::EngineerReleaseEditClassName.'@'.AC::PostFunctionName);
Route::post('/'.AC::EngineerPublicUrl, AC::EngineerPublicClassName.'@'.AC::PostFunctionName);
