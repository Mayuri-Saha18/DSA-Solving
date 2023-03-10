function missing(arr){
    let temp=[]
    for(let i=0;i<=arr.length;i++){
        temp[i]=0
    }
    for(let i=0;i<arr.length;i++){
        temp[arr[i]-1]=1
    }
    let ans=0
    for(let i=0;i<=arr.length;i++){
        if(temp[i]==0){
            ans=i+1
        }
    }
    console.log(ans)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let arr=input[0].trim().split(" ").map(Number)
  missing(arr)
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