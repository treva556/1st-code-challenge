// Beginning of program


// declare variable -marks-
let marks ;
//create the grade generator function and use if...else if.        


function studentGradeGenerator(marks){
    if (marks > 79 && marks <= 100){
        return 'Grade: A'

    }else if(marks > 60 && marks < 79){
        return 'Grade: B'

    } else if (marks > 50 && marks < 59 ) {
        return 'Grade: C'
    } 
        else if (marks > 40 && marks < 49) {
         return 'Grade : D' 
        
     }else if(marks < 48 && marks > 0){
        return 'Grade: E'
     }
}

console.log(studentGradeGenerator(55))





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

console.log(speedDetector(90));





// funtion net salary calculator
function individualNetSalary() {
let nhif;
let grossPay;
let paye;
let nssf;
let personalRelief = 2400;
let insuranceRelief;
let netSalary;
let pensionablePay;
let basicSalary  
let benefits
//percentagetax;
  if (basicSalary < 24000) {// calculates the paye one should pay;
    paye = 2400;
  } else if (basicSalary >= 24001 && basicSalary <= 32333) {
    paye = Math.round(24000 * 0.1 + (basicSalary - 24001) * 0.25);
  } else if (basicSalary > 32333) {
    paye = Math.round(24000 * 0.1 + 8332 * 0.25 + (basicSalary - 32333) * 0.3);
  }
//NHIF;
  grossPay = +basicSalary + +benefits;
  if (grossPay >= 1 && grossPay <= 5999) {// calculates the amount of nhif to be deducted
    nhif = 150;
  } else if (grossPay >= 6000 && grossPay <= 7999) {//if grossPay is 6000- 7999, nhif = 300;
    nhif = 300;
  } else if (grossPay >= 8000 && grossPay <= 11999) {//if grossPay is 8000- 11999, nhif = 400;
    nhif = 400;
  } else if (grossPay >= 12000 && grossPay <= 14999) {//if grossPay is 12000- 14999, nhif = 500;
    nhif = 500;
  } else if (grossPay >= 15000 && grossPay <= 19999) {//if grossPay is 15000- 19999, nhif = 600;
    nhif = 600;
  } else if (grossPay >= 20000 && grossPay <= 24999) {//if grossPay is 20000- 24999, nhif = 750;
    nhif = 750;
  } else if (grossPay >= 25000 && grossPay <= 29999) {//if grossPay is 25000- 29999, nhif = 850;
    nhif = 850;
  } else if (grossPay >= 30000 && grossPay <= 34999) {//if grossPay is 30000- 34999, nhif = 900;
    nhif = 900;
  } else if (grossPay >= 35000 && grossPay <= 39999) {//if grossPay is 35000- 39999, nhif = 950;
    nhif = 950;
  } else if (grossPay >= 40000 && grossPay <= 44999) {//if grossPay is 40000- 44999, nhif = 1000;
    nhif = 1000;
  } else if (grossPay >= 45000 && grossPay <= 49999) {//if grossPay is 45000- 49999, nhif = 1100;
    nhif = 1100;
  } else if (grossPay >= 50000 && grossPay <= 59999) {//if grossPay is 50000- 59999, nhif = 1200;
    nhif = 1200;
  } else if (grossPay >= 60000 && grossPay <= 69999) {//if grossPay is 60000- 69999, nhif = 1300;
    nhif = 1300;
  } else if (grossPay >= 70000 && grossPay <= 79999) {//if grossPay is 70000- 79999, nhif = 1400;
    nhif = 1400;
  } else if (grossPay >= 80000 && grossPay <= 89999) {//if grossPay is 80000- 89999, nhif = 1500;
    nhif = 1500;
  } else if (grossPay >= 90000 && grossPay <= 99999) {//if grossPay is 90000- 99999, nhif = 1600;
    nhif = 1600;
  } else if (grossPay >= 100000) {//if grossPay is more than 100000, nhif = 1700;
    nhif = 1700;
  }
//netsalary;
//netSalary = basic salary -(NHIF + NSSF + PAYE)
//nssf
if (basicSalary < 18000) {//if basic Salary is less than 18000 ,pensionablePay = basic salary;
  pensionablePay = basicSalary;
} else if (basicSalary > 18000) {//if basic Salary is greater than 18000 ,pensionablePay = 18000;
  pensionablePay = 18000;
}
nssf = Math.round(0.06 * pensionablePay);//rounds value to the nearest interger;
//insuranceRelief
insuranceRelief =Math.round(0.15 * nhif);//rounds value to the nearest interger;

let totalPaye = paye - personalRelief;//paye less personal relief;
let totalNhif = nhif - insuranceRelief;//nhif less insurance relief;

//netsalary;
netSalary = basicSalary - (totalNhif + totalPaye);

}

console.log(individualNetSalary(6000))






