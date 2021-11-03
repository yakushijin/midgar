<?php

use Illuminate\Database\Seeder;

use App\model\T_MatterBasic;

use Constants\DbConstants as Dc;

class T_MatterBasicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = \Carbon\Carbon::now();
        $now1 = \Carbon\Carbon::now()->addYears(-1);
        $now2 = \Carbon\Carbon::now()->addYears(-2);
        $now3 = \Carbon\Carbon::now()->addYears(-3);
        $now4 = \Carbon\Carbon::now()->addYears(-4);
        $now5 = \Carbon\Carbon::now()->addYears(-5);
        $now7 = \Carbon\Carbon::now()->addYears(-7);
        $now10 = \Carbon\Carbon::now()->addYears(-10);
        $nowR = \Carbon\Carbon::now()->addYears(-mt_rand(1, 10));

        T_MatterBasic::insert(
            [
                [
                    Dc::UserId => 1,
                    Dc::EngineerId => 1,
                    Dc::MatterName => "〇〇社の金融システム開発",
                    Dc::PeriodFrom => $now3,
                    Dc::PeriodTo => $now,
                    Dc::PmFlag => true,
                ],
                [
                    Dc::UserId => 1,
                    Dc::EngineerId => 1,
                    Dc::MatterName => "△△社のインフラ基盤構築",
                    Dc::PeriodFrom => $now5,
                    Dc::PeriodTo => $now3,
                    Dc::PmFlag => false,
                ],
                [
                    Dc::UserId => 1,
                    Dc::EngineerId => 1,
                    Dc::MatterName => "□□社のwebシステム開発",
                    Dc::PeriodFrom => $now7,
                    Dc::PeriodTo => $now5,
                    Dc::PmFlag => false,
                ],
                [
                    Dc::UserId => 1,
                    Dc::EngineerId => 1,
                    Dc::MatterName => "☓☓社の社内業務アプリ開発",
                    Dc::PeriodFrom => $now10,
                    Dc::PeriodTo => $now7,
                    Dc::PmFlag => false,
                ],
                // [
                //     Dc::UserId => 2,
                //     Dc::EngineerId => 2,
                //     Dc::MatterName => "地獄のプロジェクト2",
                //     Dc::PeriodFrom => $now2,
                //     Dc::PeriodTo => $now,
                //     Dc::PmFlag => true,
                // ],
                // [
                //     Dc::UserId => 2,
                //     Dc::EngineerId => 2,
                //     Dc::MatterName => "クソったれPJ2",
                //     Dc::PeriodFrom => $now1,
                //     Dc::PeriodTo => $now,
                //     Dc::PmFlag => true,
                // ],
            ]
        );
    }
}
