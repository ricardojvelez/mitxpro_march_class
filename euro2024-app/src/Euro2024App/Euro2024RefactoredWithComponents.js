import React, { useState } from "react";
import "./Euro2024App.css";
import CustomButton from "./CustomButton";
import CustomStage from "./CustomStage";
import BracketButton from "./BracketButton";
import BracketStage from "./BracketStage";
const teams = [
  { name: "France", id: 1 },
  { name: "Germany", id: 2 },
  { name: "Spain", id: 3 },
  { name: "Italy", id: 4 },
  { name: "Portugal", id: 5 },
  { name: "England", id: 6 },
  { name: "Netherlands", id: 7 },
  { name: "Belgium", id: 8 },
  { name: "Croatia", id: 9 },
];

const Euro2024App = () => {
  const [bracket, setBracket] = useState({
    quarterFinals: teams,
    semiFinals: [],
    final: [],
    winner: null,
  });

  const moveTeamUp = (team, stage) => {
    if (stage === "quarterFinals") {
      setBracket({
        ...bracket,
        semiFinals: [...bracket.semiFinals, team],
        quarterFinals: bracket.quarterFinals.filter((t) => t.id !== team.id),
      });
    } else if (stage === "semiFinals") {
      setBracket({
        ...bracket,
        final: [...bracket.final, team],
        semiFinals: bracket.semiFinals.filter((t) => t.id !== team.id),
      });
    } else if (stage === "final") {
      setBracket({
        ...bracket,
        winner: team,
      });
    }
  };

  return (
    <div className="app">
      <h1>Euro 2024 Bracket</h1>
      <BracketStage
        stageTitle="Quarter Finals"
        teams={bracket.quarterFinals}
        moveTeamUp={moveTeamUp}
        stateName="quarterFinals"
      />
      <BracketStage
        stageTitle="Semi Finals"
        teams={bracket.semiFinals}
        moveTeamUp={moveTeamUp}
        stateName="semiFinals"
      />
      <BracketStage
        stageTitle="Final"
        teams={bracket.final}
        moveTeamUp={moveTeamUp}
        stateName="final"
      />
      {bracket.winner && (
        <div className="winner">
          <h2>Winner: {bracket.winner.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Euro2024App;
