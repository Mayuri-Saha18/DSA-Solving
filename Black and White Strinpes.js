function black(n,k,str){
    let min=Infinity
    for(let i=0;i<=str.length-k;i++){
        let res=str.substr(i,k)
        
        let W=0
        
        for(let i=0;i<res.length;i++){
            if(res[i]=="W"){
                W++
            }
        }
        min=Math.min(W,min)
    }
    console.log(min)
}
function runProgram(input) {
  input=input.split("\n")
  
  let tc=+input[0]
  
  let a=1
  
  while(tc--){
      
      let x=input[a++].split(" ").map(Number)
      
      let str=input[a++]
      
      black(x[0],x[1],str)
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
