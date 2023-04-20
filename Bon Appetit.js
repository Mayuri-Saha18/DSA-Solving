function bon(n,k,arr,b){
    
    let sum=0
    for(let i=0;i<n;i++){
        
        if(i!=k){
            
            
            sum+=arr[i]
        }
    }
    
    let res=Math.floor(sum/2)
    
    if(res<b){
        
        console.log(b-res)
    }
    else{
        
        console.log("Bon Appetit")
    }
    
    
}
function runProgram(input) {
  input=input.trim().split("\n")
  
  let tc=+input[0]
  let line=1
  
  for (let i=0;i<tc;i++){
      let [n,k]=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      let b=input[line++]
      
      bon(n,k,arr,b)
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