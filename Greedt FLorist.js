function greedy(n,m,arr){
    arr.sort((x,y)=>x-y)
    
    let total=0

    for(let i=0;i<arr.length;i++){
        
        total+=arr[arr.length-1-i]*(Math.floor(i/m)+1)
        
    }
    
    console.log(total)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let [n,m]=input[0].trim().split(" ").map(Number)
  let arr=input[1].trim().split(" ").map(Number)
  
  greedy(n,m,arr)
  
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