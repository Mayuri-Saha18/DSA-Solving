
var longest= function (strs) {
    var bag = "";
    for (var i = 0; i < strs[0].length; i++) {
        var word = strs[0][i];
        var flag = true;
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] != word) {
                flag = false;
                break;
            }
        }
        if (flag) {
            bag += word;
        }
        else {
            break;
        }
    }
    return bag;
};

function runProgram(input) {
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let n=input[line++]
      let strs = [];
      for (let j = 0; j < n; j++) {
        strs.push(input[line++].trim());
      }
      console.log(longest(strs));
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