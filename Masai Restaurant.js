
function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var arr = [];
    for (var i = 1; i <= n; i++) {
        var line = input[i].split(" ").map(Number);
        if (line[0] == 1) {
            if (top == -1) {
                console.log("No Food");
            }
            else {
                console.log(pop(arr));
            }
        }
        if (line[0] == 2) {
            push(arr, line[1]);
        }
    }

}
var top = -1;
function push(array, data) {
    top++;
    array[top] = data;
}

function pop(array) {
    ans = array[top];
    top--;
    return ans;
}
function peek(array) {
    return array[top];
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