select sub.engineerId,
    sum(
        sub.experiencePeriod * periodProportion * requirementsPoint
    ) as requirements,
    sum(
        sub.experiencePeriod * periodProportion * basicDesignPoint
    ) as basicDesign,
    sum(
        sub.experiencePeriod * periodProportion * detailDesignPoint
    ) as detailDesign,
    sum(
        sub.experiencePeriod * periodProportion * implementationPoint
    ) as implementation,
    sum(
        sub.experiencePeriod * periodProportion * testPoint
    ) as test,
    sum(
        sub.experiencePeriod * periodProportion * maintenancePoint
    ) as maintenance
from (
        select md.engineerId,
            PERIOD_DIFF(
                date_format(mb.periodTo, "%Y%m"),
                date_format(mb.periodFrom, "%Y%m")
            ) / 12 as experiencePeriod,
            (md.periodProportion / 100) as periodProportion,
            (md.requirements / 100) as requirementsPoint,
            (md.basicDesign / 100) as basicDesignPoint,
            (md.detailDesign / 100) as detailDesignPoint,
            (md.implementation / 100) as implementationPoint,
            (md.test / 100) as testPoint,
            (md.maintenance / 100) as maintenancePoint
        from T_MatterDetail md
            inner join T_MatterBasic mb on (mb.matterBasicId = md.matterBasicId)
        where mb.userId = 1
            and mb.engineerId = 1
    ) sub
group by sub.engineerId