<?php

use Illuminate\Database\Seeder;

use App\model\M_Tech;
use Constants\DbConstants as Dc;

class M_TechSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        M_Tech::insert(
            [
                //プログラム
                [DC::TechId => 1001, DC::TechCategoryId => 1, DC::TechName => 'javascript'],
                [DC::TechId => 1002, DC::TechCategoryId => 1, DC::TechName => 'php'],
                [DC::TechId => 1003, DC::TechCategoryId => 1, DC::TechName => 'ruby'],
                [DC::TechId => 1004, DC::TechCategoryId => 1, DC::TechName => 'python'],
                [DC::TechId => 1005, DC::TechCategoryId => 1, DC::TechName => 'C'],
                [DC::TechId => 1006, DC::TechCategoryId => 1, DC::TechName => 'java'],
                [DC::TechId => 1007, DC::TechCategoryId => 1, DC::TechName => 'C#'],
                [DC::TechId => 1008, DC::TechCategoryId => 1, DC::TechName => 'C++'],
                [DC::TechId => 1009, DC::TechCategoryId => 1, DC::TechName => 'Go'],
                [DC::TechId => 1010, DC::TechCategoryId => 1, DC::TechName => 'Rust'],
                [DC::TechId => 1011, DC::TechCategoryId => 1, DC::TechName => 'perl'],
                [DC::TechId => 1012, DC::TechCategoryId => 1, DC::TechName => 'spring'],
                [DC::TechId => 1013, DC::TechCategoryId => 1, DC::TechName => '.net'],
                [DC::TechId => 1014, DC::TechCategoryId => 1, DC::TechName => 'COBOL'],
                [DC::TechId => 1015, DC::TechCategoryId => 1, DC::TechName => 'Swift'],
                [DC::TechId => 1016, DC::TechCategoryId => 1, DC::TechName => 'Visual Basic'],
                [DC::TechId => 1017, DC::TechCategoryId => 1, DC::TechName => 'SQL'],
                [DC::TechId => 1018, DC::TechCategoryId => 1, DC::TechName => 'VBA'],
                [DC::TechId => 1019, DC::TechCategoryId => 1, DC::TechName => 'R'],
                [DC::TechId => 1020, DC::TechCategoryId => 1, DC::TechName => 'Scala'],
                [DC::TechId => 1021, DC::TechCategoryId => 1, DC::TechName => 'Swift'],
                [DC::TechId => 1022, DC::TechCategoryId => 1, DC::TechName => 'objective-c'],
                [DC::TechId => 1023, DC::TechCategoryId => 1, DC::TechName => 'Kotlin'],
                [DC::TechId => 1024, DC::TechCategoryId => 1, DC::TechName => 'Lua'],
                [DC::TechId => 1025, DC::TechCategoryId => 1, DC::TechName => 'VB.NET'],
                [DC::TechId => 1026, DC::TechCategoryId => 1, DC::TechName => 'アセンブリ言語'],
                [DC::TechId => 1027, DC::TechCategoryId => 1, DC::TechName => 'Fortran'],
                [DC::TechId => 1028, DC::TechCategoryId => 1, DC::TechName => 'VB.NET'],

                //データベース
                [DC::TechId => 2001, DC::TechCategoryId => 2, DC::TechName => 'oracle'],
                [DC::TechId => 2002, DC::TechCategoryId => 2, DC::TechName => 'postgres'],
                [DC::TechId => 2003, DC::TechCategoryId => 2, DC::TechName => 'mysql'],
                [DC::TechId => 2004, DC::TechCategoryId => 2, DC::TechName => 'sqlserver'],
                [DC::TechId => 2005, DC::TechCategoryId => 2, DC::TechName => 'Access'],
                [DC::TechId => 2006, DC::TechCategoryId => 2, DC::TechName => 'SQLite'],
                [DC::TechId => 2007, DC::TechCategoryId => 2, DC::TechName => 'DB2'],
                [DC::TechId => 2008, DC::TechCategoryId => 2, DC::TechName => 'Redis'],
                [DC::TechId => 2009, DC::TechCategoryId => 2, DC::TechName => 'MongoDB'],
                [DC::TechId => 2010, DC::TechCategoryId => 2, DC::TechName => 'Cassandra'],
                [DC::TechId => 2011, DC::TechCategoryId => 2, DC::TechName => 'Neo4j'],
                [DC::TechId => 2012, DC::TechCategoryId => 2, DC::TechName => 'HBase'],
                [DC::TechId => 2013, DC::TechCategoryId => 2, DC::TechName => 'Riak'],
                [DC::TechId => 2014, DC::TechCategoryId => 2, DC::TechName => 'CouchDB'],
                [DC::TechId => 2015, DC::TechCategoryId => 2, DC::TechName => 'memcached'],

                //サーバ
                [DC::TechId => 3001, DC::TechCategoryId => 3, DC::TechName => 'redhat'],
                [DC::TechId => 3002, DC::TechCategoryId => 3, DC::TechName => 'centos'],
                [DC::TechId => 3003, DC::TechCategoryId => 3, DC::TechName => 'debian'],
                [DC::TechId => 3004, DC::TechCategoryId => 3, DC::TechName => 'ubuntu'],
                [DC::TechId => 3005, DC::TechCategoryId => 3, DC::TechName => 'unix'],
                [DC::TechId => 3006, DC::TechCategoryId => 3, DC::TechName => 'solaris'],
                [DC::TechId => 3007, DC::TechCategoryId => 3, DC::TechName => 'windowsserver'],
                [DC::TechId => 3008, DC::TechCategoryId => 3, DC::TechName => 'apache'],
                [DC::TechId => 3009, DC::TechCategoryId => 3, DC::TechName => 'nginx'],
                [DC::TechId => 3010, DC::TechCategoryId => 3, DC::TechName => 'IIS'],
                [DC::TechId => 3011, DC::TechCategoryId => 3, DC::TechName => 'shellscript'],
                [DC::TechId => 3012, DC::TechCategoryId => 3, DC::TechName => 'powershell'],
                [DC::TechId => 3014, DC::TechCategoryId => 3, DC::TechName => 'batch'],
                [DC::TechId => 3015, DC::TechCategoryId => 3, DC::TechName => 'bind'],
                [DC::TechId => 3016, DC::TechCategoryId => 3, DC::TechName => 'PowerDNS'],
                [DC::TechId => 3017, DC::TechCategoryId => 3, DC::TechName => 'NSD'],
                [DC::TechId => 3018, DC::TechCategoryId => 3, DC::TechName => 'KnotDNS'],
                [DC::TechId => 3019, DC::TechCategoryId => 3, DC::TechName => 'postfix'],
                [DC::TechId => 3020, DC::TechCategoryId => 3, DC::TechName => 'sendmail'],
                [DC::TechId => 3021, DC::TechCategoryId => 3, DC::TechName => 'qmail'],
                [DC::TechId => 3022, DC::TechCategoryId => 3, DC::TechName => 'Dovecot'],
                [DC::TechId => 3023, DC::TechCategoryId => 3, DC::TechName => 'Courier-IMAP'],
                [DC::TechId => 3024, DC::TechCategoryId => 3, DC::TechName => 'AWS'],
                [DC::TechId => 3025, DC::TechCategoryId => 3, DC::TechName => 'GCP'],
                [DC::TechId => 3026, DC::TechCategoryId => 3, DC::TechName => 'Azure'],

                //ネットワーク
                [DC::TechId => 4001, DC::TechCategoryId => 4, DC::TechName => 'L2機器'],
                [DC::TechId => 4002, DC::TechCategoryId => 4, DC::TechName => 'L3機器'],
                [DC::TechId => 4003, DC::TechCategoryId => 4, DC::TechName => 'ルータ'],
                [DC::TechId => 4004, DC::TechCategoryId => 4, DC::TechName => 'FW機器'],
                [DC::TechId => 4005, DC::TechCategoryId => 4, DC::TechName => 'LB機器'],
                [DC::TechId => 4006, DC::TechCategoryId => 4, DC::TechName => 'プロキシ機器'],
            ]
        );
    }
}
