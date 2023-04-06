function signal(n,mat){
    let row=0
    
    let col=mat.length-1
    
    let arr1=[]
    let A=[]
    
    let flag1=false
    let flag2=false
    
    for(let i=row,j=col;i<mat.length && j>=0;i++,j--){
        arr1.push(mat[i][j])
    }
    for(let i=row,j=0;i<mat.length && j<mat.length;i++,j++){
        arr1.push(mat[i][j])
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===0 || j===0 || i===n-1 || j===n-1){
                 if(i===0 && j===0 || i===n-1 && j===n-1 || i===0 && j==n-1 || i===n-1 && j===0){
                     continue;
                     
            }else{
                A.push(mat[i][j])
            }
        }
        }
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]===0){
            flag1=false
            break
        }else{
            flag1=true
        }
    }
    for(let i=0;i<A.length;i++){
        if(A[i]!==0){
            flag2=false
            break
        }else{
            flag2=true
        }
    }
    
    if(flag1===true && flag2===true){
        console.log("True")
    }else{
        console.log("False")
    }
}
function runProgram(input) {
 input=input.trim().split("\n")
 let tc=+input[0]
 let line=1
 for(let i=0;i<tc;i++){
     let n=input[line++]
     let mat=[]
     for(let i=0;i<n;i++){
         mat.push(input[line++].trim().split(" ").map(Number))
         
     }
     signal(n,mat)
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