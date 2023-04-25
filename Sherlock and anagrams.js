function anagram(str1,str2){
    
    let s=[]
    
    let c=0
    
    for(let i=0;i<str1.length;i++){
        
        for(let j=i+1;j<str1.length+1;j++){
            
            s.push(str1.slice(i,j).split("").sort().join(""))
            
            
        }
        
    }
    for(let i=0;i<s.length;i++){
        
        for(let j=i+1;j<s.length;j++){
            
           if(s[i]===s[j]){
               c++
           }
            
            
        }
        
    }
    console.log(c)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let str1=input[line++]
     
      
      anagram(str1)
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