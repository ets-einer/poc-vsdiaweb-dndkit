import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";

export function Raia(props:any){
    const [pessoas, setPessoas] = useState(["Miura", "Camuda", "Igor", "Prates"]);
    const
    {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: props.id });

const slaporra={
    transform: CSS.Transform.toString(transform),
    transition,
    background: '#dd3dfd',
    margin: '20px',
    width: '100%',
    display: 'flex'
}

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

return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={pessoas} strategy={horizontalListSortingStrategy}>
    <div style={slaporra} ref={setNodeRef} {...attributes} {...listeners}>
        {pessoas.map(pessoa => <SortableItem key={pessoa} id={pessoa} />)}
    </div>
    </SortableContext>
    </DndContext>
    
)
}