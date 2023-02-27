function check(str){
    let obj={};
    for(let i=0;i<str.length;i++){
    let c=str[i];
    if(obj[c]==undefined){
     obj[c]=1;
    }else{
    return false;
    }
        
    }
         return true;
    }
    function rept(str,k){
    let count=0;
    let n=str.length
    let arr=[]
    for(let i=0;i<n;i++){
             let temp=[];
             for(let j=i;j<n;j++){
                 temp.push(str[j]);
              if(temp.length==k){
                  let ans=check(temp);
                  if(ans){
                  arr.push(temp.sort().join(""))
            }
        }
    }
    }
    console.log(arr.length)
     }
    function runProgram(input){
        input = input.trim().split("\n")
        let tc = +(input[0])
        let line = 1
        for(let i =0; i<tc; i++){
            let str =input[line++].trim().split("")
            let k =+(input[line++])
            rept(str,k)
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