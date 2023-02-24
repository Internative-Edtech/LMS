import { Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigation } from "react-router-dom";
import "../style.css";
import { LectureCard } from "./LectureCard";
export const StudentAssignment = () => {
  const assignment=["DSA","Coding","Project","CLoning"];
  return (
    <div className="studass">
     <div>
      {
        assignment?.map((assignment,ind)=>(
            <LectureCard assignment={assignment} key={ind}/>
         )) 
      }
     </div>
    </div>
  );
};
