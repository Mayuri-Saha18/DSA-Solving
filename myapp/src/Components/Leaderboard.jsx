import { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Fetch data from JSON server
    fetch('https://mock-play-server.onrender.com/leaderboard')
      .then(response => response.json())
      .then(data => setScores(data));
  }, []);

  return (
    <Box>
    <h1>Leaderboard</h1>
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Score</Th>
        </Tr>
      </Thead>
      <Tbody>
        {scores.map(score => (
          <Tr key={score.id}>
            <Td>{score.name}</Td>
            <Td>{score.score}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
  );
}

export default Leaderboard;
