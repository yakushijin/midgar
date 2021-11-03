<?php

namespace Constants;

class DbConstants extends BaseConstants
{

    //DBオブジェクトプロパティ
    public const Column = "column";
    public const Value = "value";
    public const ValueInit = null;

    //テーブル
    public const M_Group = "M_Group";
    public const T_UserGroupMap = "T_UserGroupMap";
    public const M_User = "M_User";
    public const M_Engineer = "M_Engineer";
    public const T_MatterBasic = "T_MatterBasic";
    public const T_MatterDetail = "T_MatterDetail";
    public const M_EngineerCategory = "M_EngineerCategory";
    public const T_MatterTechMap = "T_MatterTechMap";
    public const M_Tech = "M_Tech";
    public const M_TechCategory = "M_TechCategory";

    //カラム（各ID）
    public const GroupId = "groupId";
    public const UserId = "userId";
    public const EngineerId = "engineerId";
    public const MatterBasicId = "matterBasicId";
    public const MatterDetailId = "matterDetailId";
    public const EngineerCategoryId = "engineerCategoryId";
    public const TechId = "techId";
    public const TechCategoryId = "techCategoryId";

    //カラム（ユーザ）
    public const UserName = "userName";
    public const Email = "email";
    public const Email_verified_at = "email_verified_at";
    public const Remember_token = "remember_token";
    public const Password = "password";
    public const Authority = "authority";
    
    //カラム（ユーザグループマッピング）
    public const OwnerFlg = "ownerFlg";

    //カラム（グループ）
    public const GroupName = "groupName";
    public const GroupToken = "groupToken";
    public const OrganizationName = "organizationName";
    public const OrganizationResidence = "organizationResidence";
    public const OrganizationSite = "organizationSite";
    public const OrganizationTel = "organizationTel";
    public const OrganizationEmail = "organizationEmail";
    public const OrganizationContact = "organizationContact";
    public const OrganizationSupplement = "organizationSupplement";
    public const OrganizationRelease = "organizationRelease";
    public const OrganizationUrl = "organizationUrl";

    //カラム（エンジニア）
    public const EngineerName = "engineerName";
    public const EngineerBirthday = "engineerBirthday";
    public const EngineerResidence = "engineerResidence";
    public const EngineerGender = "engineerGender";
    public const EngineerEmail = "engineerEmail";
    public const EngineerTwitter = "engineerTwitter";
    public const EngineerFacebook = "engineerFacebook";
    public const EngineerGitHub = "engineerGitHub";
    public const EngineerLinkedin = "engineerLinkedin";
    public const EngineerSite = "engineerSite";
    public const EngineerSupplement = "engineerSupplement";
    public const EngineerRelease = "engineerRelease";
    public const EngineerUrl = "engineerUrl";

    //カラム（技術タイプ）
    public const EngineerCategoryName = "engineerCategoryName";
    public const EngineerClassification = "engineerClassification";

    //カラム（技術カテゴリ）
    public const TechCategoryName = "techCategoryName";

    //カラム（案件基本）
    public const MatterName = "matterName";
    public const PeriodFrom = "periodFrom";
    public const PeriodTo = "periodTo";
    public const PmFlag = "pmFlag";

    //カラム（案件詳細）
    public const PeriodProportion = "periodProportion";
    public const LeaderFlag = "leaderFlag";
    public const Requirements = "requirements";
    public const BasicDesign = "basicDesign";
    public const DetailDesign = "detailDesign";
    public const Implementation = "implementation";
    public const Test = "test";
    public const Maintenance = "maintenance";
    public const MatterSupplement = "matterSupplement";

    //カラム（技術）
    public const TechName = "techName";


    //カラム（共通）
    public const CreateDate = "createDate";
    public const UpdateDate = "updateDate";
    public const DispColor = "dispColor";


  
}
