import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import { Lista } from "./Lista";

export function Raia(props:any){
    const list = Lista();
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
        
      const raiaSelecionada = list.listaRaias[props.id -1]
      const activeItems = raiaSelecionada.elementos.indexOf(active.id)
      const activeName = active.id;
      const overName = over.id;
      const overItems = raiaSelecionada.elementos.indexOf(over.id)
      console.log(raiaSelecionada.elementos);

      raiaSelecionada.elementos[overItems] = activeName;
      raiaSelecionada.elementos[activeItems] = overName;
      console.log(raiaSelecionada.elementos);
      raiaSelecionada.elementos.map(() =>{
        return
      })

    //   list.setRaias((items) => {                                                                
       
    //     let arrItens = items[props.id-1]  
    //     console.log(arrItens.elementos.indexOf(active.id))
    //     console.log(arrItens.elementos.indexOf(over.id))
       
    //     // return arrayMove(items, activeItems, overItems)
    //   })
    }
  }

return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={list.listaRaias[props.id - 1].elementos} strategy={horizontalListSortingStrategy}>
    <div style={slaporra} ref={setNodeRef} {...attributes} {...listeners}>
        {list.listaRaias[props.id - 1].elementos.map(pessoa => <SortableItem key={pessoa} id={pessoa} />)}
    </div>
    </SortableContext>
    </DndContext>
    
)
}