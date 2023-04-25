function divisibility(n,m,arr,newArr,index){
    
    if(newArr.length!=0){
        
        let sum=newArr.reduce((acc,el)=>acc+el,0)
        
        if(sum%m==0){
            flag=true
            
            return
        }
    }
    
    if(index==arr.length){
        return
    }
    
    
    for(let i=index;i<n;i++){
        
        newArr.push(arr[i])
        divisibility(n,m,arr,newArr,i+1)
        
        newArr.pop()
        
    }
    
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let [n,m]=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      
      flag=false
      
      divisibility(n,m,arr,[],0)
      
      console.log(flag?"YES":"NO")
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