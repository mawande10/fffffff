module.exports = function yearsAgo(year){
    //const date = new Date().getFullYear()-year
     return new Date().getFullYear() - year;
  }
  console.log(yearsAgo(1991))
  console.log(yearsAgo(2002))
  console.log(yearsAgo(1976))
  console.log(yearsAgo(1964))
