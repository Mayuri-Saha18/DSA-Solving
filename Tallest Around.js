function tall(arr,n,k){
    let stack=[];
    for (let i=0;i<=arr.length-k;i++){
      let max=arr[i];
      for (let j=i;j<i+k;j++) {
        if (arr[j]>max) {
          max=arr[j];
        }
      }
      stack.push(max);
    }
    console.log(stack.join(" "));
  }
  function runProgram(input) {
    input =input.split("\n");
    let tc = +input[0];
    var line = 1;
    for (let i = 0; i < tc; i++) {
      var [n,k] = input[line++].split(" ").map(Number);
      var arr = input[line++].split(" ").map(Number);
      tall(arr,n,k)
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