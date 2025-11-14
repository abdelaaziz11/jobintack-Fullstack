let minIncomeForDuplex = 60000;
let minCreditScoreForDuplex = 700;
let minIncomeForCondo = 45000;
let minCreditScoreForCondo = 680;
let minIncomeForCar = 30000;
let minCreditScoreForCar = 650;

let userIncome = 50000;
let userCreditScore = 690;

if (userIncome >= minCreditScoreForCar && userCreditScore >= minCreditScoreForCar) {
    console.log("Eligible for loan car");
}
else{
    console.log("not Eligible for loancar")
}

if (userIncome >= minCreditScoreForDuplex && userCreditScore >= minCreditScoreForDuplex) {
    console.log("Eligible for loan duplex");
}
else{
    console.log("not Eligible for loan duplex")
}

if (userIncome >= minCreditScoreForCondo && userCreditScore >= minCreditScoreForCondo) {
    console.log("Eligible for loan condo");
}
else{
    console.log("not Eligible for loan condo")
}


console.log("Function task ====")


const getLoanMessage = (annualIncome, creditScore) => {
    if (annualIncome >= minCreditScoreForCar && creditScore >= minCreditScoreForCar) {
    console.log("Eligible for loan car");
}

if (annualIncome >= minCreditScoreForDuplex && creditScore >= minCreditScoreForDuplex) {
    console.log("Eligible for loan duplex");
}


if (annualIncome >= minCreditScoreForCondo && creditScore >= minCreditScoreForCondo) {
    console.log("Eligible for loan condo");
}
}

getLoanMessage(47000, 680);