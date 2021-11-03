import React from "react";

import { TextForm } from "../components/TextBox";
import { CheckForm } from "../components/CheckBox";

import styled from "styled-components";

import { SelectForm, EngineerReleaseSelect } from "../components/SelectBox";
import { UpdateButton } from "../components/Button";
import { COMMONBOX, COMMONSUBAREA } from "../components/CommonBox";
import {
    FirstHeader,
    FirstHeaderLine,
    HeaderButtonArea,
    HeaderArea
} from "../components/Header";

import Divider from "@material-ui/core/Divider";
import { DomCenter } from "../components/UtilityStyle";
import serverConnection from "../server/Interface";
import { ApiName } from "../GlobalConst";

const PROFILESET = styled.div`
    margin: 6px;
`;

const PROFILEUNIT = styled.div`
    text-align: center;
    margin: 2px 0;
`;

const EngineerPublicButtonArea = styled.div`
    margin: 10px;
`;

export const ReleaseForms = ({ props }) => (
    <COMMONBOX>
        <HeaderArea>
            <FirstHeader>公開設定</FirstHeader>
        </HeaderArea>
        <FirstHeaderLine />
        <PROFILESET>
            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <TextForm
                        name={"公開URL"}
                        value={props.profileData.engineerUrl}
                        onChange={e => props.updateEngineerUrl(e.target.value)}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>

            <COMMONSUBAREA>
                <PROFILEUNIT>
                    <SelectForm
                        name={"公開内容"}
                        value={props.profileData.engineerRelease}
                        selectData={EngineerReleaseSelect}
                        onChange={e =>
                            props.updateEngineerRelease(e.target.value)
                        }
                        width={220}
                    />
                </PROFILEUNIT>
            </COMMONSUBAREA>
        </PROFILESET>
        <Divider />
        <DomCenter>
            <EngineerPublicButtonArea>
                <UpdateButton
                    name={"公開サイトを更新する"}
                    onClick={() =>
                        serverConnection(
                            ApiName.EngineerPublic,
                            props.profileData,
                            props
                        )
                    }
                ></UpdateButton>
            </EngineerPublicButtonArea>
        </DomCenter>
    </COMMONBOX>
);
