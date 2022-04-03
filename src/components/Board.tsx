import React from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { useBoard } from '../hooks/useBoard';
import { List } from './List';

export const Board = () => {
  const { items, onDragEnd } = useBoard();

  return (
    <DragDropContext DragDropContext onDragEnd={onDragEnd} >
      <List items={items} />
    </DragDropContext>
  );
};