function contractor(n,arr,arr1){
    let ans=[];
    ans.push(arr1[0]-arr[0])
    for(let i=1;i<n;i++){
        if(arr[i]<arr1[i-1]){
            ans.push(arr1[i]-arr1[i-1])
        }else{
            ans.push(arr1[i]-arr[i])
        }
    }
    console.log(ans.join(" "))
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let n=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      let arr1=input[line++].trim().split(" ").map(Number)
      contractor(n,arr,arr1)
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