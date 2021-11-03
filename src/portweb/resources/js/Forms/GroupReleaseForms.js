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

const PROFILESET = styled.div`
    margin: 6px;
`;

const PROFILEUNIT = styled.div`
    text-align: center;
    margin: 2px 0;
`;

export const GroupReleaseForms = ({ props }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>公開設定</FirstHeader>
            <HeaderButtonArea>
                <UpdateButton name={"更新"}></UpdateButton>
            </HeaderButtonArea>
        </HeaderArea>
        <FirstHeaderLine />
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"公開可否"}
                    value={props.groupData.organizationRelease}
                    onChange={e => props.updateCompanyRelease(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
        <COMMONSUBAREA>
            <PROFILEUNIT>
                <TextForm
                    name={"公開URL"}
                    value={props.groupData.organizationUrl}
                    onChange={e => props.updateCompanyUrl(e.target.value)}
                />
            </PROFILEUNIT>
        </COMMONSUBAREA>
    </COMMONBOX>
);
