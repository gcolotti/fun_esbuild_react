export const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    title: `Title ${k}`,
    content: `Interesting content ${k}... `
  }));

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;

export const getItemStyle = (isDragging, draggableStyle) => {
  return {
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? "lightgreen" : "#fafafa",
    borderRadius: 3,
    height: 50,
    ...draggableStyle
  }
};

export const getListStyle = isDraggingOver => ({
  borderRadius: 3,
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 300,
});