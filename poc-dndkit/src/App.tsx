import { useState } from 'react';
import { closestCenter, DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem'
import { Raia } from './Raia';

function App() {
  const style = {
    background: '#02f30f',
    padding: '10px',
    margin: '10px'
  }
  const [pessoas, setPessoas] = useState(["Raia1", "Raia2", "Raia3", "Raia4"]);
  const [newVal, setNewVal] = useState("")
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div>
        <input type="text" onChange={(e) => setNewVal(e.target.value)} />
        <button onClick={(e) => setPessoas([...pessoas, newVal])}>Add something</button>
      </div>
      <h3>Sortable list</h3>
      <SortableContext items={pessoas} strategy={verticalListSortingStrategy}>
        {pessoas.map((raia)=>
          <Raia id={raia} key={raia}>
          
        </Raia>
        )}

      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    console.log(event.collisions)
    const { active, over } = event

    if (active.id !== over.id) {
      setPessoas((items) => {
        const activeItems = items.indexOf(active.id)
        const overItems = items.indexOf(over.id)

        return arrayMove(items, activeItems, overItems)
      })
    }
  }


};

export default App;