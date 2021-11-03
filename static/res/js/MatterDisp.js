import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import styled from "styled-components";

const TableArea = styled.div`
  padding: 10px;
`;

const TableNumberArea = styled.div`
  display: inline-block;
  background: linear-gradient(to bottom, #4f33a7, #4f33ff);
  border-radius: 50%;
  text-align: center;
  color: #eee;
  width: 34px;
  box-shadow: 0 0 8px #888;
  margin: 0 4px;
  cursor: pointer;
`;

const TableNumber = styled.div`
  display: inline-block;
`;

const TableTechArea = styled.div`
  display: inline-block;
  padding-right: 4px;
`;

// const TableTech = styled.div`
//   display: inline-block;
//   background: #00dddd;
//   padding: 0 4px;
//   border-radius: 6px;
// `;

const TableTech = styled.div.attrs((props) => ({
  color: props.color || "#000000", //sizeとして受け取りmappingしている
}))`
  display: inline-block;
  background: ${(props) => props.color};
  padding: 0 4px;
  border-radius: 6px;
`;

const TablePercentInBar = styled.div`
  /* background: #ff00dd; */
  position: relative;
  z-index: 1000;
`;

const TablePercentOutBar = styled.div`
  /* width: 54px; */
  border: solid 1px #ccc;
  position: relative;
  z-index: 100;
`;

const TablePercentText = styled.div`
  /* width: 54px; */
  text-align: center;
`;

const MatterUnit = styled.div`
  margin: 0 4px;
  display: inline-block;
`;

const TlIcon = styled.div`
  display: inline-block;
  box-shadow: 0 0 8px #ccc;
  padding: 2px 6px;
  margin: 0 4px;
  border-radius: 2px;
  background: #ff88ff;
`;

const PmIcon = styled.div`
  display: inline-block;
  box-shadow: 0 0 8px #ccc;
  padding: 2px 6px;
  border-radius: 2px;
  background: #ff00ff;
`;

const TablePercentVerticalBar = ({ percent }) => {
  var barColor;
  if (percent <= 20) {
    barColor = "#00eeff";
  } else if (percent > 20 && percent <= 40) {
    barColor = "#00ccff";
  } else if (percent > 40 && percent <= 60) {
    barColor = "#00aaff";
  } else if (percent > 60 && percent <= 80) {
    barColor = "#0088ff";
  } else if (percent < 100) {
    barColor = "#0044ff";
  } else {
    barColor = "#fff";
  }

  const reversePercent = 100 - percent;

  return (
    <TablePercentOutBar style={{ height: 20, background: barColor, width: 30 }}>
      <TablePercentInBar
        style={{ height: reversePercent + "%", background: "#fff" }}
      >
        <TablePercentText style={{ height: 20, width: 30 }}>
          {percent}
        </TablePercentText>
      </TablePercentInBar>
    </TablePercentOutBar>
  );
};

const TablePercentBar = ({ percent }) => {
  var barColor;
  if (percent <= 20) {
    barColor = "#ffee00";
  } else if (percent > 20 && percent <= 40) {
    barColor = "#ffcc00";
  } else if (percent > 40 && percent <= 60) {
    barColor = "#ffaa00";
  } else if (percent > 60 && percent <= 80) {
    barColor = "#ff8800";
  } else if (percent < 100) {
    barColor = "#ff4400";
  } else {
    barColor = "#fff";
  }

  return (
    <TablePercentOutBar style={{ width: 54 }}>
      <TablePercentInBar style={{ width: percent + "%", background: barColor }}>
        <TablePercentText style={{ width: 54 }}>{percent}%</TablePercentText>
      </TablePercentInBar>
    </TablePercentOutBar>
  );
};

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
      fontSize: 22,
    },
  },
});

