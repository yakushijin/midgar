import React from "react";

import { COMMONBOX, COMMONTABLEAREA } from "../components/CommonBox";
import { SearchResultTable } from "../components/Table";
import { DefaultButton, UpdateButton } from "../components/Button";
import styled from "styled-components";
import { undefinedCheck } from "../Utility";

const EngineerColumns = [
    { columnName: "engineerName", label: "公開用ネーム", minWidth: 180 },
    { columnName: "engineerBirthday", label: "年齢", minWidth: 100 },
    { columnName: "engineerResidence", label: "都道府県", minWidth: 40 },
    { columnName: "engineerGender", label: "性別", minWidth: 20 },
    { columnName: "button", label: "", minWidth: 120 }
];

const UserColumns = [
    { columnName: "userName", label: "ユーザー名", minWidth: 120 },
    { columnName: "email", label: "メールアドレス", minWidth: 180 }
];

export const ButtonArea = styled.div`
    text-align: right;
`;

export const ButtonUnit = styled.div`
    margin-left: 4px;
    display: inline-block;
`;

function open() {}

export const SearchResultForm = ({ EngineerSearchData }) => {
    const engineerList = undefinedCheck(EngineerSearchData.engineerList)
        ? EngineerSearchData.engineerList
        : [];

    engineerList.forEach((value, index) => {
        const Url = "https://" + location.host + "/user?" + value.engineerUrl;
        engineerList[index].button = (
            <ButtonArea>
                <ButtonUnit>
                    <DefaultButton
                        onClick={() => window.open(Url)}
                        name={"閲覧"}
                    />
                </ButtonUnit>
            </ButtonArea>
        );
    });
    return (
        <COMMONBOX>
            <COMMONTABLEAREA>
                <SearchResultTable
                    column={EngineerColumns}
                    data={engineerList}
                />
            </COMMONTABLEAREA>
        </COMMONBOX>
    );
};

export const UserSearchResultForm = ({ userData }) => {
    var userList = [];
    if (undefinedCheck(userData)) {
        userList = userData.userList;
    }

    return (
        <COMMONBOX>
            <COMMONTABLEAREA>
                <SearchResultTable column={UserColumns} data={userList} />
            </COMMONTABLEAREA>
        </COMMONBOX>
    );
};
