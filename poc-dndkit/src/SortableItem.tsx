import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";
import { Raia } from "./Raia";

export function SortableItem(props: any) {
    const
        {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
        } = useSortable({ id: props.id });

    const style = {
        background: '#f2f2f2',
        margin: '10px',
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: 'pointer',
        width: "200px",
        padding: '1rem',
        borderRadius: '5px'
    }

    return (
        <div style={style} ref={setNodeRef} {...attributes} {...listeners}>
            {props.id}
        </div>
    )

}