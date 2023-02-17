function cars(n,arr){
    let stack=[];
    let cars=1;
    let ans=[];
    for(let i=0;i<n;i++){
        if(arr[i]==cars){
            ans.push(arr[i])
            cars++;
            while(stack[stack.length-1]==cars){
                ans.push(stack.pop())
                cars++
            }
        }
        else{
            stack.push(arr[i])
        }
    }
    if(ans.length===arr.length && stack[stack.length-1]===undefined){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
}


function runProgram(input) {
    input=input.trim().split("\n")
let tc=input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n=input[line++].trim().split(" ").map(Number)
    let arr=input[line++].trim().split(" ").map(Number)
    cars(n,arr)
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
  })
}