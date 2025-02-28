import React from "react";
import "./boardPanel.scss";
import { Add } from "@mui/icons-material";
import TaskBoard from "../TaskBoard";

const BoardPanel = () => {
  return (
    <div className="boardPanel">
      <h1>Welcome to Task Manager 😊.</h1>
      <div className="panel">
        <div className="boardList">
          <div className="board">View 1</div>
          <div className="board__active">View 2</div>
          <div className="board">View 3</div>
          <div className="addBoard-btn">
            <Add /> New
          </div>
        </div>
        <TaskBoard />
      </div>
    </div>
  );
};

export default BoardPanel;
