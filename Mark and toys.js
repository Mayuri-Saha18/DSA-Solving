function toys(n,k,arr){
    let count=0;
    let sum=0;
    let i=0;
    while(i<arr.length){
        sum+=arr[i]
        if(sum<k){
            count++
        }
        i++
    }
    console.log(count)
    
}


function runProgram(input) {
    input=input.trim().split("\n")
    let [n,k]=input[0].trim().split(" ").map(Number)
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    toys(n,k,arr)
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