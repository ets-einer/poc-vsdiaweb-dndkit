import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";

import SortableItem from "./components/SortableItem";

const containerStyle = {
  background: "#dadada",
  padding: 10,
  margin: 10,
  flex: 1
};

export function Container(props: any) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={horizontalListSortingStrategy}
    >
      <div ref={setNodeRef} style={containerStyle}>
        {items.map((id: any) => (
          <SortableItem key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
}
