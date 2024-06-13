import React from "react";
import BracketButton from "./BracketButton";

const BracketStage = ({ stageTitle, teams, moveTeamUp, stateName }) => {
  return (
    <div className="stage">
      <h2>{stageTitle}</h2>
      {teams.map((team) => (
        <BracketButton
          key={team.id}
          team={team}
          onClick={() => moveTeamUp(team, stateName)}
        />
      ))}
    </div>
  );
};

export default BracketStage;
