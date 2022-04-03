import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import { getItemStyle } from '../utils';

interface ProvidedProps {
  innerRef: React.LegacyRef<HTMLDivElement>;
  draggableProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
  dragHandleProps: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>;
}

interface SnapshotProps {
  isDragging: any;
}

interface CardProps {
  item: any;
  index: number;
}

export const Card = ({ item, index }: CardProps) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided: ProvidedProps, snapshot: SnapshotProps) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <h2>{item.title}</h2>
          {item.content}
        </div>
      )}
    </Draggable>
  );
};