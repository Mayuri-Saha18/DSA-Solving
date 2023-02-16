function self(n,arr){
    let res=[]
    
let k=1;
for(let i=0;i<arr.length;i++){
    res[i]=k
    k=k*arr[i]
    
}
k=1;
for(let i=arr.length-1;i>=0;i--){
    res[i]*=k
    k*=arr[i]
    
}
console.log(res.join(" "))
}

function runProgram(input) {
    input=input.trim().split("\n")
let tc=input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n=input[line++].trim().split(" ").map(Number)
    let arr=input[line++].trim().split(" ").map(Number)
    self(n,arr)
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