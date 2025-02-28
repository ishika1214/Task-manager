import React from "react";
import "./taskBoard.scss";
import Card from "../components/card/Card";
import AddIcon from "@mui/icons-material/Add";
const TaskBoard = () => {
  return (
    <div className="alltasks">
      <div className="taskStage">
        <div className="stageHeader">
          <div className="stageName">First Stage</div>
          <div>
            <AddIcon />
          </div>
        </div>
        <Card className="taskCard">
          <p>Task name</p>
          <p>Task description</p>
        </Card>
      </div>
    </div>
  );
};

export default TaskBoard;
