function calculateTax(income, expenses){
    if(typeof income !== 'number' || typeof expenses !== 'number' || income < 0 || expenses < 0){
        return 'Invalid Input';
    }

    const totalIncome = income - expenses;
    
    const tax = totalIncome * 20 / 100;
    return tax;
}


function sendNotification(email){
    if(email.indexOf("@") === -1 || email.indexOf("@") !== email.lastIndexOf("@")){
        return 'Invalid Email';
    }
    const twoPart = email.split('@');
    if(twoPart.length !== 2 || twoPart[0] === "" || twoPart[1] === ""){
        return 'Invalid Email';
    }
    const username = twoPart[0];
    const domain = twoPart[1];

    return username + " " + "send you an email from" + " " + domain;
}


function checkDigitsInName(name){

    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    for(let i = 0; i < name.length; i++){
        if (!isNaN(name[i]) && name[i] !== ' '){
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)){
        return 'Invalid Input';
    }

    if (!('name' in obj) || !('testScore' in obj) || !('schoolGrade' in obj) || !('isFFamily' in obj)){
        return "Invalid Input";
    }

    if (typeof obj.name !== 'string' || typeof obj.testScore !== 'number' || typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !== 'boolean' || obj.testScore < 0 || obj.testScore > 50 || obj.schoolGrade < 0 || obj.schoolGrade > 30){
        return 'Invalid Input';
    }


    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        finalScore += 20;
    }
    return finalScore >= 80;
}

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

