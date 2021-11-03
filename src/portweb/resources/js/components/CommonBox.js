import React from "react";

import styled from "styled-components";

export const COMMONBOX = styled.div`
    margin: 10px 0;
    padding: 4px 2px;
    color: #444;
    background: #fff;
    display: block;
    border-radius: 2px;
    box-shadow: 0 0 8px gray;
`;
export const COMMONSUBAREA = styled.div`
    height: 100%;
    display: inline-block;
    /* width: 100%; */
    @media screen and (min-width: 0px) {
        width: 100%;
    }
    @media screen and (min-width: 800px) {
        width: 50%;
    }
    @media screen and (min-width: 1200px) {
        width: 33%;
    }
    @media screen and (min-width: 1600px) {
        width: 25%;
    }
`;

export const COMMONTABLEAREA = styled.div`
    @media screen and (min-width: 0px) {
        margin: 2px;
    }
    @media screen and (min-width: 800px) {
        margin: 10px 20px;
    }
`;
