function convert(a,b,x,y){
    if(a===b){
        console.log(0)
        return
    }
    
    if(a>b){
        console.log(-1)
        return
    }
    
    let q=[a]
    let v=new Set([a])
    let count=0
    
    while(q.length>0){
        
        count++
        let n=q.length
        
        for(let i=0;i<n;i++){
            
            
            let A=q.shift()
            let next=[A*x,A*y]
            
            for(let key of next){
                
                if(key==b){
                    console.log(count)
                    return
                }
                
                if(key<=b && !v.has(next)){
                    q.push(key)
                    v.add(key)
                } 
            }
        }
    }
    
    console.log(-1)
    return
 }
 function runProgram(input) {
   let Input=input.trim().split(" ").map(Number)
   
   let a=Input[0]
   let b=Input[1]
   let x=Input[2]
   let y=Input[3]
   convert(a,b,x,y)
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