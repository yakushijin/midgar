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

const PROFILEUNIT = styled.div`
    text-align: center;
    margin: 2px 0;
`;

export const UserForms = ({ props }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>ユーザ情報</FirstHeader>
            <HeaderButtonArea>
                <UpdateButton name={"更新"} onClick={()=>serverConnection("userbaseedit", props.userData, props)}></UpdateButton>
            </HeaderButtonArea>
        </HeaderArea>
        <FirstHeaderLine />
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"ユーザ名"}
                    value={props.userData.userName}
                    onChange={e => props.updateUserName(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <CheckForm
                    name={"管理者権限"}
                    value={props.userData.authority}
                    onChange={e => props.updateAuthority(e.target.checked)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
    </COMMONBOX>
);
