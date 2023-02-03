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
    // console.log(event.collisions)
    const { active, over } = event
    console.log(event.active.id)
    console.log(list.listaRaias)
    if(typeof event.active.id === "string"){

      const raiaSelecionada = list.listaRaias.findIndex(function(obj){

        
      ) 
      console.log(raiaSelecionada);
      list.listaRaias[raiaSelecionada.id -1]
      const activeItems = raiaSelecionada.elementos.indexOf(active.id)
      const activeName = active.id;
      const overName = over.id;
      const overItems = raiaSelecionada.elementos.indexOf(over.id);

      raiaSelecionada.elementos[overItems] = activeName;
      raiaSelecionada.elementos[activeItems] = overName;
      let newArr = [...list.listaRaias];
      newArr[props.id] = raiaSelecionada;
      list.setRaias(newArr);

    }else{
    if (active.id !== over.id) {
      list.setRaias((items) => {
        console.log(active.id);
        const activeItems = list.listaRaias.findIndex(function(obj){
          return obj.id === active.id;
        })
      
        const overItems = list.listaRaias.findIndex(function(obj){
          return obj.id === over.id;
        })
        console.log(activeItems + "/" + overItems)
        return arrayMove(items, activeItems, overItems)
      })
    }
  }
  }


};

export default App;




// import React, {useState} from 'react';
// import {DndContext} from '@dnd-kit/core';

// import {Droppable} from './Droppable'
// import {Draggable} from './Draggable';

// export default function App() {
//   const containers = ['A', 'B', 'C'];
//   const [parent, setParent] = useState(null);
//   const draggableMarkup = (
//     <Draggable id="draggable">Drag me</Draggable>
//   );

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       {parent === null ? draggableMarkup : null}

//       {containers.map((id) => (
//         // We updated the Droppable component so it would accept an `id`
//         // prop and pass it to `useDroppable`
//         <Droppable key={id} id={id}>
//           {parent === id ? draggableMarkup : 'Drop here'}
//         </Droppable>
//       ))}
//     </DndContext>
//   );

//   function handleDragEnd(event) {
//     const {over} = event;

//     // If the item is dropped over a container, set it as the parent
//     // otherwise reset the parent to `null`
//     setParent(over ? over.id : null);
//   }
// };