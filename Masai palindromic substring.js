function masaiPalSubString(S){
    let ans=0;
    for(let i=0;i<S.length;i++)   {
        let bag=""
        
        
        for(let j=i;j<S.length;j++){
            bag+=S[j]
            
            let check=checkPallindrome(bag)
            
            if(check){
                
                if(ans<bag.length){
                    
                    ans=bag.length
                }
            }
        }
    }
    console.log(ans)
   }
    function checkPallindrome(Str){
        let rev=""
        
        for(let i=Str.length-1;i>=0;i--){
            rev=rev+=Str[i]
        }
        
        if(rev==Str){
            
            return true
        }
        
        else{
            return false
        }
    }
    
   