<?php

use Illuminate\Database\Seeder;

use App\model\M_Group;
use Constants\DbConstants as Dc;

class M_GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        M_Group::insert(
            [
                DC::GroupId => 1,
                DC::GroupName => 'ほげほげグループ',
                DC::GroupToken => 'GroupToken',
                DC::OrganizationName => 'ふがふがコミュニティ',
                DC::OrganizationResidence => 1,
                DC::OrganizationSite => 'https://hogehoge.com',
                DC::OrganizationTel => '000-1111-2222',
                DC::OrganizationEmail => 'fugafuga@hogehoge.com',
                DC::OrganizationContact => 'hogehoge',
                DC::OrganizationSupplement => 'ぴよぴよする組織',
                DC::OrganizationRelease => 1,
                DC::OrganizationUrl => 'OrganizationUrl',
            ]
        );
        // M_Group::insert(
        //     [
        //         DC::GroupId => 2,
        //         DC::GroupName => 'ほげほげグループ2',
        //         DC::GroupToken => 'GroupToken',
        //         DC::OrganizationName => 'ふがふがコミュニティ2',
        //         DC::OrganizationResidence => 1,
        //         DC::OrganizationSite => 'https://hogehoge.com2',
        //         DC::OrganizationTel => '000-1111-22222',
        //         DC::OrganizationEmail => 'fugafuga@hogehoge.com2',
        //         DC::OrganizationContact => 'hogehoge2',
        //         DC::OrganizationSupplement => 'ぴよぴよする組織2',
        //         DC::OrganizationRelease => 1,
        //         DC::OrganizationUrl => 'OrganizationUrl2',
        //     ]
        // );
    }
}
