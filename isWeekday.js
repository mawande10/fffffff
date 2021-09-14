module.exports = function isWeekday(weekDay){
    return weekDay.startsWith('M');
  }
  console.log(isWeekday('Monday'));
  console.log(isWeekday('January'));
