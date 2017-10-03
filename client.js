
var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

//YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
var Mockingbird = function(employeeIn) {
  this.name = employeeIn.name;
  this.employeeNumber = employeeIn.employeeNumber;
  this.annualSalary = employeeIn.annualSalary;
  this.reviewRating = employeeIn.reviewRating;

  this.bonusPercentage = function() {
    var bonusPercentage = 0;
    // rating bonus
    var ratingBonus = 0;
    if(this.reviewRating === 3) {
      ratingBonus = 0.04;
    } else if (this.reviewRating === 4 ) {
      ratingBonus = 0.06;
    } else if (this.reviewRating === 5){
      ratingBonus = 0.1;
    }
    else {
      ratingBonus = 0;
    }
    // time bonus
    var timeBonus = 0;
    if(this.employeeNumber.length <= 4) {
      timeBonus = 0.05;
    }
    // salary penalty
    var salaryPenalty = 0;
    if(parseInt(this.annualSalary) > 65000 ) {
      salaryPenalty -= 0.01;
    }

    bonusPercentage = ratingBonus + timeBonus + salaryPenalty;

    if(bonusPercentage > 0.13) {
      bonusPercentage = 0.13;
    } else if(bonusPercentage < 0) {
      bonusPercentage = 0;
    }
    return bonusPercentage;
  };
  this.totalBonus = Math.round(parseInt(this.annualSalary) * this.bonusPercentage());
  this.totalCompensation = this.totalBonus + parseInt(this.annualSalary);
};

var newArray = [];

function upgradeEmployees(arrayOfEmployees) {

  for(var i = 0; i < arrayOfEmployees.length; i++) {
    var oldEmployee = arrayOfEmployees[i];
    var newEmployee = new Mockingbird(oldEmployee);
    delete newEmployee.employeeNumber;
    delete newEmployee.annualSalary;
    delete newEmployee.reviewRating;
    newArray.push(newEmployee);
  }
  return newArray;
}

console.log('calling the function',upgradeEmployees(employees));
console.log('newArray after function is called',newArray);
