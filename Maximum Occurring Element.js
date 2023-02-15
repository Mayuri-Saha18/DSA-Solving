
var obj = {};
for (var i = 0; i < N; i++) {
    if (obj[A[i]] == undefined) {
        obj[A[i]] = 1;
    }
    else {
        obj[A[i]] = obj[A[i]] + 1;
    }
}
var max = 0;
var print;
for (var key in obj) {
    if (obj[key] > max) {
        max = obj[key];
        print = key;
    }
}
console.log(print);