<?php

namespace Constants;

class ApiConstants extends BaseConstants
{

    //ページ遷移
    public const LoginPage = "auth.login";
    public const EntryPage = "app";
    public const UserEditPage = "useredit";
    public const UserListPage = "userlist";
    public const GroupEditPage = "groupedit";
    public const EngineerListPage = "engineerlist";
    public const EngineerEditPage = "engineeredit";

    public const EntryPageClassName = "AppEntryController";

    //API

    //ユーザ一覧ページ
    //ユーザ検索
    public const UserSearchUrl = "userSearch";
    public const UserSearchClassName = "UserSearchController";

    //ユーザ編集ページ
    //ユーザ編集
    public const UserGetUrl = "userget";
    public const UserBaseEditUrl = "userbaseedit";
    public const UserGetClassName = "UserGetController";
    public const UserBaseEditClassName = "UserBaseEditController";

    //ユーザ招待ページ
    // public const EngineereditPage = "engineeredit";

    //グループ編集ページ
    public const GroupGetUrl = "groupget";
    public const GroupBaseEditUrl = "groupbaseedit";
    public const GroupReleaseEditUrl = "groupreleaseedit";
    public const GroupGetClassName = "GroupGetController";
    public const GroupBaseEditClassName = "GroupBaseEditController";
    public const GroupReleaseEditClassName = "GroupReleaseEditController";

    //エンジニア一覧ページ
    public const EngineerSearchUrl = "engineersearch";
    public const EngineerSearchClassName = "EngineerSearchController";

    //エンジニア編集ページ
    public const EngineerGetUrl = "engineerget";
    public const EngineerBaseEditUrl = "engineerbaseedit";
    public const EngineerMatterEditUrl = "engineermatteredit";
    public const EngineerReleaseEditUrl = "engineerreleaseedit";
    public const EngineerPublicUrl = "engineerpublic";
    public const EngineerGetClassName = "EngineerBaseGetController";
    public const EngineerBaseEditClassName = "EngineerBaseEditController";
    public const EngineerMatterEditClassName = "EngineerMatterEditController";
    public const EngineerReleaseEditClassName = "EngineerReleaseEditController";
    public const EngineerPublicClassName = "EngineerPublicController";

    public const GetFunctionName = "get";
    public const PostFunctionName = "post";




}
