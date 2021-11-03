<?php

use Illuminate\Database\Seeder;

use App\model\M_EngineerCategory;
use Constants\DbConstants as Dc;

class M_EngineerCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        M_EngineerCategory::insert(
            [
                [DC::EngineerCategoryId => 1, DC::EngineerCategoryName => "WEBフロントエンド", DC::EngineerClassification => 1,DC::DispColor => "#0000ff"],
                [DC::EngineerCategoryId => 2, DC::EngineerCategoryName => "バックエンド", DC::EngineerClassification => 1,DC::DispColor => "#00ffff"],
                [DC::EngineerCategoryId => 3, DC::EngineerCategoryName => "スマホアプリケーション", DC::EngineerClassification => 1,DC::DispColor => "#ff0000"],
                [DC::EngineerCategoryId => 4, DC::EngineerCategoryName => "OSアプリケーション", DC::EngineerClassification => 1,DC::DispColor => "#ff00ff"],
                [DC::EngineerCategoryId => 5, DC::EngineerCategoryName => "AI/機械学習", DC::EngineerClassification => 1,DC::DispColor => "#00ff00"],
                [DC::EngineerCategoryId => 6, DC::EngineerCategoryName => "ネットワーク/セキュリティ", DC::EngineerClassification => 1,DC::DispColor => "#ffff00"],
                [DC::EngineerCategoryId => 7, DC::EngineerCategoryName => "OS/ミドルウェア", DC::EngineerClassification => 1,DC::DispColor => "#008888"],
                [DC::EngineerCategoryId => 8, DC::EngineerCategoryName => "クラウド/仮想化", DC::EngineerClassification => 1,DC::DispColor => "#888800"],
                [DC::EngineerCategoryId => 9, DC::EngineerCategoryName => "ハードウェア", DC::EngineerClassification => 1,DC::DispColor => "#008800"],
                [DC::EngineerCategoryId => 10, DC::EngineerCategoryName => "コンシューマ向けゲーム", DC::EngineerClassification => 1,DC::DispColor => "#880088"],
                [DC::EngineerCategoryId => 11, DC::EngineerCategoryName => "組み込み/汎用機", DC::EngineerClassification => 1,DC::DispColor => "#888888"],
            ]
        );
    }
}
