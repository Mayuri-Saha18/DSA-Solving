
var count = 0;
for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
        var a = +(arr[i][j]);
        var flag = 0;
        for (var k = 1; k <= a; k++) {
            if (a % k == 0) {
                flag++;
            }
        }
        if (flag == 2) {
            count++;
        }
    }
}
console.log(count);