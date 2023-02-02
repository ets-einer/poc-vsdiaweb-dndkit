import { useState } from 'react';
import { closestCenter, DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableItem } from './SortableItem'
import { Raia } from './Raia';
import { Lista } from './Lista';

function App() {
  const list = Lista()

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
      <SortableContext items={list.listaRaias} strategy={verticalListSortingStrategy}>
        {list.listaRaias.map((raia)=>
       
          <Raia id={raia.id} key={raia.id}>
          
        </Raia>
        )}

      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    console.log(event.collisions)
    const { active, over } = event

    if (active.id !== over.id) {
      list.setRaias((items) => {
        const activeItems = items.indexOf(active.id)
        const overItems = items.indexOf(over.id)

        return arrayMove(items, activeItems, overItems)
      })
    }
  }


};

export default App;