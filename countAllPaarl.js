module.exports = function countAllPaarl(string){
    var lst = string.split(",");
    var townList = [];
    var count =0;
    for(var i=0;i<lst.length;i++){
      if(lst[i].includes("CJ")===true){
        count++;townList.push(lst[i].trim());
      }
    }
    return count;
  }
