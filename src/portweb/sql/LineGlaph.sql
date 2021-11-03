-- 折れ線集計基本
with recursive tmp(
    matterBasicId,
    startMonth,
    endMonth,
    startYear,
    endYear,
    scaleYear,
    engineerCategoryId,
    engineerCategoryName,
    dispColor,
    periodProportion
) as(
    select mb.matterBasicId,
        13 - date_format(mb.periodFrom, "%m") as startMonth,
        date_format(mb.periodTo, "%m") as endMonth,
        date_format(mb.periodFrom, "%Y") as startYear,
        date_format(mb.periodTo, "%Y") as endYear,
        date_format(mb.periodFrom, "%Y") as scaleYear,
        md.engineerCategoryId,
        ec.engineerCategoryName,
        ec.dispColor,
        md.periodProportion
    from T_MatterBasic mb
        inner join T_MatterDetail md on (mb.matterBasicId = md.matterBasicId)
        inner join M_EngineerCategory ec on (ec.engineerCategoryId = md.engineerCategoryId)
    where md.userId = 1
    and md.engineerId = 1
    union ALL
    select matterBasicId,
        startMonth,
        endMonth,
        startYear,
        endYear,
        scaleYear + 1,
        engineerCategoryId,
        engineerCategoryName,
        dispColor,
        periodProportion
    from tmp
    where scaleYear + 1 <= endYear
)
select *
from (
        select engineerCategoryId,
            engineerCategoryName,
            dispColor,
            scaleYear,
            sum(
                case
                    scaleYear
                    when startYear then startMonth * (periodProportion / 100)
                    when endYear then endMonth * (periodProportion / 100)
                    else 12 * (periodProportion / 100)
                end
            ) as scaleMonth
        from tmp
        group by engineerCategoryId,
            engineerCategoryName,
            dispColor,
            scaleYear
    ) sub