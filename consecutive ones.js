function consecutive(n,m,arr){
    let max=0
 
 for(let i=0;i<n-m+1;i++){
       let count=m
       l=i-1
       r=i+m
       while(l>=0 && arr[l]==1){
           count++
           l--
       }
       while(l<n && arr[r]==1){
           r++
           count++
       }
       if(count>max){
           max=count
       }
   }
   console.log(max)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1;
  for(let i=0;i<tc;i++){
      let [n,m]=input[line++].trim().split(" ").map(Number)
      let arr=input[line++]
      consecutive(n,m,arr)
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