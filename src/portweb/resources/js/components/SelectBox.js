import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import styled from "styled-components";

const SelectBoxLabel = styled.div`
    margin: 10px 6px 0 0;
    text-align: right;
`;

const SelectBoxLabelArea = styled.div`
    width: 200px;
`;

const SelectBoxArea = styled.div`
    width: 100%;
    display: flex;

    /* @media screen and (min-width: 1200px) {
        margin-top:-10px;
    } */
`;

const SelectBox = styled.div`
    width: 100%;
    text-align: left;
`;

export const SelectForm = ({ name, value, selectData, onChange, width }) => {
    var array = [];

    return (
        <FormControl>
            <label>
                <SelectBoxArea>
                    <SelectBoxLabelArea>
                        <SelectBoxLabel> {name}</SelectBoxLabel>
                    </SelectBoxLabelArea>
                    <SelectBox>
                        <Select
                            native
                            value={value}
                            onChange={onChange}
                            style={{ width: width }}
                        >
                            {selectData.forEach(function(data, index) {
                                array.push(
                                    <option key={index} value={data.value}>
                                        {data.disp}
                                    </option>
                                );
                            })}
                            {array}
                        </Select>
                    </SelectBox>
                </SelectBoxArea>
            </label>
        </FormControl>
    );
};

export const SkillAreaSelectForm = ({ value, selectData, onChange, width }) => {
    var array = [];
    return (
        <FormControl>
            <Select
                native
                value={value}
                onChange={onChange}
                style={{ width: width }}
            >
                {selectData.forEach(function(data, index) {
                    array.push(
                        <option key={index} value={data.value}>
                            {data.disp}
                        </option>
                    );
                })}
                {array}
            </Select>
        </FormControl>
    );
};

export const EngineerCategorySelectForm = ({ value, selectData, onChange }) => {
    var array = [];
    return (
        <FormControl>
            <Select
                native
                value={value}
                onChange={onChange}
                style={{ width: 220 }}
            >
                {selectData.forEach(function(data, index) {
                    array.push(
                        <option key={index} value={data.engineerCategoryId}>
                            {data.engineerCategoryName}
                        </option>
                    );
                })}
                {array}
            </Select>
        </FormControl>
    );
};

export const PercentageSelect = [
    { value: 0, disp: "0%" },
    { value: 10, disp: "10%" },
    { value: 20, disp: "20%" },
    { value: 30, disp: "30%" },
    { value: 40, disp: "40%" },
    { value: 50, disp: "50%" },
    { value: 60, disp: "60%" },
    { value: 70, disp: "70%" },
    { value: 80, disp: "80%" },
    { value: 90, disp: "90%" },
    { value: 100, disp: "100%" }
];

export const SexSelectList = [
    { value: "", disp: "" },
    { value: "1", disp: "男性" },
    { value: "2", disp: "女性" }
];

export const EngineerCategorySelectList = [
    { value: "", EngineerCategoryName: "" },
    { value: "1", EngineerCategoryName: "バックエンド開発" },
    { value: "2", EngineerCategoryName: "フロントエンド開発" }
];

export const ResidenceSelectList = [
    { value: "", disp: "" },
    { value: "1", disp: "北海道" },
    { value: "2", disp: "青森県" },
    { value: "3", disp: "岩手県" },
    { value: "4", disp: "宮城県" },
    { value: "5", disp: "秋田県" },
    { value: "6", disp: "山形県" },
    { value: "7", disp: "福島県" },
    { value: "8", disp: "茨城県" },
    { value: "9", disp: "栃木県" },
    { value: "10", disp: "群馬県" },
    { value: "11", disp: "埼玉県" },
    { value: "12", disp: "千葉県" },
    { value: "13", disp: "東京都" },
    { value: "14", disp: "神奈川県" },
    { value: "15", disp: "新潟県" },
    { value: "16", disp: "富山県" },
    { value: "17", disp: "石川県" },
    { value: "18", disp: "福井県" },
    { value: "19", disp: "山梨県" },
    { value: "20", disp: "長野県" },
    { value: "21", disp: "岐阜県" },
    { value: "22", disp: "静岡県" },
    { value: "23", disp: "愛知県" },
    { value: "24", disp: "三重県" },
    { value: "25", disp: "滋賀県" },
    { value: "26", disp: "京都府" },
    { value: "27", disp: "大阪府" },
    { value: "28", disp: "兵庫県" },
    { value: "29", disp: "奈良県" },
    { value: "30", disp: "和歌山県" },
    { value: "31", disp: "鳥取県" },
    { value: "32", disp: "島根県" },
    { value: "33", disp: "岡山県" },
    { value: "34", disp: "広島県" },
    { value: "35", disp: "山口県" },
    { value: "36", disp: "徳島県" },
    { value: "37", disp: "香川県" },
    { value: "38", disp: "愛媛県" },
    { value: "39", disp: "高知県" },
    { value: "40", disp: "福岡県" },
    { value: "41", disp: "佐賀県" },
    { value: "42", disp: "長崎県" },
    { value: "43", disp: "熊本県" },
    { value: "44", disp: "大分県" },
    { value: "45", disp: "宮崎県" },
    { value: "46", disp: "鹿児島県" },
    { value: "47", disp: "沖縄県" }
];

export const EngineerReleaseSelect = [
    { value: 0, disp: "公開しない" },
    { value: 1, disp: "すべて" },
    { value: 2, disp: "プロフィールのみ" },
    { value: 3, disp: "プロフィールとパラメータ" },
    { value: 4, disp: "プロフィールと実績" }
];
