function calculateTotalScore(scores) {
    const scoreMap = new Map();
  
    scores.forEach(score => {
      const levelScore = getLevelScore(score.difficulty);
      const currentScore = scoreMap.get(score.name) || 0;
      scoreMap.set(score.name, currentScore + levelScore);
    });
  
    return Array.from(scoreMap.entries()).map(([name, score]) => ({ name, score }));
  }
  
  function getLevelScore(difficulty) {
    switch (difficulty) {
      case 'Easy':
        return 5;
      case 'Medium':
        return 7;
      case 'Hard':
        return 10;
      default:
        return 0;
    }
  }
  <tbody>
  {calculateTotalScore(scores).map(score => (
    <tr key={score.name}>
      <td>{score.name}</td>
      <td>{score.score}</td>
    </tr>
  ))}
</tbody>

