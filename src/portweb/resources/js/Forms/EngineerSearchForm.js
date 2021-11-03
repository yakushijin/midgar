import React from "react";

import { TextForm, CalendarTextForm, IconTextForm } from "../components/TextBox";

import styled from "styled-components";

import { Twitter, Email, LinkedIn, GitHub, Facebook, WebAsset } from "../components/Icon";
import Divider from "@material-ui/core/Divider";

import { COMMONBOX, COMMONSUBAREA } from "../components/CommonBox";
import {
    FirstHeader,
    FirstHeaderLine,
    HeaderButtonArea,
    HeaderArea
} from "../components/Header";
import { SelectForm, ResidenceSelectList, SexSelectList } from "../components/SelectBox";
import serverConnection from "../server/Interface";
import { DomCenter } from "../components/UtilityStyle";
import { DefaultButton } from "../components/Button";

const PROFILESET = styled.div`
    margin: 6px;
`;

const PROFILEUNIT = styled.div`
    text-align: center;
    margin: 2px 0;
`;

export const EngineerSearchForm = ({ props, prop }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>エンジニア検索</FirstHeader>

        </HeaderArea>
        <FirstHeaderLine />


        <Divider />
        <PROFILESET>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <TextForm
                        name={"公開用ネーム"}
                        value={props.publicName}
                        onChange={e => prop.updatePublicName(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <CalendarTextForm
                        name={"生年月日"}
                        value={props.birthday}
                        onChange={e => prop.updateBirthday(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <SelectForm
                        name={"居住都道府県"}
                        value={props.residence}
                        selectData={ResidenceSelectList}
                        onChange={e => prop.updateResidence(e.target.value)}
                        width={100}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <SelectForm
                        name={"性別"}
                        value={props.sex}
                        selectData={SexSelectList}
                        onChange={e => prop.updateSex(e.target.value)}
                        width={100}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
        </PROFILESET>
        <Divider />
        <PROFILESET>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<Email />}
                        value={props.engineerEmail}
                        onChange={e => prop.updateEngineerEmail(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<Twitter />}
                        value={props.twitter}
                        onChange={e => prop.updateTwitter(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<Facebook />}
                        value={props.facebook}
                        onChange={e => prop.updateFacebook(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<GitHub />}
                        value={props.github}
                        onChange={e => prop.updateGithub(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<LinkedIn />}
                        value={props.github}
                        onChange={e => prop.updateGithub(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<WebAsset />}
                        value={props.engineerSite}
                        onChange={e => prop.updateEngineerSite(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
        </PROFILESET>
        
        <DomCenter>
            <DefaultButton onClick={e => serverConnection("engineersearch", props, prop)} name={"検索"}/>
        </DomCenter>
    </COMMONBOX>
);
