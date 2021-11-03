import * as GC from "../GlobalConst";

function serverConnection(apiName, reqData, props) {
    props.UpdateProgressState(true);
    axios
        .post("/" + apiName, reqData)
        .then(response => {
            console.log(response.data); // レスポンスデータ
            console.log(response.status); // ステータスコード
            console.log(response.statusText); // ステータステキスト
            console.log(response.headers); // レスポンスヘッダ
            console.log(response.config); // コンフィグ
            responseDispatch(apiName, response, props);
            props.UpdateProgressState(false);
        })
        .catch(err => {
            errorDispatch(err.response, props);
            props.UpdateProgressState(false);
        });
}

export default serverConnection;

function responseDispatch(apiName, response, props) {
    switch (apiName) {
        case "userget":
            props.initUserDetailData(response.data);
            break;
        case "userbaseedit":
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            break;
        case "userSearch":
            props.updateUserList(response.data.userList);
            break;
        case "groupget":
            props.initGroupData(response.data);
            break;
        case "groupbaseedit":
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            break;
        case "groupreleaseedit":
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            break;
        case "engineersearch":
            props.updateEngineerList(response.data.engineerList);
            break;
        case "engineerget":
            props.initProfileData(response.data);
            props.initSkillData(response.data["matterData"]);
            props.updateTechList(response.data["techList"]);
            props.updateEngineerCategoryList(
                response.data["engineerCategoryList"]
            );
            break;
        case "engineerbaseedit":
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: "プロフィール情報" + GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            break;
        case "engineermatteredit":
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: "実績情報" + GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            break;
        case "engineerreleaseedit":
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            break;
        case GC.ApiName.EngineerPublic:
            props.UpdateServerResult({
                state: GC.ResultState.INFO,
                message: "エンジニア情報公開サイト" + GC.MessageText.Update
            });
            props.UpdateSnackbarState(true);
            setTimeout(function() {
                const Url =
                    "https://" +
                    location.host +
                    "/user?" +
                    response.data["engineerUrl"];
                window.open(Url);
            }, "2000");
            break;
    }
}

function errorDispatch(res, props) {
    switch (res.status) {
        case 419:
            props.UpdateServerResult({
                state: GC.ResultState.WARNING,
                message: GC.MessageText.SessionDisconnect
            });
            break;
        case 500:
            props.UpdateServerResult({
                state: GC.ResultState.ERROR,
                message: GC.MessageText.ServerError
            });
            break;
        case 504:
            props.UpdateServerResult({
                state: GC.ResultState.WARNING,
                message: GC.MessageText.ServerTimeOut
            });
            break;
        default:
            props.UpdateServerResult({
                state: GC.ResultState.ERROR,
                message: GC.MessageText.OtherError
            });
            break;
    }
    props.UpdateSnackbarState(true);
}
