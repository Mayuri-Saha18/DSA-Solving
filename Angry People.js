
function runProgram(input){
    var input=input.split("\n");
    var n= +input[0];
    var arr=input[1].split(" ").map(Number);
    console.log(solve(n,arr));
    
}
function solve(n,arr){  
    arr.sort(function(a,b){return a-b;});
    var flag=false;
    if(n%2==0){
        flag=true;
        n=n-1;
    }

    var danger=0;
    var left=arr[0];
    var right=arr[0];
    for(var i=1;i<n;i+=2){
        leftDiff=arr[i]-left;
        rightDiff=arr[i+1]-right;
        left=arr[i];
        right=arr[i+1];
        danger=Math.max(danger,leftDiff,rightDiff);
    }
    if(flag){
        rightDiff=arr[n]-right;
        right=arr[n];
        danger=Math.max(danger,rightDiff);
    }
    return Math.max(danger,right-left);
    
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