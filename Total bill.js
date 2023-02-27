function totalBill(N) {
    // console.log👎
    let a=0;
    let b=0;
    let c=0;
    let bill=0;
    for(let i=0;i<N;i++){
        if(i<50){
            a++
        }
        if(i>=50 && i<150){
            b++
        }if(i==150){
            c++
        }if(i>=151){
            c++
        }
    }
    console.log(a*3+b*5+c*10+80)
    
}