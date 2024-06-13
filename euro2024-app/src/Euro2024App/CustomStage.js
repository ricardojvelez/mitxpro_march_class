import React from "react";
import CustomButton from "./CustomButton";

const CustomStage = ({ stageTitle, stateName, teams, moveTeamUp }) => {
  return (
    <div className="stage">
      <h2>{stageTitle}</h2>
      {teams.map((team) => (
        <CustomButton
          key={team.id}
          team={team}
          onClick={() => moveTeamUp(team, stateName)}
        />
      ))}
    </div>
  );
};

export default CustomStage;
