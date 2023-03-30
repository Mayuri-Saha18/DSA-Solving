function ordering(n,arr1,arr2){
    
    let i=0;
    let count=0
    
    while(arr1.length!==i){
        
        if(arr1[i]===arr2[i]){
            
            arr1.shift()
            
            arr2.shift()
            
            count++
        }
        
        else{
            
            arr1.push(arr1.shift())
            
            count++
        }
    }
    console.log(count)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let n=+input[0]
  let arr1=input[1].trim().split(" ").map(Number)
  let arr2=input[2].trim().split(" ").map(Number)
  
  ordering(n,arr1,arr2)
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