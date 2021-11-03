import React from "react";
import styled from "styled-components";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import WebAssetIcon from "@material-ui/icons/WebAsset";

import HomeIcon from "@material-ui/icons/Home";
import WcIcon from "@material-ui/icons/Wc";

const IconStyle = styled.div`
  padding-top: -20px;
  display: inline-block;
`;

const UnitSet = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

const TextDispArea = styled.div`
  padding: 8px;
  color: #000048;
`;

const TextDisp = styled.div`
  font-size: 20px;
  padding: 0 10px 10px 10px;
  display: inline-block;
`;

const SupplementTextDisp = styled.div`
display: inline-block;
   position: relative;
    background: #c7ffd5;
    padding: 0.2em 0.5em;
    color: #454545;
    padding:10px;
    font-size: 14px;
    transform: rotate(1deg);
    border-left: solid 6px #43eb8a;
  &::after {
    position: absolute;
    content: '';
    right: -1px;
    top: 25px;
    border-width: 0 0 15px 15px;
    border-style: solid;
    border-color: #43eb8a #43eb8a #fff;
    
  };
`;

const NameDisp = styled.div`
  font-size: 24px;
  padding: 0 0px 10px 10px;
  display: inline-block;
  color: #462100;
`;

const NameDispArea = styled.div`
  display: inline-block;
  box-shadow: 0 0 8px #888;
  background: linear-gradient(to bottom, #acce27, #ac9627);
  -webkit-transform: skew(-15deg);
  transform: skew(-15deg);
`;

const BlankCheck = (data) => {
  if (data == "") {
    return true;
  } else {
    return false;
  }
};

export const EngineerDisp = ({ inputData }) => {
  return (
    <TextDispArea>
      <NameDispArea>
        <NameDisp>{inputData["engineerName"]}</NameDisp>
        <TextDisp>
          {BlankCheck(inputData["engineerAge"])
            ? ""
            : "(" + inputData["engineerAge"] + "歳)"}
        </TextDisp>
      </NameDispArea>

      <UnitSet>
        <IconStyle>
          <WcIcon />
        </IconStyle>
        {inputData["engineerGender"]}
      </UnitSet>

      <UnitSet>
        <IconStyle>
          <HomeIcon />
        </IconStyle>
        {inputData["engineerResidence"]}
      </UnitSet>

      <UnitSet>
        <IconStyle>
          <EmailIcon />
        </IconStyle>
        {inputData["engineerEmail"]}
      </UnitSet>
      <UnitSet>
        <IconStyle>
          <WebAssetIcon />
        </IconStyle>
        {inputData["engineerSite"]}
      </UnitSet>

      <UnitSet>
        <TwitterIcon>
          <WebAssetIcon />
        </TwitterIcon>
        {inputData["engineerTwitter"]}
      </UnitSet>
      <UnitSet>
        <FacebookIcon>
          <WebAssetIcon />
        </FacebookIcon>
        {inputData["engineerFacebook"]}
      </UnitSet>
      <UnitSet>
        <GitHubIcon>
          <WebAssetIcon />
        </GitHubIcon>
        {inputData["engineerGitHub"]}
      </UnitSet>
      <UnitSet>
        <LinkedInIcon>
          <WebAssetIcon />
        </LinkedInIcon>
        {inputData["engineerLinkedin"]}
      </UnitSet>

      <SupplementTextDisp>{inputData["engineerSupplement"]}</SupplementTextDisp>
    </TextDispArea>
  );
};
