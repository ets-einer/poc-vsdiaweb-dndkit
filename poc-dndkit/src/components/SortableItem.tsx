import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ActionBox } from "./ActionBox";


export default function SortableItem(props:any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ActionBox id={props.id}/>
    </div>
  );
}