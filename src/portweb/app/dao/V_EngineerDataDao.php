<?php

namespace Dao;

use Constants\DbConstants as Dc;

class V_EngineerDataDao extends BaseDao
{
    public function count()
    {
    }

    public function select($id)
    {
        $sql = "
      select engineerName,
      TIMESTAMPDIFF(YEAR, engineerBirthday, CURDATE()) AS engineerAge,
      case
          engineerResidence
          when 1 then '北海道'
          when 2 then '青森県'
          when 3 then '岩手県'
          when 4 then '宮城県'
          when 5 then '秋田県'
          when 6 then '山形県'
          when 7 then '福島県'
          when 8 then '茨城県'
          when 9 then '栃木県'
          when 10 then '群馬県'
          when 11 then '埼玉県'
          when 12 then '千葉県'
          when 13 then '東京都'
          when 14 then '神奈川県'
          when 15 then '新潟県'
          when 16 then '富山県'
          when 17 then '石川県'
          when 18 then '福井県'
          when 19 then '山梨県'
          when 20 then '長野県'
          when 21 then '岐阜県'
          when 22 then '静岡県'
          when 23 then '愛知県'
          when 24 then '三重県'
          when 25 then '滋賀県'
          when 26 then '京都府'
          when 27 then '大阪府'
          when 28 then '兵庫県'
          when 29 then '奈良県'
          when 30 then '和歌山県'
          when 31 then '鳥取県'
          when 32 then '島根県'
          when 33 then '岡山県'
          when 34 then '広島県'
          when 35 then '山口県'
          when 36 then '徳島県'
          when 37 then '香川県'
          when 38 then '愛媛県'
          when 39 then '高知県'
          when 40 then '福岡県'
          when 41 then '佐賀県'
          when 42 then '長崎県'
          when 43 then '熊本県'
          when 44 then '大分県'
          when 45 then '宮崎県'
          when 46 then '鹿児島県'
          when 47 then '沖縄県'
          else '不明'
      end as engineerResidence,
      CASE
          engineerGender
          WHEN 1 THEN '男性'
          WHEN 2 THEN '女性'
          ELSE '不明'
      END as engineerGender,
      engineerEmail,
      engineerTwitter,
      engineerFacebook,
      engineerGitHub,
      engineerLinkedin,
      engineerSite,
      engineerSupplement
  from M_Engineer
      ";

        $data = \DB::select(\DB::raw($sql));
        return $data;
    }

    public function insert($data)
    {
    }

    public function update($id, $data)
    {
    }

    public function delete($id)
    {
    }
}
