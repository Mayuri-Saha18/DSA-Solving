function subStrUnderCond(s){
    let count=0;
    for(let i=0;i<=s.length-1;i++){
        for(let j=s.length-1;j>=i;j--){
            if(s[i]==s[j]){
                count++;
            }
        }
    }
    console.log(count);
    }