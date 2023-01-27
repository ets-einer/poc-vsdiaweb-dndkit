import { useDroppable } from "@dnd-kit/core";

export const Droppable = (props: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div ref={setNodeRef} style={style} className="w-96 h-96 border-gray-200 border-2 rounded-lg bg-[whitesmoke]">
      {props.children}
    </div>
  );
};
