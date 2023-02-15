function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tests=+input[0];
    let line =1;
    for(let i=0; i<tests; i++){
let N =+input[line++];
let arr=input[line++].trim().split(" ").map(Number)
let K =+input[line++];
pairLessThanK(arr,N,K);
    }
   
  }
  function pairLessThanK(arr,N,K){
    arr.sort((a,b)=>a-b);
    let i =0;
    let j =N-1;
    let max=-Infinity;
    while(i<j){
      let sum =arr[i]+arr[j];
      if(sum>=K){
j--;
      }else{
        if(max<sum){
          max=sum;
        }
        i++;
      }
    }
if(max===-Infinity){
  console.log(-1)
}else{
  console.log(max)
}
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15`);
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
      process.exit(0) ;
    });
  }