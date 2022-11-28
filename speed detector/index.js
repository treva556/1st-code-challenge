





let speed;
        
function speedDetector(speed){
    let demerit = (speed - 70) / 5;
   
    if (speed < 70 ){
    return 'ok'
    }
    else if (demerit >= 12 ){
        return "license suspended"
    }
    else 
    return 'demerit:' + demerit

}






