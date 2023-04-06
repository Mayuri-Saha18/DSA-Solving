
function runProgram(input) {
    var input = input.split("\n");
    var N = +input[0];
    var arr = [];
    for (var i = 1; i < input.length; i++) {
        arr.push(input[i].trim());
    }
    solve(N, arr);
}
function solve(N, arr) {
    var X = 0;

    for (var i = 0; i < arr.length; i++) {
        var x = 0;
        var w = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == "C") {
                w++;
                if (x < w) {
                    x = w;
                }
            }
            else {
                x = Math.max(x, w);
                w = 0;
            }
        }
        X = Math.max(X, x);
    }

    var str = "";
    for (var i = 0; i < N; i++) {
        str += arr[i];
    }
    var Y = 0;
    var z = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "C") {
            z++;
        }
        else {
            Y = Math.max(Y, z);
            z = 0;
        }
    }
    console.log(X, Y);
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