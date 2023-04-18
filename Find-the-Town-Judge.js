function town(n,m,mat){
    
    let a=mat[0][1]
    
    let c=0
    
    for(let i=0;i<m;i++){
        if(a!=mat[i][1]){
            c++
        }
        
        
        if(c>0){
            return console.log(-1)
        }
    }
    
    return console.log(a)
}
function runProgram(input) {
 input=input.trim().split("\n")
 let [n,m]=input[0].trim().split(" ").map(Number)
 let line=1
 
 let mat=[]
 
 for(let i=0;i<m;i++){
     let arr=input[line++].trim().split(" ").map(Number)
     mat.push(arr)
 }
 
 
 
 town(n,m,mat)
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
