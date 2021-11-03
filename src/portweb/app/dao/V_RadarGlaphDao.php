<?php

namespace Dao;

use Constants\DbConstants as Dc;

class V_RadarGlaphDao extends BaseDao
{
   public function count()
   {
   }

   public function select($data)
   {
      $sql = '
      select sub.engineerCategoryId,
          (
              sub.pmManagePoint + sub.requirementsManagePoint + sub.basicDesignManagePoint + sub.detailDesignManagePoint + sub.implementationManagePoint + sub.testManagePoint + sub.maintenanceManagePoint + sub.leaderManagePoint
          ) * sub.mouthperiod as manage,
          (
              sub.pmTechPoint + sub.requirementsTechPoint + sub.basicDesignTechPoint + sub.detailDesignTechPoint + sub.implementationTechPoint + sub.testTechPoint + sub.maintenanceTechPoint + sub.leaderTechPoint
          ) * sub.mouthperiod as tech
      from (
              select md.engineerId,
                  md.engineerCategoryId,
                  sum(
                      case
                          mb.pmFlag
                          when 1 then (md.periodProportion / 100) * 6
                          else 0
                      end
                  ) as pmManagePoint,
                  sum(
                      case
                          mb.pmFlag
                          when 1 then (md.periodProportion / 100) * 2
                          else 0
                      end
                  ) as pmTechPoint,
                  sum(
                      (md.periodProportion / 100) * (md.requirements / 100) * 4
                  ) as requirementsManagePoint,
                  sum(
                      (md.periodProportion / 100) * (md.requirements / 100) * 1
                  ) as requirementsTechPoint,
                  sum(
                      (md.periodProportion / 100) * (md.basicDesign / 100) * 2
                  ) as basicDesignManagePoint,
                  sum(
                      (md.periodProportion / 100) * (md.basicDesign / 100) * 2
                  ) as basicDesignTechPoint,
                  sum(
                      (md.periodProportion / 100) * (md.detailDesign / 100) * 1
                  ) as detailDesignManagePoint,
                  sum(
                      (md.periodProportion / 100) * (md.detailDesign / 100) * 4
                  ) as detailDesignTechPoint,
                  sum(
                      (md.periodProportion / 100) * (md.implementation / 100) * 0
                  ) as implementationManagePoint,
                  sum(
                      (md.periodProportion / 100) * (md.implementation / 100) * 2
                  ) as implementationTechPoint,
                  sum(
                      (md.periodProportion / 100) * (md.test / 100) * 0
                  ) as testManagePoint,
                  sum(
                      (md.periodProportion / 100) * (md.test / 100) * 1
                  ) as testTechPoint,
                  sum(
                      (md.periodProportion / 100) * (md.maintenance / 100) * 1
                  ) as maintenanceManagePoint,
                  sum(
                      (md.periodProportion / 100) * (md.maintenance / 100) * 1
                  ) as maintenanceTechPoint,
                  sum(
                      case
                          md.leaderFlag
                          when 1 then (md.periodProportion / 100) * 2
                          else 0
                      end
                  ) as leaderManagePoint,
                  sum(
                      case
                          md.leaderFlag
                          when 1 then (md.periodProportion / 100) * 6
                          else 0
                      end
                  ) as leaderTechPoint,
                  mb.mouthperiod
              from T_MatterDetail md
                  inner join (
                      select matterBasicId,
                          pmFlag,
                          PERIOD_DIFF(
                              DATE_FORMAT(periodTo, "%Y%m"),
                              DATE_FORMAT(periodFrom, "%Y%m")
                          ) / 12 as mouthperiod
                      from T_MatterBasic
                      where userId = '.$data[DC::UserId].'
                      and engineerId = '.$data[DC::EngineerId].'
                  ) mb on (mb.matterBasicId = md.matterBasicId)
              group by md.engineerId,
                  md.engineerCategoryId,
                  mb.mouthperiod
          ) sub
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
