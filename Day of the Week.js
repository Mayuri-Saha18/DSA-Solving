
var m = new Map();
var str = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var start = 1;
for (var i = 0; i < str.length; i++) {
    m.set(start, str[i]);
    start++;
}
var k = 0;
for (var [key, value] of m) {
    if (m.get(key) == day) {
        k = (key + N) % 7;
        if (k == 0) {
            k = key + 1;
        }
    }
}
console.log(m.get(k));