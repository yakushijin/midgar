<?php

namespace App\Http\Controllers;

use Constants\PropertyConstants as Sc;
use Constants\DbConstants as Dc;

use Illuminate\Support\Facades\Auth;

/*========================================
API基底クラス
========================================*/

abstract class BaseApiController extends Controller
{
    /*---------------------------------------
    抽象メソッド
    ---------------------------------------*/

    //認証チェック
    abstract protected function authDataCheck();

    //リクエストデータ取得
    abstract protected function reqDataSet($request);

    //インスタンス生成
    abstract protected function instanceInit($request);

    //ビジネスロジック実行
    abstract protected function logicExe($request);

    //レスポンスデータ設定
    abstract protected function resDataSet($request);

    /*---------------------------------------
    子クラスで使用する共通メソッド
    ---------------------------------------*/

    protected function authDataCheckProcessing()
    {
        return Auth::check();
    }

    //リクエストデータを使用した初期設定処理
    protected function reqDataInitProcessing($request)
    {
        $sesData = [
            Dc::UserId =>  Auth::user()->userId,
            Dc::UserName =>  Auth::user()->userName,
            Dc::Authority =>  Auth::user()->authority,
        ];
        return [SC::ReqData => $request->all(), SC::SesData => $sesData];
    }

    //レスポンスデータ設定及び返却処理
    protected function resDataInitProcessing($instance)
    {
        return response()->json($instance->resData);
    }

    //レスポンスデータ設定及び返却処理
    protected function resViewInitProcessing($pageName)
    {
        return view($pageName);
    }

    //ビジネスロジックの実行
    protected function logicProcessing($instance)
    {
        $instance->LogicRun();
    }
}
