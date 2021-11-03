<?php

use Illuminate\Database\Seeder;

use App\model\M_TechCategory;
use Constants\DbConstants as Dc;

class M_TechCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        M_TechCategory::insert(
            [
                [
                    DC::TechCategoryId => 1,
                    DC::TechCategoryName => "プログラム",
                    DC::DispColor => "#b6ffba"
                ],
                [
                    DC::TechCategoryId => 2,
                    DC::TechCategoryName => "データベース",
                    DC::DispColor => "#ffc9ba",
                ],
                [
                    DC::TechCategoryId => 3,
                    DC::TechCategoryName => "サーバ",
                    DC::DispColor => "#cbc9ff",
                ],
                [
                    DC::TechCategoryId => 4,
                    DC::TechCategoryName => "ネットワーク",
                    DC::DispColor => "#e2e69e",
                ],
            ],

        );
    }
}
