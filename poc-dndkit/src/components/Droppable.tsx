import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

import "./Droppable.css";
import { add } from "@dnd-kit/utilities";

const Droppable = ({ id, items,color }) => {
  const { setNodeRef } = useDroppable({ id });



  return (
    <SortableContext id={id} items={items} strategy={horizontalListSortingStrategy}>
      <ul style={{backgroundColor:color}} className="droppable" ref={setNodeRef}>
        {items.map((item:any) => (
          
          <SortableItem key={item} id={item} />
        ))}
      </ul>
    </SortableContext>
  );
};

export default Droppable;
