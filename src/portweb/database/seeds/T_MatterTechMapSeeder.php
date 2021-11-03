<?php

use Illuminate\Database\Seeder;

use App\model\T_MatterTechMap;

use Constants\DbConstants as Dc;

class T_MatterTechMapSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        T_MatterTechMap::insert(
            [
                [DC::MatterDetailId => 1,DC::TechId => 1001,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 2,DC::TechId => 1007,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 2,DC::TechId => 1017,DC::UserId => 1,DC::EngineerId => 1],
          
                [DC::MatterDetailId => 3,DC::TechId => 4001,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 3,DC::TechId => 4002,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 3,DC::TechId => 4003,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 4,DC::TechId => 3001,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 4,DC::TechId => 3008,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 4,DC::TechId => 3009,DC::UserId => 1,DC::EngineerId => 1],
                
                [DC::MatterDetailId => 5,DC::TechId => 1002,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 5,DC::TechId => 1017,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 6,DC::TechId => 2003,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 6,DC::TechId => 3002,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 6,DC::TechId => 3009,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 7,DC::TechId => 3024,DC::UserId => 1,DC::EngineerId => 1],
             
                [DC::MatterDetailId => 8,DC::TechId => 1006,DC::UserId => 1,DC::EngineerId => 1],
                [DC::MatterDetailId => 8,DC::TechId => 1013,DC::UserId => 1,DC::EngineerId => 1],
            ]
        );
    }
}
