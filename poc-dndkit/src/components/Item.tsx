import React from "react";

import "./Item.css";
import { ActionBox } from "./ActionBox";

const Item = ({ id, dragOverlay }) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

  return (

    <ActionBox opacidade={"opacity-80 "}/>

  );
};

export default Item;
