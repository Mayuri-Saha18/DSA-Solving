function judge(n,m,arr){
    let a=new Array(n+1).fill(0)
    
    for(let [i,j] of arr){
        
        a[i]-=1
        a[j]+=1
    }
    
    for(let i=1;i<a.length;i++){
        if(a[i]===(n-1)){
            return i
        }
    }
    return -1
}
function runProgram(input) {
  input=input.trim().split("\n")
  let [n,m]=input.shift().trim().split(" ").map(Number)
  
  let arr=input.map((line)=>line.trim().split(" ").map(Number))
  
  console.log(judge(n,m,arr))
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