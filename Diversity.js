function diversity(n,m,arr){
    arr.sort((a,b)=>a-b)
    let count=0;
    let j=0;
    for(let i=0;i<n;i++){
        while(arr[i]-arr[j]>m){
            j++
        }
        count=Math.max(count,i-j+1)
    }
    console.log(count)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1;
  for(let i=0;i<tc;i++){
      let [n,m]=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      diversity(n,m,arr)
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