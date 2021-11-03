<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use BusinessLogic\SystemInitBusinessLogic;
use Constants\ApiConstants as AC;

final class SystemInitController extends BaseApiController
{
    //API呼び出し
    public function get(Request $request)
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
        return  new SystemInitBusinessLogic($initdata);
    }

    protected function logicExe($instance)
    {
        parent::logicProcessing($instance);
    }


    protected function resDataSet($instance)
    {
        return parent::resViewInitProcessing("app");
    }
}
