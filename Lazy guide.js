const cases = [
       [4, [0, -2], [1, 0], [-1, 0], [0, 2]],
       [3, [0, 2], [-3, 0], [0, -1]],
      [1, [0, 0]],
     ];
    
     lazyGuide(3, cases);
    
     function lazyGuide(numCases, cases) {
       for (let i = 0; i < numCases; i++) {
        const n = cases[i][0];
         const spots = cases[i].slice(1);
    
         const xSpots = spots.filter((spot) => spot[1] === 0).map((spot) => spot[0]);
        const ySpots = spots.filter((spot) => spot[0] === 0).map((spot) => spot[1]);
    
        xSpots.sort((a, b) => a - b);
         ySpots.sort((a, b) => a - b);
    
         let totalDist = 0;
    
         for (let j = 1; j < xSpots.length; j++) {
          totalDist += Math.abs(xSpots[j] - xSpots[j - 1]);
         }
    
         for (let j = 1; j < ySpots.length; j++) {
           totalDist += Math.abs(ySpots[j] - ySpots[j - 1]);
         }
    
         totalDist +=
           Math.abs(spots[spots.length - 1][0]) +
           Math.abs(spots[spots.length - 1][1]);
    
         console.log(totalDist);
       }
     }