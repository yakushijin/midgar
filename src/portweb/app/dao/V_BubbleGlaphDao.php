<?php

namespace Dao;

use Constants\DbConstants as Dc;

class V_BubbleGlaphDao extends BaseDao
{
    public function count()
    {
    }

    public function select($data)
    {
        $sql = '
        select sub.techId,
        sub.techName,
        sub.dispColor,
        sum(sub.experiencePeriod) as experiencePeriod,
        sum(
            sub.detailDesignTechPoint + sub.implementationTechPoint + sub.testTechPoint + sub.maintenanceTechPoint
        ) as techPoint
    from (
            select mb.matterBasicId,
                PERIOD_DIFF(
                    date_format(mb.periodTo, "%Y%m"),
                    date_format(mb.periodFrom, "%Y%m")
                ) / 12 as experiencePeriod,
                t.techId,
                t.techName,
                tc.dispColor,
                (md.periodProportion / 100) * (md.detailDesign / 100) * 5 as detailDesignTechPoint,
                (md.periodProportion / 100) * (md.implementation / 100) * 2 as implementationTechPoint,
                (md.periodProportion / 100) * (md.test / 100) * 1 as testTechPoint,
                (md.periodProportion / 100) * (md.maintenance / 100) * 1 as maintenanceTechPoint,
                case
                    md.leaderFlag
                    when 1 then (md.periodProportion / 100) * 10
                    else 0
                end as leaderTechPoint
            from T_MatterBasic mb
                inner join T_MatterDetail md on (mb.matterBasicId = md.matterBasicId)
                inner join T_MatterTechMap mtm on (mtm.matterDetailId = md.matterDetailId)
                inner join M_Tech t on (t.techId = mtm.techId)
                inner join M_TechCategory tc on (t.techCategoryId = tc.techCategoryId)
            where md.userId = '.$data[DC::UserId].'
            and md.engineerId = '.$data[DC::EngineerId].'
        ) sub
    group by sub.techId,
        sub.techName,
        sub.dispColor
      ';

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
