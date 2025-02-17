const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != 'string'){
    return false;
}
if(isNaN(parseFloat(sampleActivity))){
    return false;
}

let sampleActivityNumber = parseFloat(sampleActivity);

if(sampleActivityNumber >= MODERN_ACTIVITY || sampleActivityNumber <= 0){
    return false;
}else{
    let age = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityNumber)/(0.693/HALF_LIFE_PERIOD));
return age;
}
};
