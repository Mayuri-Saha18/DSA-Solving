
function runProgram(input){
    var input=input.split("\n");
    var size=input[0].split(" ").map(Number);
    var N=size[0];
    var X=size[1];
    var arr=input[1].split(" ").map(Number);
    solve(N,X,arr);
    
}

function solve(N,X,arr){
    var ans=0;
    var count=0;
    var un=0;
    for(var i=0;i<N;i++){
        if(arr[i]<=X){
            count++;
        }
        else{
            un++;
            
            if(un<2){
                ans=Math.max(ans,count);
            }
            else{
                
                if(un>1){
                    break;
                }
                count=0;
            }
        }
        ans=Math.max(ans,count);
    }
    console.log(ans);
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