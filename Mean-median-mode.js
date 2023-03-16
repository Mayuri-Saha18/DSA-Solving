function meann(n,arr){
    let sum=0
    let mode=0
    let mean=0
    let median=0
    let obj={}
    for(let i=0;i<n;i++){
        sum+=arr[i]
        let bag=arr[i]
        if(obj[bag]===undefined){
            obj[bag]=1
        }else{
            obj[bag]++
        }
    }
    mean=Math.floor(sum/n)
    arr.sort((a,b)=>{
        if(a>b) return 1
        if(a<b) return -1
    })
    let l=Math.floor(n/2)
    if(n%2===0){
        median=Math.floor((arr[l-1]+arr[l])/2)
    }else{
        median=arr[l]
    }
    let max=-Infinity
    let c=0
    for(let key in obj){
        if(obj[key]>max){
            max=obj[key]
            c=key
        }
    }
    mode=c
    console.log(mean,median,mode)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1
  for(let i=0;i<tc;i++){
      let n=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      meann(n,arr)
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