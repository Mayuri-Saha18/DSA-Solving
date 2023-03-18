function jumpingOnClouds(c) {
    var jumpCount = 0;
    var i = 0;
    while (i < c.length - 1) {
      if (c[i + 2] === 0) {
        jumpCount++;
        i += 2;
      } else if (c[i + 1] === 0) {
        jumpCount++;
        i++;
      }
      if (i === c.length - 1) break;
    }
    return jumpCount;
  }
  
  let x = jumpingOnClouds(Array);
  
  console.log(x);