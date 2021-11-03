import React from "react";

// import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import styled from "styled-components";

const TextLabel = styled.div`
    margin: 10px 6px 0 0;
    text-align: right;
`;

const MatterTextLabel = styled.div`
    margin: 10px 6px 0 0;
    text-align: right;
    width: 54px;
`;

const TextLabelArea = styled.div`
    width: 200px;
`;

const TextArea = styled.div`
    width: 100%;
    display: flex;
`;

const TextFieldArea = styled.div`
    width: 100%;
    text-align: left;
`;

// const TEXTFORM = styled(TextField)({});

export const TextForm = ({ name, value, onChange }) => (
    <FormControl>
        <label>
            <TextArea>
                <TextLabelArea>
                    <TextLabel>{name}</TextLabel>
                </TextLabelArea>
                <TextFieldArea>
                    <TextField
                        // style={{ width: "100px" }}
                        defaultValue={value}
                        onBlur={onChange}
                    ></TextField>
                </TextFieldArea>
            </TextArea>
        </label>
    </FormControl>
);

export const SkillAreaTextForm = ({ value, onChange }) => (
    <form>
        <label>
            <TextField defaultValue={value} onBlur={onChange} style={{ width: 280 }}></TextField>
        </label>
    </form>
);

export const IconTextForm = ({ icon, value, onChange }) => (
    <form>
        <label>
            {icon}
            <TextField defaultValue={value} onBlur={onChange}></TextField>
        </label>
    </form>
);

export const CalendarTextForm = ({ name, value, onChange }) => (
    <FormControl noValidate>
        <label>
            <TextArea>
                <TextLabelArea>
                    <TextLabel>{name}</TextLabel>
                </TextLabelArea>
                <TextFieldArea>
                    <TextField
                        // id="date"
                        // label={name}
                        type="date"
                        onChange={onChange}
                        defaultValue={value}
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </TextFieldArea>
            </TextArea>
        </label>
    </FormControl>
);

export const CalendarMonthTextForm = ({ name, value, onChange }) => (
    <FormControl noValidate>
        <label>
            <TextArea>
                <TextLabel>{name}</TextLabel>
                <TextField
                    // id="date"
                    // label={name}
                    type="month"
                    onChange={onChange}
                    defaultValue={value}
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                    style={{ width: 138 }}
                />
            </TextArea>
        </label>
    </FormControl>
);

export const MatterTextForm = ({ name, value, onChange }) => (
    <FormControl>
        <label>
            <TextArea>
            <MatterTextLabel>{name}</MatterTextLabel>
                <TextFieldArea>
                    <TextField
                        // style={{ width: "100px" }}
                        defaultValue={value}
                        onBlur={onChange}
                    ></TextField>
                </TextFieldArea>
            </TextArea>
        </label>
    </FormControl>
);
