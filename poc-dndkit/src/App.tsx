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
  const [activeId, setActiveId] = useState();
  return (
    <DndContext 
    collisionDetection={closestCenter} 
    // onDragOver={onDragover} 
    onDragEnd={handleDragEnd}
    // onDragStart={handleDragStart}
    >
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
    if(typeof event.active.id === "string"){

      let raiaActive = list.listaRaias.find(elemento => elemento.elementos.find(val => val === event.active.id))
      let raiaOver = list.listaRaias.find(elemento => elemento.elementos.find(val => val === event.over.id))
    
      const activeItems = raiaActive.elementos.indexOf(active.id)
      const activeName = active.id;
      const overName = over.id;
      const overItems = raiaOver.elementos.indexOf(over.id);

      raiaOver.elementos[overItems] = activeName;
      raiaActive.elementos[activeItems] = overName;
      return arrayMove(raiaActive?.elementos, activeItems, overItems)


    }else{
    if (active.id !== over.id) {
      list.setRaias((items) => {
        const activeItems = list.listaRaias.findIndex(function(obj){
          return obj.id === active.id;
        })
      
        const overItems = list.listaRaias.findIndex(function(obj){
          return obj.id === over.id;
        })
        return arrayMove(items, activeItems, overItems)
      })
    }
  }
  }

  // function onDragover(event:any){
  //   const id = event.active.id;
  //   const overId = event.over;


  //   // list.listaRaias.map(val => {
  //   //   console.log(val.elementos);

  //   //   if(id in val.elementos){
  //   //     console.log(id);
  //   //   }
  //   // })
  //   let listaDestino = null;
  //   let listaOrigem = null;
  //   listaDestino = list.listaRaias.find(elemento => elemento.elementos.find(val => val === event.active.id));
  //   listaOrigem = list.listaRaias.find(elemento => elemento.elementos.find(val => val === event.over.id));

  // }
  // function handleDragStart(event:any) {
  //   const { active } = event;
  //   const { id } = active;

  //   setActiveId(id);
  // }

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