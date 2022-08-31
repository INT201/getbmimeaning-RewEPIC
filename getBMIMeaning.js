const { template } = require('@babel/core')

function calculateBMI(weight, height) {
    return weight/(height*height)
}
function getBMIMeaning(weight, height) {
    let bmi = calculateBMI(weight,height)
    //BMI < 18.5 => Underweight
    //BMI 18.5 -> 24.9 => Normal
    //BMI > 25 => Overweight
    return bmi > 25 ? "Overweight" : (bmi < 18.5 ? "Underweight" : "Normal weight")
}
module.exports = getBMIMeaning
