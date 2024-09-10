function calculateFinalScore(obj) {
    // Check if input is not an object or is null
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return "Invalid Input";
    }

    // Ensure required properties exist in the object
    if (!('name' in obj) || !('testScore' in obj) || !('schoolGrade' in obj) || !('isFFamily' in obj)) {
        return "Invalid Input";
    }

    // Validate types and ranges
    if (typeof obj.name !== 'string' || 
        typeof obj.testScore !== 'number' || obj.testScore < 0 || obj.testScore > 50 ||
        typeof obj.schoolGrade !== 'number' || obj.schoolGrade < 0 || obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    // Base score calculation
    let finalScore = obj.testScore + obj.schoolGrade;

    // Check if parent profession is "farmer"
    if (obj.isFFamily) {
        finalScore += 20;
    }

    // Determine if the final score is 80 or more
    return finalScore >= 80;
}

// Sample Inputs and Outputs
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true })); // true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
console.log(calculateFinalScore("hello")); // "Invalid Input"
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); // false
