import { SortableContext, arrayMove, horizontalListSortingStrategy, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter, useDroppable } from "@dnd-kit/core";
import { Lista } from "./Lista";

export function Raia(props:any){
    const list = Lista();
    const [pessoas, setPessoas] = useState(["Miura", "Camuda", "Igor", "Prates"]);
    const {id} = props;
    const
    {
        attributes,
        listeners,
        transform,
        transition,
    } = useSortable({ id: props.id });

    const { setNodeRef } = useDroppable({
        id
      });
    
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
      const overItems = raiaSelecionada.elementos.indexOf(over.id);

      raiaSelecionada.elementos[overItems] = activeName;
      raiaSelecionada.elementos[activeItems] = overName;
      let newArr = [...list.listaRaias];
      newArr[props.id] = raiaSelecionada;
      list.setRaias(newArr);

    //   list.setRaias((items) => {                                                                
       
    //     let arrItens = items[props.id-1]  
    //     console.log(arrItens.elementos.indexOf(active.id))
    //     console.log(arrItens.elementos.indexOf(over.id))
       
    //     // return arrayMove(items, activeItems, overItems)
    //   })
    }
  }

return (
        <SortableContext items={list.listaRaias[props.id - 1].elementos} strategy={horizontalListSortingStrategy}>
    <div style={slaporra} ref={setNodeRef} {...attributes} {...listeners}>
        {list.listaRaias[props.id - 1].elementos.map(pessoa => <SortableItem key={pessoa} id={pessoa} />)}
    </div>
         </SortableContext>
    
)
}