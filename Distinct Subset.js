function distinct(n,arr){
    let sum=new Set()
    
    for(let i=0;i<(1<<n);i++){
        let s=0
        
        for(let j=0;j<n;j++){
            
            if(i & (1<<j)){
                
                s+=arr[j]
            }
        }
        sum.add(s)
    }
    
    let res=Array.from(sum).sort((a,b)=>a-b)
    
    console.log(res.join(" "))
 }
 function runProgram(input) {
   input=input.trim().split("\n")
   let n=input[0].trim().split(" ").map(Number)
   let arr=input[1].trim().split(" ").map(Number)
   distinct(n,arr)
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