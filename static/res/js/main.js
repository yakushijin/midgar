import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LineGlaph } from "./LineGlaph";
import { MatterDisp } from "./MatterDisp";
import { RadarGlaph } from "./RadarGlaph";
import { BubbleGlaph } from "./BubbleGlaph";
import { PieGlaph } from "./PieGlaph";
import { EngineerDisp } from "./EngineerDisp";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import axios from "axios";

import InsertChartIcon from "@material-ui/icons/InsertChart";
import PersonIcon from "@material-ui/icons/Person";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import Divider from "@material-ui/core/Divider";

const GlobalStyle = createGlobalStyle`
  html{height: 100%;}
  body {background: #f5f5f5;}
`;

const BaseArea = styled.div`
  background: #fff;
  margin-bottom: 4px;
  border-radius: 2px;
  box-shadow: 0 0 8px #ddd;
`;

const TitleArea = styled.div`
  display: flex;
`;

const IconArea = styled.div`
  padding: 8px 0 0 8px;
`;

const BaseTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 10px 0 2px;
`;

const GlaphUnit = styled.div`
  background: #fff;
  display: inline-block;

  @media screen and (min-width: 600px) {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
  @media screen and (min-width: 1920px) {
    width: 33.3%;
  }
  @media screen and (min-width: 1921px) {
    width: 25%;
  }
`;

const undefinedCheck = (data) => {
  if (typeof data === "undefined") {
    return false;
  } else {
    return true;
  }
};

const GetJsonData = (ReRender) => {
  const urlPram = location.search.substring(1);
  axios
    .get("/storage/" + urlPram + "/resourceData.json")
    .then((response) => {
      console.log(response.data); // レスポンスデータ
      // console.log(response.status); // ステータスコード
      // console.log(response.statusText); // ステータステキスト
      // console.log(response.heatus); // ステータスコード
      // console.log(response.statusText); // ステータステキスト
      // console.log(response.headers); // レスポンスヘッダ
      // console.log(response.config); // コンフィグ

      ReRender(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Contents = () => {
  const [serverData, setUpdata] = useState(null);
  function ReRender(data) {
    if (!serverData) setUpdata(data);
  }

  GetJsonData(ReRender);

  return (
    <React.Fragment>
      {serverData ? (
        <React.Fragment>
          <BaseArea>
            <TitleArea>
              <IconArea>
                <PersonIcon fontSize={"large"} />
              </IconArea>
              <BaseTitle>プロフィール</BaseTitle>
            </TitleArea>
            <Divider />
            {serverData ? (
              <EngineerDisp inputData={serverData["engineerData"]} />
            ) : (
              <div></div>
            )}
          </BaseArea>
          {serverData["glaphData"] ? (
            <BaseArea>
              <TitleArea>
                <IconArea>
                  <InsertChartIcon fontSize={"large"} />
                </IconArea>
                <BaseTitle>パラメータ</BaseTitle>
              </TitleArea>
              <Divider />
              <React.Fragment>
                <GlaphUnit>
                  <LineGlaph inputData={serverData["glaphData"]["lineData"]} />
                </GlaphUnit>
                <GlaphUnit>
                  <RadarGlaph
                    inputData={serverData["glaphData"]["radarData"]}
                  />
                </GlaphUnit>
                <GlaphUnit>
                  <BubbleGlaph
                    inputData={serverData["glaphData"]["bubbleData"]}
                  />
                </GlaphUnit>
                <GlaphUnit>
                  <PieGlaph inputData={serverData["glaphData"]["pieData"]} />
                </GlaphUnit>
              </React.Fragment>
            </BaseArea>
          ) : (
            <div></div>
          )}
          {serverData["matterData"] ? (
            <BaseArea>
              <TitleArea>
                <IconArea>
                  <LibraryBooksIcon fontSize={"large"} />
                </IconArea>
                <BaseTitle>実績情報</BaseTitle>
              </TitleArea>
              <Divider />
              <MatterDisp data={serverData["matterData"]} />
            </BaseArea>
          ) : (
            <div></div>
          )}
        </React.Fragment>
      ) : (
        <div>ユーザが存在しません</div>
      )}
    </React.Fragment>
  );
};

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Contents />
    </React.Fragment>
  );
}

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
