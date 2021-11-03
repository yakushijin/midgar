import React from "react";

import { TextForm } from "../components/TextBox";
import { CheckForm } from "../components/CheckBox";

import styled from "styled-components";
import { UpdateButton } from "../components/Button";

import { COMMONBOX, COMMONSUBAREA } from "../components/CommonBox";
import Divider from "@material-ui/core/Divider";
import {
    FirstHeader,
    FirstHeaderLine,
    HeaderButtonArea,
    HeaderArea
} from "../components/Header";
import serverConnection from "../server/Interface";

const PROFILESET = styled.div`
    margin: 6px;
`;

const PROFILEUNIT = styled.div`
    text-align: center;
    margin: 2px 0;
`;

export const GroupForms = ({ props }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>グループ情報</FirstHeader>
            <HeaderButtonArea>
                <UpdateButton name={"更新"} onClick={()=>serverConnection("groupbaseedit", props.groupData, props)}></UpdateButton>
            </HeaderButtonArea>
        </HeaderArea>
        <FirstHeaderLine />

        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"グループ名"}
                    value={props.groupData.groupName}
                    onChange={e => props.updateGroupName(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"会社名"}
                    value={props.groupData.organizationName}
                    onChange={e => props.updateCompanyName(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"所在地"}
                    value={props.groupData.organizationResidence}
                    onChange={e => props.updateLocation(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"ホームページ"}
                    value={props.groupData.organizationSite}
                    onChange={e => props.updateCompanySite(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"電話番号"}
                    value={props.groupData.organizationTel}
                    onChange={e => props.updateCompanyTel(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"メールアドレス"}
                    value={props.groupData.organizationEmail}
                    onChange={e => props.updateCompanyEmail(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"その他連絡先"}
                    value={props.groupData.organizationContact}
                    onChange={e => props.updateOtherContact(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"補足"}
                    value={props.groupData.organizationSupplement}
                    onChange={e => props.updateCompanySupplement(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
    </COMMONBOX>
);
