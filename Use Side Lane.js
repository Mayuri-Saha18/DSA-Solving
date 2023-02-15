
function runProgram(input) {
    var input = input.split("\n");
    //input.pop();
    //console.log(input)
    for (var i = 0; i < input.length - 1; i += 2) {
        var N = +input[i];

        var arr = input[i + 1].split(" ").map(Number);

        solve(N, arr);
    }


}
function solve(N, arr) {
    var stack = [];
    var x = 1;
    var flag = true;
    for (var i = 0; i < N; i++) {
        if (arr[i] == x) {
            x++;
            var j = 0;
            while (j < stack.length) {
                if (stack[stack.length - 1] == x) {
                    x++;
                    stack.pop();
                }
                else {
                    break;
                }
            }

        }

        else if (stack[stack.length - 1] == x) {
            stack.pop();
            x++;
        }
        else if (arr[i] > stack[stack.length - 1]) {
            flag = false;
        }
        else {
            stack.push(arr[i]);
        }
    }
    if (flag) {
        console.log("yes");
    }
    else {
        console.log("no");
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