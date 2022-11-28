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

console.log(studentGradeGenerator())