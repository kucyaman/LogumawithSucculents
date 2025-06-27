<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Area;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $areas = [
            ['id' => 1, 'name' => '北海道', 'slug' => 'hokkaido'],
            ['id' => 2, 'name' => '東北', 'slug' => 'tohoku'],
            ['id' => 3, 'name' => '関東', 'slug' => 'kanto'],
            ['id' => 4, 'name' => '中部', 'slug' => 'chubu'],
            ['id' => 5, 'name' => '関西', 'slug' => 'kansai'],
            ['id' => 6, 'name' => '中国', 'slug' => 'chugoku'],
            ['id' => 7, 'name' => '四国', 'slug' => 'shikoku'],
            ['id' => 8, 'name' => '九州・沖縄', 'slug' => 'kyushu-okinawa'],
        ];

        foreach ($areas as $area) {
            Area::create($area);
        }
    }
} 