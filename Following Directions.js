function directions(n, arr) {
    let x = 0; // horizontal position
    let y = 0; // vertical position
  
    for (let i = 0; i < n; i++) {
      if (arr[i] === "U") {
        y++;
      } else if (arr[i] === "D") {
        y--;
      } else if (arr[i] === "L") {
        x--;
      } else if (arr[i] === "R") {
        x++;
      }
  
      if (x === 1 && y === 1) {
        console.log("YES");
        return;
      }
    }
  
    console.log("NO");
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
  
    for (let i = 0; i < tc; i++) {
      let [n, m] = input[line++].trim().split(" ").map(Number);
      let arr = input[line++].trim().split("");
      directions(n, arr);
    }
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }