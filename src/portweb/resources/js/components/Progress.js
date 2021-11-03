import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { undefinedCheck } from "../Utility";
import styled from "styled-components";

const OverLay = styled.div`
position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(100, 100, 100, .8);
  z-index: 1000;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export const LinearIndeterminate = ({ props }) => {
  const classes = useStyles();

  if(undefinedCheck(props) &&props.commonState.progressState){
    return (
      <div className={classes.root}>
        <LinearProgress  />
      </div>
    );
  }else{
    return <div></div>
  }

}

export const ProgressBackdrop = ({ props }) => {
  if(undefinedCheck(props) &&props.commonState.progressState){
    return (
      <OverLay/>
    );
  }else{
    return <div></div>
  }
}
