function consecutive(n,arr){
    
    if(arr.length==0) return 0;
    
    let count=1
    
    let max=1
    
    arr.sort((a,b)=>a-b)
    
    for(let i=0;i<arr.length;i++){
        
        if(arr[i]-arr[i-1]==1){
            
            
            count=count+1
            max=Math.max(max,count)
            
            
        }
        else if(arr[i]==arr[i-1]){
            continue
        }
        
        else{
            
            count=1
        }
    }
    
    console.log(max)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let n=input[line++]
      let arr=input[line++].trim().split(" ").map(Number)
      consecutive(n,arr)
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