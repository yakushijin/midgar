import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import styled from "styled-components";

const CheckBoxLabel = styled.div`
    /* width: 100px; */
    margin: 10px 6px 0 0;
    text-align: right;
`;

const CheckBoxArea = styled.div`
    width: 100%;
    display: flex;
`;

const CheckBox = styled.div`
    /* width: 200px; */
    text-align: left;
`;

export const CheckForm = ({ name, value, onChange }) => {
    return (
        <FormControl>
        <FormGroup>
            <label>
                <CheckBoxArea>
                    <CheckBoxLabel>{name}</CheckBoxLabel>
                    <CheckBox>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={value}
                                    onChange={onChange}
                                    name={name}
                                    color="primary"
                                />
                            }
                        />
                    </CheckBox>
                </CheckBoxArea>
            </label>
        </FormGroup>
        </FormControl>
    );
};
