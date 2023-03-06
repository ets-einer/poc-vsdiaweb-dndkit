import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";

export const removeAtIndex = (array, index, id, color) => {
const arrayMoved ={
  cards:[...array.slice(0, index), ...array.slice(index + 1)],
  id:id,
  color:color
}
return arrayMoved;
};

export const insertAtIndex = (array, index, item, id, color) => {
  const arrayMoved ={
    cards:[...array.slice(0, index), item, ...array.slice(index)],
    id:id,
    color:color
  }

  return arrayMoved;
  
};

export const arrayMove = (array, oldIndex, newIndex, id, color) => {
  const newArray = dndKitArrayMove(array, oldIndex, newIndex);

  const arrayMoved ={
    cards:newArray,
    id:id,
    color:color
  }
  console.log(array,oldIndex,newIndex);
  return arrayMoved;
};

export const arrayEmpty = (array, oldIndex, newIndex, id) => {
  const newArray = dndKitArrayMove(array, oldIndex, newIndex);

  const arrayMoved ={
    cards:newArray,
    id:id,
    color:"white"
  }
  console.log(array,oldIndex,newIndex);
  return arrayMoved;
};
