
function runProgram(input){
    var input=input.split("\n");
    var tc= +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var str=input[line].trim();
        line++;
        solve(str);
    }
    
}
function solve(str){
  
  var map=new Map();
  var q=[str[0]];
  map.set(str[0],1);
  var ans=str[0];
  for(var i=1;i<str.length;i++){
      if(map.has(str[i])){
          map.set(str[i],map.get(str[i])+1);
      }
      else{
          map.set(str[i],1);
          q.push(str[i]);
      }
      if(q.length==0){
          ans+="#"
      }
      else{
          var flag=false;
          while(q.length!=0){
              if(map.get(q[0])!=1){
                  q.shift();
              }
              else{
                  ans+=q[0];
                  flag=true;
                  break;
              }
          }
          if(!flag){
              ans+="#";
          }
      }
  }
  
  console.log(ans);
  
  
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