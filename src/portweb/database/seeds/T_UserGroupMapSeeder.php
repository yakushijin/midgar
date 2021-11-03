<?php

use Illuminate\Database\Seeder;

use App\model\T_UserGroupMap;

use Constants\DbConstants as Dc;

class T_UserGroupMapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        T_UserGroupMap::insert(
            [
                DC::UserId => 1,
                DC::GroupId => 1,
                DC::OwnerFlg => 1,
            ]
        );
        // T_UserGroupMap::insert(
        //     [
        //         DC::UserId => 2,
        //         DC::GroupId => 2,
        //         DC::OwnerFlg => 1,
        //     ]
        // );
    }
}
