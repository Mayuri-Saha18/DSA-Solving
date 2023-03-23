function candies(n,arr){
    let left=0;
    let right=n-1
    
    let akhil=0
    let ankush=0
    
    let count=0
    while(left<=right){
        if(akhil<=ankush){
            
            akhil+=arr[left]
            left++
        }else{
            ankush+=arr[right]
            right--
        }
        
        if(akhil==ankush){
            count=Math.max(count,left+(n-1-right))
        }
    }
    console.log(count)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let n=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      
      candies(n,arr)
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