import React, { useState, useEffect } from "react";
import { PointerSensor } from "@dnd-kit/core";

import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { ActionBox } from "./components/ActionBox";

import Droppable from "./components/Droppable";
import Item from "./components/Item";
import { arrayMove, insertAtIndex, removeAtIndex } from "./utils/array.js";

import "./App.css";
const group1={
  cards: ["1", "2", "3"],
  id:1,
  color:"white"

}
const group2={
  cards: ["4", "5", "6"],
  id:2,
  color:"gray"

}
const group3={
  cards: ["7", "8", "9"],
  id:3,
  color:"white"

}
const group4={
  cards: ["10", "11", "12", "13", "14"],
  id:4,
  color:"gray"

}
var globalNegativo = 1;
var overEnd = true;
var contralador = true;
var activeIndex:any;
var overIndex:any;
var overCounter:any = 0;
var lastActiveContainer:any;
var lastInvisibleId:any;
var checkManterInvisivel:any;
var lastActiveIndex:any;

function App() {
  
  const [itemGroups, setItemGroups] = useState([
    group1,
    group2,
    group3,
    group4
  ]
  );

  if(contralador === true){
    itemGroups.map(p =>{
      let ultimaInteracao = globalNegativo + 3;
  
      for (let index = globalNegativo - 1; index < ultimaInteracao; index++) {
        if(!p.cards.includes("-"+globalNegativo)){
          p.cards.push("-"+globalNegativo)
          globalNegativo++;
        }
      }
      
    })

  }
  contralador = false;

  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    }),
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  

  const handleDragStart = ({ active }) => setActiveId(active.id);

  const handleDragCancel = () => {
    setActiveId(null);
    console.log("Ativação")
  
  };

  const handleDragOver = ({ active, over }) => {
    const overId = over?.id;
    let type:any;

    if (!overId) {
      return;
    }

    let activeContainer:any;
    let overContainer:any;
    itemGroups.findIndex(obj => {
   
      if(obj.cards.includes(active.id)){
      activeContainer = obj.id;
      }
    });
    itemGroups.findIndex(obj => {
   
      if(obj.cards.includes(over.id)){
        overContainer = obj.id;
      }
    });
    

  overContainer = itemGroups.findIndex(obj => {
      return obj.id === overContainer;
  });

    activeContainer = itemGroups.findIndex(obj => {
      return obj.id === activeContainer;
  });
  console.log(overContainer);
  //   while(overContainer === undefined || overContainer === -1){
  //     overContainer = itemGroups.findIndex(obj => {
  //     return obj.id === overContainer;
  //   });
  // }


    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups) => {
        
      if(itemGroups[activeContainer] != undefined){
        activeIndex = itemGroups[activeContainer].cards.indexOf(active.id);
      }
      
        // while(activeIndex === undefined || activeIndex === -1){
        //   activeIndex = itemGroups[activeContainer].cards.indexOf(active.id);
        // }
        overEnd = false;
        // const overIndex =
        //   over.id === itemGroups[overContainer].id
        //     ? itemGroups[overContainer].cards.length + 1
        //     : over.data.current.sortable.index;
        if(itemGroups[overContainer] != undefined){
          overIndex = itemGroups[overContainer].cards.indexOf(over.id);
        }
        
          // while(overIndex === undefined || overIndex === -1){
          //   overIndex = itemGroups[overContainer].cards.indexOf(over.id);
          // }

            // if(overIndex === itemGroups[overContainer].id || overIndex === null){
            //   itemGroups[overContainer].cards.length + 1
            // }

        
        console.log(overContainer);
        console.log(activeContainer);
        if(itemGroups[overContainer].cards[overIndex] != undefined && itemGroups[overContainer].cards[overIndex].includes("-")){
          // let valorSave = itemGroups[overContainer].cards[overIndex];
        
          itemGroups[overContainer].cards.splice(overIndex,1);
         
       
        }
      
          
         if(overCounter === 0){
          lastActiveContainer = activeContainer;
          lastActiveIndex = activeIndex;
          let valorInvisivel = "-"+globalNegativo;
          itemGroups[activeContainer].cards.splice(activeIndex,1,valorInvisivel);
          globalNegativo++;
          lastInvisibleId = valorInvisivel;
          type = false;
         }else{
          type = true;
         }

         if(lastActiveContainer === overContainer && lastInvisibleId === over.id){
          checkManterInvisivel = true;
         }

         if(checkManterInvisivel === true && overContainer != lastActiveContainer){
          itemGroups[activeContainer].cards.splice(lastActiveIndex,1,lastInvisibleId);
          
          checkManterInvisivel = false;
          type = false;
        }


         overCounter = 1;

        return moveBetweenContainers(
          itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id,
          type
        );
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    overEnd = true;
    overCounter = 0;

    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      
      let overContainer = over.data.current?.sortable.containerId || over.id;

      let activeContainer = itemGroups.findIndex(obj => {
       let c = obj.cards.map(a=>{
          return a === active.id;
        })
        if(c.includes(true)){
        return obj.id;
        }
      });

      overContainer = itemGroups.findIndex(obj => {
        return obj.id === overContainer;
      });
      
      if(itemGroups[activeContainer].cards != undefined){
      activeIndex = itemGroups[activeContainer].cards.indexOf(active.id);
      }

      while(activeIndex === undefined){
        activeIndex = itemGroups[activeContainer].cards.indexOf(active.id);
      }
    
   
      const overIndex =
      over.id = itemGroups[overContainer].cards.indexOf(over.id);

      setItemGroups((itemGroups) => {
        let newItems;

        if (activeContainer === overContainer) {
          newItems = [
            ...itemGroups
        ];
        newItems[overContainer] = arrayMove(
          itemGroups[overContainer].cards,
          activeIndex,
          overIndex,
          over.data.current?.sortable.containerId || over.id,
          itemGroups[overContainer].color
        )
          
        } else {

          newItems = moveBetweenContainers(
            itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id,
            true
          );
          
        }
     
        return newItems;
      });
    }
  
    setActiveId(null);
  };

  const moveBetweenContainers = (
    items:any,
    activeContainer:any,
    activeIndex:any,
    overContainer:any,
    overIndex:any,
    item:any,
    type:any
  ) => {
    const movedArray = [
      ...items
    ];
    if(type === true){
    movedArray[activeContainer] = removeAtIndex(items[activeContainer].cards, activeIndex, items[activeContainer].id, items[activeContainer].color);
    }
    movedArray[overContainer] = insertAtIndex(items[overContainer].cards, overIndex, item, items[overContainer].id, items[overContainer].color);
    return movedArray;
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="container">
       
        {Object.keys(itemGroups).map((group) => (
     
          <Droppable
            id={itemGroups[group].id}
            items={itemGroups[group].cards}
            key={itemGroups[group].id}
            color={itemGroups[group].color}
          />
      
        ))}
        
      </div>
      <DragOverlay>
        {activeId ? <Item id={activeId} dragOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default App;

