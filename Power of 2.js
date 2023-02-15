
var isPowerOfTwo = function (n) {
    var flag = false;
    for (var i = 0; i < 31; i++) {
        if ((2 ** i) == n) {
            flag = true;
            break;
        }
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }

};