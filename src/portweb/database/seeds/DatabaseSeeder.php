<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(M_UserSeeder::class);
        $this->call(T_UserGroupMapSeeder::class);
        $this->call(M_GroupSeeder::class);
        $this->call(M_EngineerSeeder::class);
        $this->call(T_MatterBasicSeeder::class);
        $this->call(M_MatterDetailSeeder::class);
        $this->call(T_MatterTechMapSeeder::class);
        $this->call(M_TechSeeder::class);
        $this->call(M_EngineerCategorySeeder::class);
        $this->call(M_TechCategorySeeder::class);
    }
}
