import React from "react";

import { TextForm, CalendarTextForm, IconTextForm } from "../components/TextBox";
import { CheckForm } from "../components/CheckBox";
import { SelectForm,ResidenceSelectList,SexSelectList } from "../components/SelectBox";
import { FirstHeader,FirstHeaderLine,HeaderButtonArea,HeaderArea } from "../components/Header";
import { UpdateButton } from '../components/Button'

import styled from "styled-components";

import { COMMONBOX, COMMONSUBAREA } from "../components/CommonBox";

import { Twitter, Email, LinkedIn, GitHub, Facebook, WebAsset } from "../components/Icon";
import Divider from "@material-ui/core/Divider";
import serverConnection from "../server/Interface";

const PROFILESET = styled.div`
    margin: 6px;
`;

const PROFILEUNIT = styled.div`
    text-align: center;
    margin: 2px 0;
`;

export const ProfileForms = ({ props }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>プロフィール情報</FirstHeader>
            <HeaderButtonArea>
                <UpdateButton name={"更新"} onClick={()=>serverConnection("engineerbaseedit", props.profileData, props)}></UpdateButton>
            </HeaderButtonArea>
        </HeaderArea>
        <FirstHeaderLine/>

        <Divider />
        <PROFILESET>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <TextForm
                        name={"公開用ネーム"}
                        value={props.profileData.engineerName}
                        onChange={e => props.updatePublicName(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <CalendarTextForm
                        name={"生年月日"}
                        value={props.profileData.engineerBirthday}
                        onChange={e => props.updateBirthday(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <SelectForm
                        name={"居住都道府県"}
                        value={props.profileData.engineerResidence}
                        selectData={ResidenceSelectList}
                        onChange={e => props.updateResidence(e.target.value)}
                        width={100}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <SelectForm
                        name={"性別"}
                        value={props.profileData.engineerGender}
                        selectData={SexSelectList}
                        onChange={e => props.updateSex(e.target.value)}
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
                        value={props.profileData.engineerEmail}
                        onChange={e => props.updateEngineerEmail(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<Twitter />}
                        value={props.profileData.engineerTwitter}
                        onChange={e => props.updateTwitter(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<Facebook />}
                        value={props.profileData.engineerFacebook}
                        onChange={e => props.updateFacebook(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<GitHub />}
                        value={props.profileData.engineerGitHub}
                        onChange={e => props.updateGithub(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<LinkedIn />}
                        value={props.profileData.engineerLinkedin}
                        onChange={e => props.updateGithub(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <IconTextForm
                        icon={<WebAsset />}
                        value={props.profileData.engineerSite}
                        onChange={e => props.updateEngineerSite(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
        </PROFILESET>
        <Divider />
        <PROFILESET>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <TextForm
                        name={"補足"}
                        value={props.profileData.engineerSupplement}
                        onChange={e =>
                            props.updateEngineerSupplement(e.target.value)
                        }
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
        </PROFILESET>
    </COMMONBOX>
);
