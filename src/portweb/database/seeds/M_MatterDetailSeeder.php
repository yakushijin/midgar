<?php

use Illuminate\Database\Seeder;

use App\model\T_MatterDetail;
use Constants\DbConstants as Dc;

class M_MatterDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        T_MatterDetail::insert(
            [
                //1
                [
                    DC::MatterBasicId => 1,
                    DC::EngineerCategoryId => 1,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 70,
                    DC::LeaderFlag => false,
                    DC::Requirements => 20,
                    DC::BasicDesign => 30,
                    DC::DetailDesign => 40,
                    DC::Implementation => 10,
                    DC::Test => 0,
                    DC::Maintenance => 0,
                    DC::MatterSupplement => '',
                ],
                //2
                [
                    DC::MatterBasicId => 1,
                    DC::EngineerCategoryId => 2,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 30,
                    DC::LeaderFlag => true,
                    DC::Requirements => 20,
                    DC::BasicDesign => 30,
                    DC::DetailDesign => 40,
                    DC::Implementation => 10,
                    DC::Test => 0,
                    DC::Maintenance => 0,
                    DC::MatterSupplement => '',
                ],
                //3
                [
                    DC::MatterBasicId => 2,
                    DC::EngineerCategoryId => 6,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 40,
                    DC::LeaderFlag => false,
                    DC::Requirements => 0,
                    DC::BasicDesign => 0,
                    DC::DetailDesign => 40,
                    DC::Implementation => 20,
                    DC::Test => 20,
                    DC::Maintenance => 20,
                    DC::MatterSupplement => '',
                ],
                //4
                [
                    DC::MatterBasicId => 2,
                    DC::EngineerCategoryId => 7,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 60,
                    DC::LeaderFlag => true,
                    DC::Requirements => 0,
                    DC::BasicDesign => 20,
                    DC::DetailDesign => 30,
                    DC::Implementation => 20,
                    DC::Test => 10,
                    DC::Maintenance => 20,
                    DC::MatterSupplement => '',
                ],
                //5
                [
                    DC::MatterBasicId => 3,
                    DC::EngineerCategoryId => 2,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 50,
                    DC::LeaderFlag => true,
                    DC::Requirements => 20,
                    DC::BasicDesign => 20,
                    DC::DetailDesign => 20,
                    DC::Implementation => 30,
                    DC::Test => 10,
                    DC::Maintenance => 0,
                    DC::MatterSupplement => '',
                ],
                //6
                [
                    DC::MatterBasicId => 3,
                    DC::EngineerCategoryId => 7,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 20,
                    DC::LeaderFlag => false,
                    DC::Requirements => 20,
                    DC::BasicDesign => 10,
                    DC::DetailDesign => 30,
                    DC::Implementation => 20,
                    DC::Test => 20,
                    DC::Maintenance => 0,
                    DC::MatterSupplement => '',
                ],
                [
                    DC::MatterBasicId => 3,
                    DC::EngineerCategoryId => 8,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 30,
                    DC::LeaderFlag => false,
                    DC::Requirements => 20,
                    DC::BasicDesign => 20,
                    DC::DetailDesign => 40,
                    DC::Implementation => 10,
                    DC::Test => 10,
                    DC::Maintenance => 0,
                    DC::MatterSupplement => '',
                ],
                [
                    DC::MatterBasicId => 4,
                    DC::EngineerCategoryId => 4,
                    DC::UserId => 1,
                    DC::EngineerId => 1,
                    DC::PeriodProportion => 100,
                    DC::LeaderFlag => false,
                    DC::Requirements => 0,
                    DC::BasicDesign => 0,
                    DC::DetailDesign => 0,
                    DC::Implementation => 50,
                    DC::Test => 50,
                    DC::Maintenance => 0,
                    DC::MatterSupplement => '',
                ]
            ]
        );
    }
}
