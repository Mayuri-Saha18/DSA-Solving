function traverse(N,M,arr){
    let left=0;
   let right=N-1;
 let flag=false;
   
 while(left<right){
     
        let sum=arr[left]+arr[right]
        if(sum==M){
            
            flag=true;
            break;
    
        }else if(sum<M)
        {
            left++;
        }
        
        else{
          right--;
        }
    }
    if (flag==true){
        
        console.log(left,right)
    }
    else{
  console.log(-1,-1)
  }
}
function runProgram(input) {
  input=input.trim().split("\n")
    let tc=+(input[0])
    let line=1;
for(let i=0;i<tc;i++){
let [N,M]=input[line].trim().split(" ").map(Number);
        line++;
 let arr=input[line].trim().split(" ").map(Number)
        line++
    traverse(N,M,arr)
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