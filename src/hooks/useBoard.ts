import React, { useState, useEffect } from 'react';
import { getItems, reorder } from '../utils';

export const useBoard = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(10));
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const orderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(orderedItems);
  };

  return {
    items,
    onDragEnd
  };
};