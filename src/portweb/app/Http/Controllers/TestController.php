<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use BusinessLogic;

final class TestController extends BaseApiController
{
    //API呼び出し
    public function test(Request $request)
    {
        $reqdata = $this->reqDataSet($request);
        $instance = $this->instanceInit($reqdata);
        $this->logicExe($instance);

        return $this->resDataSet($instance);
    }

    protected function reqDataSet($request)
    {
        return parent::reqDataInitProcessing($request);
    }


    protected function instanceInit($reqdata)
    {
        return  new BusinessLogic\TestBaseBusinessLogic($reqdata);
    }

    protected function logicExe($test)
    {
        parent::logicProcessing($test);
    }


    protected function resDataSet($request)
    {
        return parent::resDataInitProcessing($request);
    }
}
