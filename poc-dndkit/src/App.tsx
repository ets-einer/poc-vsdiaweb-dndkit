import React, { useState } from "react";
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
  color:"white"

}
const group3={
  cards: ["7", "8", "9"],
  id:3,
  color:"white"

}
function App() {
  const [itemGroups, setItemGroups] = useState([
    group1,
    group2,
    group3
  ]
  );
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragStart = ({ active }) => setActiveId(active.id);

  const handleDragCancel = () => setActiveId(null);

  const handleDragOver = ({ active, over }) => {
    const overId = over?.id;

    if (!overId) {
      return;
    }

    let activeContainer = active.data.current.sortable.containerId;
    let overContainer = over.data.current?.sortable.containerId || over.id;

    activeContainer = itemGroups.findIndex(obj => {
      return obj.id === activeContainer;
    });
    overContainer = itemGroups.findIndex(obj => {
      return obj.id === overContainer;
    });
    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups) => {
        const activeIndex = active.data.current.sortable.index;
     
        const overIndex =
          over.id === itemGroups[overContainer].id
            ? itemGroups[overContainer].cards.length + 1
            : over.data.current.sortable.index;
        console.log(overIndex);
        return moveBetweenContainers(
          itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      let activeContainer = active.data.current.sortable.containerId;
      let overContainer = over.data.current?.sortable.containerId || over.id;
      console.log(itemGroups)
      activeContainer = itemGroups.findIndex(obj => {
        return obj.id === activeContainer;
      });
      overContainer = itemGroups.findIndex(obj => {
        return obj.id === overContainer;
      });
      const activeIndex = active.data.current.sortable.index;
      console.log(activeContainer)
   
      const overIndex =
        over.id in itemGroups[overContainer]
          ? itemGroups[overContainer].cards.length + 1
          : over.data.current.sortable.index;

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
          over.data.current?.sortable.containerId || over.id
        )
        console.log(Object.keys(itemGroups));
        } else {
        
          newItems = moveBetweenContainers(
            itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
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
    item:any
  ) => {
    const movedArray = [
      ...items
    ];
    movedArray[activeContainer] = removeAtIndex(items[activeContainer].cards, activeIndex, items[activeContainer].id, items[activeContainer].color);
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
