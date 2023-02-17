function sorting(arr,n){
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1;j++){
            let arr1=Math.abs(arr[j])
            let arr2=Math.abs(arr[j])
            let a=Math.floor(Math.sqrt(arr1))
            let b=Math.floor(Math.sqrt(arr2))
            
            if(a>b){
                let s=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=s
            }
            else if(a==b && arr[j]>arr[j+1]) {
                let s1=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=s1
            }
        }
    }
    console.log(arr.join(" "))
}

function runProgram(input) {
    input=input.trim().split("\n")
let tc=input[0]
let line=1;
for(let i=0;i<tc;i++){
    let n=input[line++].trim().split(" ").map(Number)
    let arr=input[line++].trim().split(" ").map(Number)
    
    sorting(arr,n)
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