import React from "react";

import { TextForm, CalendarTextForm, IconTextForm } from "../components/TextBox";
import { DefaultButton } from "../components/Button";
import { CheckForm } from "../components/CheckBox";
import { DomCenter } from "../components/UtilityStyle";

import styled from "styled-components";

import { COMMONBOX, COMMONSUBAREA } from "../components/CommonBox";
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

export const UserSearchForm = ({ props, prop }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>ユーザ検索</FirstHeader>
        </HeaderArea>
        <FirstHeaderLine />
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"ユーザ名"}
                    value={props.name}
                    onChange={e => prop.updateUserName(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <CheckForm
                    name={"管理者権限"}
                    value={props.authority}
                    onChange={e => prop.updateAuthority(e.target.checked)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>

        <DomCenter>
            <DefaultButton onClick={e => serverConnection("userSearch", props, prop)} name={"検索"}/>
        </DomCenter>
    </COMMONBOX>
);
