
function runProgram(input) {
    var str = input.trim();
    var N = input.length;
    solve(str, N);

}
function solve(str, N) {
    var i = 0;
    var bag = "";
    while (i < N) {
        if (str[i] == str[i + 1]) {
            i += 2;
        }
        else {
            bag += str[i];
            i++;
        }
    }
    if (bag.length == 0) {
        console.log("Empty String");
    }
    else {
        console.log(bag);
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