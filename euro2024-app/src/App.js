import React from "react";
import "./App.css";
import UseStateWithButton from "./W12/UseStateWithButton";
import UseEffectWithCountTracker from "./W12/UseEffectWithCountTracker";
import ChangingStyleButton from "./W12/ChangingStyleButton";
import GameOfThrones from "./W12/GameOfThrones";
import { ParentToChild } from "./W16/ParentToChild";
import { ChildToParent } from "./W16/ChildToParent";
import HierarchyTree from "./W16/RecursiveExample/HierarchyTree";

const App = () => {
  return <ParentToChild />;
};

export default App;
