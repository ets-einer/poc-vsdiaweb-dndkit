import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// Within your component that receives `transform` from `useDraggable`:

export const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div>
      <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {props.children}
      </button>
    </div>
  );
};
