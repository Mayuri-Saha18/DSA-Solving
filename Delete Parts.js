function deleteSubstring(str, L, R) {
  
    let arr = str.split('');
    arr.splice(L, R - L + 1);
    let updatedStr = arr.join('');
    return updatedStr;
  }
  
  // Example usage:
  let str = "abcdef";
  let L = 1;
  let R = 3;
  
  let updatedStr = deleteSubstring(str, L, R);
  console.log(updatedStr);//"aef"