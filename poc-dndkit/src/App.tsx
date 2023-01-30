import  {useState} from 'react';
import {closestCenter, DndContext} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import {SortableItem} from './SortableItem'

function App() {
  const [pessoas, setPessoas] = useState(["Miura", "Camuda", "Igor"])
  
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h3>Teste</h3>
      <SortableContext items={pessoas} strategy={verticalListSortingStrategy}>
        {pessoas.map(pessoa=><SortableItem key={pessoa} id={pessoa} ></SortableItem>)}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event:any){
    console.log("Drag done")
    const {active, over} = event

    if(active.id !== over.id){
      setPessoas((items)=>{
        const activeItems = items.indexOf(active.id)
        const overItems = items.indexOf(over.id)

        return arrayMove(items, activeItems, overItems)
      })
    }
  }

 
};

export default App;