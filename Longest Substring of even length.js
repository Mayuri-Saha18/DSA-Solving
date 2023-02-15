function longest(n,arr){

  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
      
    let leftSum = 0, rightSum = 0;
    let j = i, k = i + 1;

while (j >= 0 && k < n) {
    
      leftSum += parseInt(arr[j]);
      rightSum += parseInt(arr[k]);
      
      if (leftSum === rightSum) {
            ans = Math.max(ans, k - j + 1);
      }
      
      j--;
      k++;
    }
  }
  console.log(ans);
}

function runProgram(input) {
   input=input.trim().split("\n")
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        let n=input[line++].trim().split(" ").map(Number)
    let arr=input[line++]
    longest(n,arr)
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