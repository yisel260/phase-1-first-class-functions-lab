// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    const newDrivers= drivers.slice(0,2);
    return newDrivers
}
const returnLastTwoDrivers = function (drivers){
    const newDrivers2 =drivers.slice (2,4);
    return newDrivers2
}
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
      return fare * multiplier;
    };
  }

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, selection ){
        if (selection === returnFirstTwoDrivers) {
            return returnFirstTwoDrivers(arrayOfDrivers);
          } 
          
          else if (selection === returnLastTwoDrivers) {
            return returnLastTwoDrivers(arrayOfDrivers);
          }
        
    }
