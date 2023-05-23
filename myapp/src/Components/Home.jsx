import { useDispatch, useSelector } from 'react-redux';
import { setName, setDifficulty, saveFormData } from '../Redux/store';
import { useNavigate  }  from 'react-router-dom'
import { Box, Heading, FormControl, FormLabel, Input, Select, Button, Text, Link as ChakraLink, Flex, Spacer } from '@chakra-ui/react';

function Home() {
  const navigate = useNavigate ()
  const dispatch = useDispatch();
  const { name, difficulty } = useSelector((state) => state);


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveFormData());
    navigate('/play');
  };

  return (
    <Box>
      <Heading as="h1" mb={4}>
        Welcome to the game!
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(event) => dispatch(setName(event.target.value))}
          />
        </FormControl>
        <FormControl id="difficulty" isRequired mt={4}>
          <FormLabel>Difficulty</FormLabel>
          <Select
            value={difficulty}
            onChange={(event) => dispatch(setDifficulty(event.target.value))}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>
          Start Game
        </Button>
      </form>
    </Box>
  );
}

export default Home;
