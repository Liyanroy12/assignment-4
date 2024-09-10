function waitingTime (waitingTimes, serialNumber){

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    let totalTime = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        totalTime += waitingTimes[i];
    }
    const averageTime =  Math.round(totalTime / waitingTimes.length);
    const remainingPeple = serialNumber - waitingTimes.length - 1;
    if(remainingPeple < 0){
        return 0;
    }
    else{
        return remainingPeple * averageTime;
    }
}

console.log(waitingTime([3,5,7,11,6],10));
console.log(waitingTime([13,2],10));
console.log(waitingTime([13, 2, 6, 7, 10],6));
console.log(waitingTime([6],4));
console.log(waitingTime(7, 6));
console.log(waitingTime("[6,2]",9));
console.log(waitingTime([3,5,7,11,6],"9"));