<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();   
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::post('/save-push-notification-token', [HomeController::class, 'savePushNotificationToken'])->name('save-push-notification-token');
Route::post('/send-push-notification', [HomeController::class, 'sendPushNotification'])->name('send.push-notification');