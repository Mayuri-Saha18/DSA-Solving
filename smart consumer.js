function smart(n,k,m,arr){
    let sum=0
    let count=0
    for(let i=0;i<n;i++){
        sum+=arr[i]
        if(arr[i]>m){
            count+=arr[i]-m
        }else{
            count+=0
        }
    }
    let res=count+k
    if(res<sum){
        console.log("YES")
    }else{
        console.log("NO")
    }
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let [n,k,m]=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      smart(n,k,m,arr)
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
