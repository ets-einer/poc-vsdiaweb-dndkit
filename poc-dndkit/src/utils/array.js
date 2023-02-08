import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";

export const removeAtIndex = (array, index) => {
    console.log(index)
return [...array.slice(0, index), ...array.slice(index + 1)]
};

export const insertAtIndex = (array, index, item) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const arrayMove = (array, oldIndex, newIndex, id) => {
  const newArray = dndKitArrayMove(array, oldIndex, newIndex);

  const arrayMoved ={
    cards:newArray,
    id:id,
    color:"white"
  }
  console.log(array,oldIndex,newIndex);
  return arrayMoved;
};
