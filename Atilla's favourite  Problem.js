function alphabt(n,arr){
    
    let obj={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
    
    
    let m=0
    
    for(let i=0;i<n;i++){
        
        let x=arr[i]
        
        if(x in obj){
            
            m=Math.max(m,obj[x])
        }
    }
    
    console.log(m)
}
function runProgram(input) {
  
  input=input.trim().split("\n")
  
  let tc=+input[0]
  
  let line=1
  
  for(let i=0;i<tc;i++){
      
      let n=input[line++]
      let arr=input[line++].trim().split("")
      
      
      alphabt(n,arr)
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