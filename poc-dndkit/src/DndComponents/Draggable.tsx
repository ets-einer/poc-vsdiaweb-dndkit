import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";



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
    <div className="">
      <button ref={setNodeRef} style={style} {...listeners} {...attributes} className="border-2 border-blue-600 rounded-lg bg-blue-300 w-40 h-20 flex justify-center items-center font-bold text-blue-600">
        {props.children}
      </button>
    </div>
  );
};
