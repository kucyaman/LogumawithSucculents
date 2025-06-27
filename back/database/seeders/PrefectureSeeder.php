<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Prefecture;

class PrefectureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $prefectures = [
            ['id' => 1, 'area_id' => 1, 'name' => '北海道', 'slug' => 'hokkaido'],
            ['id' => 2, 'area_id' => 2, 'name' => '青森県', 'slug' => 'aomori'],
            ['id' => 3, 'area_id' => 2, 'name' => '岩手県', 'slug' => 'iwate'],
            ['id' => 4, 'area_id' => 2, 'name' => '宮城県', 'slug' => 'miyagi'],
            ['id' => 5, 'area_id' => 2, 'name' => '秋田県', 'slug' => 'akita'],
            ['id' => 6, 'area_id' => 2, 'name' => '山形県', 'slug' => 'yamagata'],
            ['id' => 7, 'area_id' => 2, 'name' => '福島県', 'slug' => 'fukushima'],
            ['id' => 8, 'area_id' => 3, 'name' => '茨城県', 'slug' => 'ibaraki'],
            ['id' => 9, 'area_id' => 3, 'name' => '栃木県', 'slug' => 'tochigi'],
            ['id' => 10, 'area_id' => 3, 'name' => '群馬県', 'slug' => 'gunma'],
            ['id' => 11, 'area_id' => 3, 'name' => '埼玉県', 'slug' => 'saitama'],
            ['id' => 12, 'area_id' => 3, 'name' => '千葉県', 'slug' => 'chiba'],
            ['id' => 13, 'area_id' => 3, 'name' => '東京都', 'slug' => 'tokyo'],
            ['id' => 14, 'area_id' => 3, 'name' => '神奈川県', 'slug' => 'kanagawa'],
            ['id' => 15, 'area_id' => 4, 'name' => '新潟県', 'slug' => 'niigata'],
            ['id' => 16, 'area_id' => 4, 'name' => '富山県', 'slug' => 'toyama'],
            ['id' => 17, 'area_id' => 4, 'name' => '石川県', 'slug' => 'ishikawa'],
            ['id' => 18, 'area_id' => 4, 'name' => '福井県', 'slug' => 'fukui'],
            ['id' => 19, 'area_id' => 4, 'name' => '山梨県', 'slug' => 'yamanashi'],
            ['id' => 20, 'area_id' => 4, 'name' => '長野県', 'slug' => 'nagano'],
            ['id' => 21, 'area_id' => 4, 'name' => '岐阜県', 'slug' => 'gifu'],
            ['id' => 22, 'area_id' => 4, 'name' => '静岡県', 'slug' => 'shizuoka'],
            ['id' => 23, 'area_id' => 4, 'name' => '愛知県', 'slug' => 'aichi'],
            ['id' => 24, 'area_id' => 5, 'name' => '三重県', 'slug' => 'mie'],
            ['id' => 25, 'area_id' => 5, 'name' => '滋賀県', 'slug' => 'shiga'],
            ['id' => 26, 'area_id' => 5, 'name' => '京都府', 'slug' => 'kyoto'],
            ['id' => 27, 'area_id' => 5, 'name' => '大阪府', 'slug' => 'osaka'],
            ['id' => 28, 'area_id' => 5, 'name' => '兵庫県', 'slug' => 'hyogo'],
            ['id' => 29, 'area_id' => 5, 'name' => '奈良県', 'slug' => 'nara'],
            ['id' => 30, 'area_id' => 5, 'name' => '和歌山県', 'slug' => 'wakayama'],
            ['id' => 31, 'area_id' => 6, 'name' => '鳥取県', 'slug' => 'tottori'],
            ['id' => 32, 'area_id' => 6, 'name' => '島根県', 'slug' => 'shimane'],
            ['id' => 33, 'area_id' => 6, 'name' => '岡山県', 'slug' => 'okayama'],
            ['id' => 34, 'area_id' => 6, 'name' => '広島県', 'slug' => 'hiroshima'],
            ['id' => 35, 'area_id' => 6, 'name' => '山口県', 'slug' => 'yamaguchi'],
            ['id' => 36, 'area_id' => 7, 'name' => '徳島県', 'slug' => 'tokushima'],
            ['id' => 37, 'area_id' => 7, 'name' => '香川県', 'slug' => 'kagawa'],
            ['id' => 38, 'area_id' => 7, 'name' => '愛媛県', 'slug' => 'ehime'],
            ['id' => 39, 'area_id' => 7, 'name' => '高知県', 'slug' => 'kochi'],
            ['id' => 40, 'area_id' => 8, 'name' => '福岡県', 'slug' => 'fukuoka'],
            ['id' => 41, 'area_id' => 8, 'name' => '佐賀県', 'slug' => 'saga'],
            ['id' => 42, 'area_id' => 8, 'name' => '長崎県', 'slug' => 'nagasaki'],
            ['id' => 43, 'area_id' => 8, 'name' => '熊本県', 'slug' => 'kumamoto'],
            ['id' => 44, 'area_id' => 8, 'name' => '大分県', 'slug' => 'oita'],
            ['id' => 45, 'area_id' => 8, 'name' => '宮崎県', 'slug' => 'miyazaki'],
            ['id' => 46, 'area_id' => 8, 'name' => '鹿児島県', 'slug' => 'kagoshima'],
            ['id' => 47, 'area_id' => 8, 'name' => '沖縄県', 'slug' => 'okinawa'],
        ];

        foreach ($prefectures as $prefecture) {
            Prefecture::create($prefecture);
        }
    }
} 