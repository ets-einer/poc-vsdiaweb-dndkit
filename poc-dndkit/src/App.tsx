import { useState } from 'react'
import './App.css'
import { DndContext } from "@dnd-kit/core";
import { Draggable } from './DndComponents/Draggable';
import { Droppable } from './DndComponents/Droppable';

function App() {
  const [isDropped, setIsDropped] = useState(false);
  
  const draggableMarkup = (
    <Draggable>Pega!</Draggable>
    
  );
  const drag = ( <Draggable>Another one</Draggable>);
  function handleDragEnd(event:any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  return (<div className="flex-flex-col gap-20">
    <DndContext onDragEnd={handleDragEnd}>
    {!isDropped ? draggableMarkup : null}
    <Droppable>
      {isDropped ? draggableMarkup : 'Solta aqui!'}
    </Droppable>
  </DndContext>
);
      
   </div>
  )
}

export default App
