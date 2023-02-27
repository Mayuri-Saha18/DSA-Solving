function runProgram(input) {

    var input=input.split("\n");
     
     var N=Number(input[0]);
    var arr=input[1].split(" ").map(Number);
        solve(N, arr);
    }
    function solve(N,arr){
    
        arr.sort(function (a, b){
            return a - b;
        }
        );
    var ans = 0;
            for (var k = 0; k < 2 * N; k += 2) {
                ans += arr[k];
            }
        
        console.log(ans);
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