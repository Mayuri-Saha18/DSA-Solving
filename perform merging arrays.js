function Perform(n,m,arr,str) {
    let result = [];
   
    let i = 0, j = 0;
    while (i < arr.length && j < str.length) {
      if (arr[i] <str[j]) {
        result.push(arr[i]);
        i++;
      } else {
        result.push(str[j]);
        j++;
      }
    }
    
    // add the remaining elements from either array1 or array2
    while (i < arr.length) {
      result.push(arr[i]);
      i++;
    }
    
    while (j < str.length) {
      result.push(str[j]);
      j++;
    }
    
    console.log(result.join(" "));
  }
  function runProgram(input) {
      input =input.trim().split("\n")
      let tc=+input[0]
      let line =1
      for(let i=0;i<tc;i++){
      let [n,m] =input[line++].trim().split(" ").map(Number)
      let arr =input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
      let str =input[line++].trim().split(" ").map(Number).sort((a, b) => a - b);
      Perform(n,m,arr,str)
      }
  }
  if (process.env.USERNAME === "") {
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