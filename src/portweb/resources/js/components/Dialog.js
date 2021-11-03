import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import { TechEnabled, TechDisabled } from "./Chip";
import { DefaultButton } from "./Button";
import styled from "styled-components";

export const ButtonArea = styled.div`
    text-align: center;
`;

export const ButtonUnit = styled.div`
    margin-left: 4px;
    display: inline-block;
`;

const TechSelectArea = styled.div`
    /* width: 100%; */
`;

const TechUnit = styled.div`
    display: inline-block;
    margin: 2px;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const TechSelectDialog = ({ props }) => {
    const BasicIndex = props.TechListData.currentArray.basicIndex;
    const DetailIndex = props.TechListData.currentArray.detailIndex;

    if (
        typeof BasicIndex === "undefined" &&
        typeof DetailIndex === "undefined"
    ) {
        return <div></div>;
    } else {
        if (!props.TechListData.techDidpLock) {
            TechListInit({ props });
            const CurrentTechDate =
                props.matterData[BasicIndex].matterDetail[DetailIndex].tech;
            props.TechListData.techList.forEach((outValue, outIndex) => {
                CurrentTechDate.forEach((InValue, InIndex) => {
                    if (outValue.techId == InValue.techId) {
                        props.TechListData.techList[outIndex].status = true;
                    }
                });
            });
        }
        return (
            <Dialog
                open={props.TechListData.techSelectDialogDisp}
                TransitionComponent={Transition}
                keepMounted
                maxWidth={"lg"}
                fullWidth={true}
                onClose={() => Close({ props })}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"使用技術編集"}
                </DialogTitle>
                <DialogContent>
                    <TechSelectArea>
                        {props.TechListData.techList.map((value, index) =>
                            value.status ? (
                                <TechUnit key={index}>
                                    <TechEnabled
                                        onClick={() =>
                                            TechUpdate(
                                                props,
                                                index,
                                                value.techId,
                                                value.techName,
                                                false
                                            )
                                        }
                                        name={value.techName}
                                    />
                                </TechUnit>
                            ) : (
                                <TechUnit key={index}>
                                    <TechDisabled
                                        onClick={() =>
                                            TechUpdate(
                                                props,
                                                index,
                                                value.techId,
                                                value.techName,
                                                true
                                            )
                                        }
                                        name={value.techName}
                                    />
                                </TechUnit>
                            )
                        )}
                    </TechSelectArea>

                    <ButtonArea>
                        <ButtonUnit>
                            <DefaultButton
                                onClick={() => Apply({ props })}
                                name={"適用"}
                            />
                        </ButtonUnit>
                        <ButtonUnit>
                            <DefaultButton
                                onClick={() => Close({ props })}
                                name={"キャンセル"}
                            />
                        </ButtonUnit>
                    </ButtonArea>
                </DialogContent>
            </Dialog>
        );
    }
};

const TechUpdate = (props, index, id, name, flg) => {
    props.updateTechData(
        {
            techId: id,
            techName: name,
            status: flg
        },
        index
    );
    props.updateTechDidpLock(true);
};

const Apply = ({ props }) => {
    var updateTechList = [];
    props.TechListData.techList.forEach((value, index) => {
        if (value.status) {
            updateTechList.push(value);
        }
    });
    props.setTech(
        updateTechList,
        props.TechListData.currentArray.basicIndex,
        props.TechListData.currentArray.detailIndex
    );

    Close({ props });
};

const Close = ({ props }) => {
    TechListInit({ props });
    props.updateTechSelectDialogDisp(false);
    props.updateTechList(props.TechListData.techList);
    props.updateTechDidpLock(false);
};

const TechListInit = ({ props }) => {
    props.TechListData.techList.forEach((value, index) => {
        props.TechListData.techList[index].status = false;
    });
};
