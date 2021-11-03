import React from 'react';

import Chip from '@material-ui/core/Chip';


export const TechEnabled = ({onClick,name}) => (
    <Chip label={name} onClick={onClick} color="primary"/>
)

export const TechDisabled = ({onClick,name}) => (
    <Chip label={name} onClick={onClick}/>

)