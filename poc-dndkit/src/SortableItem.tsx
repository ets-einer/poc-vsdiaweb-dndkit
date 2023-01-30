import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props:any){
    const
    {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id:props.id});

    const style ={
        padding:'5px',
        background:'#f2f2f2',
        margin:'10px',
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
            {props.id}
        </div>
    )

}