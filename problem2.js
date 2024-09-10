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
const result = sendNotification("liyan12@gmail.com");
const result2 = sendNotification("farhan34@yohoo.com");
const result3 = sendNotification("nadim.naem5@outlook.com");
const result4 = sendNotification("fahim234.hotmail.com");
const result5 = sendNotification("sadia8icloud.com");
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);