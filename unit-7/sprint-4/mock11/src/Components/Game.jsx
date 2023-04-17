import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "../Components/Game.css"

const EasyLevel = () => {
  const [numbers, setNumbers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    // Generate 5 random numbers between 1 and 100
    const newNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1);
    setNumbers(newNumbers);
  }, []);

  useEffect(() => {
    // Decrease timer every second
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleDragEnd = (result) => {
    // If dropped outside of list, do nothing
    if (!result.destination) return;

    // Reorder numbers based on drag and drop
    const newNumbers = [...numbers];
    const [removed] = newNumbers.splice(result.source.index, 1);
    newNumbers.splice(result.destination.index, 0, removed);
    setNumbers(newNumbers);
  };

  return (
    <div>
      <h2>Easy Level</h2>
      <p>Time Left: {timeLeft}</p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="numbers">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {numbers.map((number, index) => (
                <Draggable key={number} draggableId={number.toString()} index={index}>
                  {(provided) => (
                    <h1
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {number}
                    </h1>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default EasyLevel;