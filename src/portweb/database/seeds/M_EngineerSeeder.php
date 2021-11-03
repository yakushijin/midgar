<?php

use Constants\DbConstants as Dc;

use App\model\M_Engineer;

use Illuminate\Database\Seeder;

class M_EngineerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = \Carbon\Carbon::now();
        $now1 = \Carbon\Carbon::now()->addYears(-20);
        $now2 = \Carbon\Carbon::now()->addYears(-2);
        
        M_Engineer::insert(
            [
                Dc::EngineerId => 1,
                Dc::UserId => 1,
                Dc::EngineerName => "yakusi",
                Dc::EngineerBirthday => $now1,
                Dc::EngineerResidence => 13,
                Dc::EngineerGender => 1,
                Dc::EngineerEmail => "engineer@test.com",
                Dc::EngineerTwitter => "hoge",
                Dc::EngineerFacebook => "fuga",
                Dc::EngineerGitHub => "piyo",
                Dc::EngineerLinkedin => "link",
                Dc::EngineerSite => "https://engineer.com",
                Dc::EngineerSupplement => "今稼働ちょっと空いてます",
                Dc::EngineerRelease => 1,
                Dc::EngineerUrl => "engineer",
            ]
        );
        // M_Engineer::insert(
        //     [
        //         Dc::EngineerId => 2,
        //         Dc::UserId => 2,
        //         Dc::EngineerName => "しがないエンジニア2",
        //         Dc::EngineerBirthday => $now2,
        //         Dc::EngineerResidence => 2,
        //         Dc::EngineerGender => 2,
        //         Dc::EngineerEmail => "engineer@test.com2",
        //         Dc::EngineerTwitter => "hoge2",
        //         Dc::EngineerFacebook => "fuga2",
        //         Dc::EngineerGitHub => "piyo2",
        //         Dc::EngineerLinkedin => "aaaa2",
        //         Dc::EngineerSite => "https://bbbb.com2",
        //         Dc::EngineerSupplement => "なんでもやりますぜ！2",
        //         Dc::EngineerRelease => 2,
        //         Dc::EngineerUrl => "EngineerUrl2",
        //     ]
        // );
    }
}
