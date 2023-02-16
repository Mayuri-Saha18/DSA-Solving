
var longestCommonPrefix = function (strs) {
    var bag = "";
    for (var i = 0; i < strs[0].length; i++) {
        var word = strs[0][i];
        var flag = true;
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] != word) {
                flag = false;
                break;
            }
        }
        if (flag) {
            bag += word;
        }
        else {
            break;
        }
    }
    return bag;
};