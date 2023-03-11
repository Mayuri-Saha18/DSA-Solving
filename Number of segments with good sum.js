function segments(n,k,arr){
    let r=0
    let l=0
    let c=0
    let s=arr[0]
    
    while(l<n && r<n){
        if(s<=k){
            r++
            if(r>=l){
                c+=r-l
            }
            if(r<n){
                s+=arr[r]
            }
        }
        else{
            s-=arr[l]
            l++
        }
    }
    console.log(c)
}
function runProgram(input) {
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1;
  for(let i=0;i<tc;i++){
      let [n,k]=input[line++].trim().split(" ").map(Number)
      let arr=input[line++].trim().split(" ").map(Number)
      segments(n,k,arr)
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