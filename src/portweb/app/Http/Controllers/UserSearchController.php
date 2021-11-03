<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use BusinessLogic\UserSearchBusinessLogic;
use Constants\ApiConstants as AC;

final class UserSearchController extends BaseApiController
{
    //API呼び出し
    public function post(Request $request)
    {
        if (!$this->authDataCheck()) {
            return view(AC::LoginPage);
        }

        $initdata = $this->reqDataSet($request);
        $instance = $this->instanceInit($initdata);
        $this->logicExe($instance);

        return $this->resDataSet($instance);
    }

    protected function authDataCheck()
    {
        return parent::authDataCheckProcessing();
    }

    protected function reqDataSet($request)
    {
        return parent::reqDataInitProcessing($request);
    }


    protected function instanceInit($initdata)
    {
        return  new UserSearchBusinessLogic($initdata);
    }

    protected function logicExe($instance)
    {
        parent::logicProcessing($instance);
    }


    protected function resDataSet($instance)
    {
        return parent::resDataInitProcessing($instance);
    }
}
