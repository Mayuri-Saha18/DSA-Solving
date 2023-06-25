function runProgram(input) {
    input=input.trim().split("\n")
    let n=+input[0]
    let arr=input[1].trim().split(" ").map(Number)
    let distinct=new Set(arr)
    
    let sum=0
    for(let key of distinct )  {
        sum+=key
    }
    
    console.log(sum)
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