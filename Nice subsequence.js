function niceSubsequence(arr, n) {
    //   return(n,arr.length)
    if (n === 0) {
      return 0;
    }
    let dp = new Array(arr.length).fill(1);
    for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
          dp[i] = Math.max(dp[i], 1 + dp[j]);
        }
      }
    }
    return Math.max(...dp);
  }
  
  //Driver Code
  n = 6;
  
  s = [2, 1, 4, 10, 7, 7];
  // var n = readline();
  // var temp = readline().trim();
  // var s = temp.split(" ");
  // for(i=0;i<n;i++)
  // {
  //     s[i]=Number(s[i]);
  // }
  var num = niceSubsequence(s, n);
  console.log(num);