<?php

use Illuminate\Database\Seeder;

use App\model\M_User;
use Constants\DbConstants as Dc;

class M_UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = \Carbon\Carbon::now();
        $data = [
            'userName' => 'テストユーザ',
            'email' => 'test@test.com',
            'email_verified_at' => $now,
            'authority' => false,
            'password' => bcrypt('test'),
            'createDate' => $now,
            'updateDate' => $now
        ];
        DB::table('M_User')->insert($data);
        // $data = [
        //     'userName' => 'テストユーザ2',
        //     'email' => 'test2@test.com',
        //     'email_verified_at' => $now,
        //     'authority' => false,
        //     'password' => bcrypt('test2'),
        //     'createDate' => $now,
        //     'updateDate' => $now
        // ];
        // DB::table('M_User')->insert($data);
    }
}
