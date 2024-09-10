function calculateTax(income, expensen){
    if(typeof income !== 'number' || typeof expensen !== 'number' || income < 0 || expensen < 0){
        return 'Invalid Input';
    }

    const totalIncome = income - expensen;
    
    const tax = totalIncome * 20 / 100;
    return tax;
}
const result = calculateTax(10000, 3000);
const result2 = calculateTax(34000, 1753);
const result3 = calculateTax(5000, 1500);
const result4 = calculateTax(7000, 7000);
const result5 = calculateTax(-5000, 2000);
const result6 = calculateTax(6000,-1500);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);