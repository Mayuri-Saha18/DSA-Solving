// import React, { useState } from 'react';
// import Tracker from '../Components/Tracker';
// import Analytics from '../Components/Analytics';
// import History from '../Components/History';
// import { Button, ButtonGroup } from '@material-ui/core';

// function Dashboard() {
//   const [activeButton, setActiveButton] = useState('tracker');

//   const handleClick = (button) => {
//     setActiveButton(button);
//   }

//   return (
//     <div>
//       <nav>
//         <button onClick={() => handleClick('tracker')}>Tracker</button>
//         <button onClick={() => handleClick('analytics')}>Analytics</button>
//         <button onClick={() => handleClick('history')}>History</button>
//       </nav>
//       {activeButton === 'tracker' && <Tracker />}
//       {activeButton === 'analytics' && <Analytics />}
//       {activeButton === 'history' && <History />}
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from 'react';
import Tracker from '../Components/Tracker';
import Analytics from '../Components/Analytics';
import History from '../Components/History';
import { Button,ButtonGroup, Grid } from '@chakra-ui/react';

function Dashboard() {
  const [activeButton, setActiveButton] = useState('tracker');

  const handleClick = (button) => {
    setActiveButton(button);
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => handleClick('tracker')}>Tracker</Button>
          <Button onClick={() => handleClick('analytics')}>Analytics</Button>
          <Button onClick={() => handleClick('history')}>History</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={12}>
        {activeButton === 'tracker' && <Tracker />}
        {activeButton === 'analytics' && <Analytics />}
        {activeButton === 'history' && <History />}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
