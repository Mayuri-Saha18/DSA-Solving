
function runProgram(input) {
    var input = input.split("\n");
    var line = input[0].split(" ").map(Number);
    var N = line[0];
    var K = line[1];
    var arr = input[1].split(" ").map(Number);
    newsort(N, K, arr);


}
function newsort(N, K, arr) {
    for (i = 0; i < N - 1; i++) {
        for (j = 0; j < N - i - 1; j++) {
            if (arr[j] % K > arr[j + 1] % K) {
                swap(arr, j, j + 1);
            }
        }
    }
    var bag = "";
    for (var j = 0; j < N; j++) {
        bag += arr[j] + " ";
    }
    console.log(bag);

}
function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
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