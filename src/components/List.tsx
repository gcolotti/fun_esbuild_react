import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import { getListStyle } from '../utils';
import { Card } from './Card';

export const List = ({ items }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {items.map((item, index) => (
            <Card item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};