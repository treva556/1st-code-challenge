// Beginning of program


// declare variable -marks-
let marks;
//create the grade generator function and use if...else if.        


function studentGradeGenerator(marks){
    if (marks > 79 && marks <= 100){
       return "grade: A"

    }else if(marks > 60 && marks < 79){
       return "grade: B"

    }else if (marks > 50 && marks < 59 ) {
       return "grade: C"

    } else if (marks > 40 && marks < 49) {
        return "grade : D"

     } else if(marks < 48 && marks > 0){
      return "grade: E"
     }
      
}

console.log(studentGradeGenerator(20))





let speed;

function speedDetector(speed){
    let demerit = (speed - 70) / 5;

    if (speed < 70 ){
    return 'OK'
    }
    else if (demerit >= 12 ){
        return "license Suspended"
    }
    else 
    return 'dem:' + demerit

}

console.log(speedDetector(150));



// funtion net salary calculator


  let salary;
  let benefits;
  let NHIF;
  let NSSF;
  let PAYE;
  function individualNetSalary(salary, benefits){
      let gross = salary + benefits;
      let NSSF = gross * 0.06;
      // let netCalculator = gross;
  if (gross <= 24000) {
          PAYE = (gross*0.1)
      }
      else if (gross >= 32333) {
         PAYE = (gross * 0.3)
      }
      else if (gross >= 24001) {
          PAYE = (gross * 0.25)
      }
  //NHIF
          if (gross <= 5999 ){
              NHIF = (150)
            }
          else if (gross > 6000 && gross <= 7999) {
              NHIF = (300)
            }
          else if( gross > 8000 && gross <= 11999){
              NHIF = (400)
            }
          else if ( gross > 12000 && gross <= 14999) {
              NHIF = (500)
             }
          else if (gross > 15000 && gross <= 19999) {
              NHIF = (600) 
            }
          else if(gross > 15000 && gross <= 24999) {
              NHIF =  (750)
            }
          else if( gross > 25000 && gross <= 29999){
              NHIF = (850)
            }
          else if (gross > 30000 && gross <= 34999) {
              NHIF = (900)
             }
          else if (gross > 35000 && gross <= 39999) {
              NHIF = (950) 
            }
          else if (gross > 40000 && gross <= 44999) {
              NHIF =(1000)
             }
          else if (gross > 45000 && gross <= 49999) {
              NHIF = (1100) 
            }
          else if  (gross > 50000 && gross <= 59999){
              NHIF = (1200)
             }
          else if (gross > 60000 && gross <= 69999) {
              NHIF = (1300) 
            }
          else if (gross > 70000 && gross <= 79999) {
              NHIF = (1400)
             }
          else if  (gross > 80000 && gross <= 89999) {
              NHIF = (1500)
             }
          else if (gross > 90000 && grossSalary <= 99999) {
              NHIF = (1600) 
            }
          else if (gross >= 100000) {
              NHIF = (1700)}    
      let netSalary = 'Net Salary:' + (gross - (NHIF + PAYE + NSSF ))
      return netSalary;
  
  }
          console.log(individualNetSalary(5000, 6000));