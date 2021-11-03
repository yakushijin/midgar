import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { undefinedCheck } from "../Utility";
import * as GC from "../GlobalConst";

export const DirectionSnackbar = ({ props }) => {
    if (undefinedCheck(props) && props.commonState.snackbarState) {
        var dispTime;
        var dispColor;
        switch (props.commonState.serverResult.state) {
            case GC.ResultState.TIP:
                dispTime = 100000;
                dispColor = "#88ff88";
                break;
            case GC.ResultState.INFO:
                dispTime = 3000;
                dispColor = "#8888ff";
                break;
            case GC.ResultState.WARNING:
                dispTime = 5000;
                dispColor = "#ffff44";
                break;
            case GC.ResultState.ERROR:
                dispTime = 100000;
                dispColor = "#ff4444";
                break;
            default:
                dispTime = 3000;
                dispColor = "";
        }
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    open={true}
                    autoHideDuration={dispTime}
                    onClose={() => props.UpdateSnackbarState(false)}
                >
                    <SnackbarContent
                        style={{ background: dispColor,color:"#240066" }}
                        message={props.commonState.serverResult.message}
                        action={
                            <React.Fragment>
                                <IconButton
                                    size="small"
                                    aria-label="close"
                                    color="inherit"
                                    onClick={() =>
                                        props.UpdateSnackbarState(false)
                                    }
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                </Snackbar>
            </div>
        );
    } else {
        return <div></div>;
    }
};
