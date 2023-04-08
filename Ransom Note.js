function ransom(n,m,arr1,arr2){
    let obj1={}
    
    for(let i=0;i<n;i++){
        let a=arr1[i]
        if(obj1[a]===undefined){
            obj1[a]=1
        }else{
            
            obj1[a]++
        }
    }
    
    let flag=true
    
    for(let j=0;j<m;j++){
        
        let b=arr2[j]
        if(obj1[b]===undefined){
            flag=false
        }
    }
    
    if(flag===true){
        
        console.log("Yes")
        
    }else{
        console.log("No")
    }
    
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
       let [n,m]=input[line++].trim().split(" ").map(Number)
       let arr1=input[line++].trim().split(" ")
       let arr2=input[line++].trim().split(" ")
       
       ransom(n,m,arr1,arr2)
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
