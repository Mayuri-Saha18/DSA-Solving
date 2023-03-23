function trimmed(n,arr){
    arr.sort(function(a,b){
        return a-b
    })
    
    
    arr=arr.slice(n,-n)
    let sum=arr.reduce(function(a,b){
        
        return a+b
    },0)

    let mean=Math.floor(sum/(3*n))
    
    
    console.log(mean)
    
}
function runProgram(input) {
 input=input.trim().split("\n")
 let tc=+input[0]
 let line=1
 for(let i=0;i<tc;i++){
     let n=input[line++].trim().split(" ").map(Number)
     let arr=input[line++].trim().split(" ").map(Number)
     trimmed(n,arr)
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
