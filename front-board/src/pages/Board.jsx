import React, { useEffect } from "react";
import {
  Button,
  TableHead,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

export default function Board() {
  const navigate = useNavigate();

  const fnWrite = () => {
    navigate("/boardInsert");
  };

  const fnGetList = () => {};

  useEffect(() => {
    // (async () => {
    //   const { data } = await fnGetList();
    // })();
    fnGetList();
  }, []);

  //마운트시 fnGetList 실행

  return (
    <div className="board">
      <Button varient="contained" onClick={fnWrite} style={{ float: "right" }}>
        등록
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> No </TableCell>
              <TableCell> 제목 </TableCell>
              <TableCell> 작성자 </TableCell>
              <TableCell> 등록일시 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(data, () => {
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
