function runProgram(input) {
    Input=input.trim()
        let str = ""
    for (let i = 0; i < Input.length; i++) {
        if (Input[i] == "(") {
            str += Input[i]
        }
        if (Input[i] == "[") {
            str += Input[i]
        }
        if (Input[i] == "{") {
            str += Input[i]
        }
        if (Input[i] == ")") {
            str += Input[i]
        }
        if (Input[i] == "]") {
            str += Input[i]
        }
        if (Input[i] == "}") {
            str += Input[i]
        }
    }
    // console.log(str.length)
    // console.log(str)
    isBalanced(str)


    function isBalanced(str1) {
        const stack = [];
        var obj = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
         for (var i = 0; i < str1.length; i++) {
        //   console.log(str1[i]);
        //   console.log(stack.length - 1);
        //   console.log(obj[stack[stack.length - 1]]);
            if (stack.length > 0 && obj[stack[stack.length - 1]] === str1[i]) {
                stack.pop();
            } else {
                stack.push(str1[i]);
            }
        }

        if (stack.length === 0) {
            console.log("balanced");
        } else {
            console.log("unbalanced");
        }
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