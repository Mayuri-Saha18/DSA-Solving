function solving(n,arr){
    
    let stack=[];
    let top=-1;
    let ans= [];
    for(let i=0; i<n;i++){
        while(stack.length!=0 &&arr[i]>=arr[stack[top]] ){
            stack.pop();
            top--;
        }if(stack.length!=0){
            ans.push(stack[top]);
        }else{
            ans.push(-1)
        }
    stack.push(i);
    top++;
    }
    
    
    for(let i=0; i<n;i++){
        if(ans[i]===-1){
            ans[i]= i+1;
        }else{
            ans[i]=Math.abs(i-ans[i])
        }
    }
    console.log(ans.join(" "))
}
function runProgram(input) {
input=input.trim().split("\n")
let tc= +input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n= +input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    solving(n,arr)
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