const TableStyles = makeStyles({
  table: {
    minWidth: 1024,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#000048",
    color: theme.palette.common.white,
    padding: "4px 2px",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const SmallTableCell = withStyles(() => ({
  root: {
    minWidth: 58,
    padding: 0,
  },
}))(TableCell);

const PercentageTableCell = withStyles(() => ({
  root: {
    minWidth: 38,
    padding: 0,
  },
}))(TableCell);

const MiddleTableCell = withStyles(() => ({
  root: {
    minWidth: 120,
  },
}))(TableCell);

const LongTableCell = withStyles(() => ({
  root: {
    // width: 200,
    minWidth: 200,
  },
}))(TableCell);

const IconTableCell = withStyles(() => ({
  root: {
    width: 34,
    padding: 4,
  },
}))(TableCell);

const MatterBasicTableCell = withStyles(() => ({
  root: {
    padding: 8,
  },
}))(TableCell);

function Row(props) {
  const { row } = props;
  const { index } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const TableClass = TableStyles();

  return (
    <React.Fragment>
      {/* <button onClick={()=>setOpen(!open)}/> */}
      <TableRow className={classes.root}>
        <MatterBasicTableCell component="th" scope="row">
          <TableNumberArea>
            <TableNumber onClick={() => setOpen(!open)}>{index}</TableNumber>
          </TableNumberArea>
          <MatterUnit>{row.matterName}</MatterUnit>
          <MatterUnit>
            ({row.periodFrom}〜{row.periodTo})
          </MatterUnit>
          <MatterUnit>{row.pmFlag ? <PmIcon>PM</PmIcon> : ""}</MatterUnit>
        </MatterBasicTableCell>
        <IconTableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </IconTableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table
                className={TableClass.table}
                size="small"
                aria-label="purchases"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>技術カテゴリ</StyledTableCell>
                    {/* <StyledTableCell>リーダー</StyledTableCell> */}
                    <StyledTableCell>割合</StyledTableCell>
                    <StyledTableCell>主な使用技術</StyledTableCell>
                    <StyledTableCell>要件定義</StyledTableCell>
                    <StyledTableCell>基本設計</StyledTableCell>
                    <StyledTableCell>詳細設計</StyledTableCell>
                    <StyledTableCell>実装</StyledTableCell>
                    <StyledTableCell>テスト</StyledTableCell>
                    <StyledTableCell>保守</StyledTableCell>
                    <StyledTableCell>補足</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.matterDetail.map((matterDetailRow) => (
                    <StyledTableRow key={matterDetailRow.matterDetailId}>
                      <MiddleTableCell>
                        {matterDetailRow.engineerCategoryName}
                        {matterDetailRow.leader ? <TlIcon>TL</TlIcon> : ""}
                      </MiddleTableCell>
                      <PercentageTableCell>
                        <TablePercentVerticalBar
                          percent={matterDetailRow.periodProportion}
                        />
                      </PercentageTableCell>
                      <MiddleTableCell>
                        {matterDetailRow.techList.map((tech) => (
                          <TableTechArea>
                            <TableTech color={tech["dispColor"]}>
                              {tech["techName"]}
                            </TableTech>
                          </TableTechArea>
                        ))}
                      </MiddleTableCell>
                      <SmallTableCell>
                        <TablePercentBar
                          percent={matterDetailRow.requirements}
                        />
                      </SmallTableCell>
                      <SmallTableCell>
                        <TablePercentBar
                          percent={matterDetailRow.basicDesign}
                        />
                      </SmallTableCell>
                      <SmallTableCell>
                        <TablePercentBar
                          percent={matterDetailRow.detailDesign}
                        />
                      </SmallTableCell>
                      <SmallTableCell>
                        <TablePercentBar
                          percent={matterDetailRow.implementation}
                        />
                      </SmallTableCell>
                      <SmallTableCell>
                        <TablePercentBar percent={matterDetailRow.test} />
                      </SmallTableCell>
                      <SmallTableCell>
                        <TablePercentBar
                          percent={matterDetailRow.maintenance}
                        />
                      </SmallTableCell>
                      <LongTableCell>
                        {matterDetailRow.matterSupplement}
                      </LongTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    matterName: PropTypes.string.isRequired,
    matterDetail: PropTypes.arrayOf(
      PropTypes.shape({
        leader: PropTypes.bool.isRequired,
        // leaderFlag: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export const MatterDisp = ({ data }) => {
  console.log(data.matterBasic);
  return (
    <TableArea>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {data.matterBasic.map((row, index) => (
              <Row key={row.matterBasicId} row={row} index={index + 1} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TableArea>
  );
};
