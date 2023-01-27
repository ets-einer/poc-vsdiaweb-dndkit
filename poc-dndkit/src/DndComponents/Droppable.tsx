import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export const Droppable = (props:any) => {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data:{
      accepts:['type1']
    }
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}