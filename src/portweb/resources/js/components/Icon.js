import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';


import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CancelIcon from '@material-ui/icons/Cancel';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// export const DetailAddIcon = ({onClick}) => {
//   return (
//     <AddBoxIcon color="primary" onClick={onClick} fontSize={'large'}></AddBoxIcon>
//   );
// }

export const DetailAddIcon = ({onClick}) => {
  return (
    <AddCircleIcon color="primary" onClick={onClick}></AddCircleIcon>
  );
}

export const DetailDeleteIcon = ({onClick}) => {
  return (
    <CancelIcon color="inherit" onClick={onClick}></CancelIcon>
  );
}

export const Twitter = () => {
  return (
    <TwitterIcon color="primary" fontSize={'large'}></TwitterIcon>
  );
}

export const Facebook = () => {
  return (
    <FacebookIcon color="primary" fontSize={'large'}></FacebookIcon>
  );
}

export const GitHub = () => {
  return (
    <GitHubIcon color="primary" fontSize={'large'}></GitHubIcon>
  );
}

export const LinkedIn = () => {
  return (
    <LinkedInIcon color="primary" fontSize={'large'}></LinkedInIcon>
  );
}

export const Email = () => {
  return (
    <EmailIcon color="primary" fontSize={'large'}></EmailIcon>
  );
}

export const WebAsset = () => {
  return (
    <WebAssetIcon color="primary" fontSize={'large'}></WebAssetIcon>
  );
}

export const TechEdit = ({onClick}) => {
  return (
    <BorderColorIcon onClick={onClick}></BorderColorIcon>
  );
}