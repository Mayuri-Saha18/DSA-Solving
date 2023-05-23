import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import { Button, Heading, Text, Box, List, ListItem } from '@chakra-ui/react';

const Play = ({ difficulty  }) => {
  const [numbers, setNumbers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(difficulty === 'easy' ? 60 : difficulty === 'medium' ? 40 : 30);
  const [gameOver, setGameOver] = useState(false);
  const [youWon, setYouWon] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const newNumbers = [];
    const numCount = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 7 : 10;
    for (let i = 0; i < numCount; i++) {
      const num = Math.floor(Math.random() * 100) + 1;
      newNumbers.push(num);
    }
    // shuffle the numbers
    newNumbers.sort(() => Math.random() - 0.5);
    setNumbers(newNumbers);
  }, [difficulty]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newNumbers = Array.from(numbers);
    const [removed] = newNumbers.splice(result.source.index, 1);
    newNumbers.splice(result.destination.index, 0, removed);
    setNumbers(newNumbers);
    if (newNumbers.every((num, i) => i === 0 || num >= newNumbers[i - 1])) {
      setYouWon(true);
    }
  };

  const handleRetry = () => {
    setGameOver(false);
    setYouWon(false);
    setTimeLeft(difficulty === 'easy' ? 60 : difficulty === 'medium' ? 40 : 30);
  };

  const handlePlayAgain = () => {
    handleRetry();
    setNumbers([]);
  };

  const onQuit = () => {
    navigate("/")
  }

  return (
<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {gameOver ? (
        <Box>
          <Heading as="h2">Game Over</Heading>
          <Button onClick={handleRetry}>Retry</Button>
          <Button onClick={onQuit}>Quit</Button>
        </Box>
      ) : youWon ? (
        <Box>
          <Heading as="h2">You Won!</Heading>
          <Button onClick={handlePlayAgain}>Play Again</Button>
          <Button onClick={onQuit}>Quit</Button>
        </Box>
      ) : (
        <Box> 
          <Heading as="h2" backgroundColor='green' borderRadius='50%'>{timeLeft} seconds</Heading>
          <br />
          <Heading>Put Numbers In Correct Order</Heading>
          <Box display="flex" justifyContent="center">
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="numbers">
                {(provided) => (
                  <List
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                   
                    flexDirection="row"
                    justifyContent="center"
                    border="4px solid orange"
                    marginTop="20px"
                    padding="20px"
                  >
                    {numbers.map((num, index) => (
                      <Draggable key={num} draggableId={num.toString()} index={index}>
                        {(provided) => (
                          <ListItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            margin="0 0.5rem"
                          >
                            <Text>{num}</Text>
                          </ListItem>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </List>
                )}
              </Droppable>
            </DragDropContext>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Play;
