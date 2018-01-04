var emp = {
  name: "Rajesh",
  address : {
         locality : {
               street : "2nd main domlur"
          }
    }
}

var getValueOfObj = function(obj, path){
    for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
    };
    if (obj == undefined){
    	return null;
    }
    else
    	return obj;
};

console.log(getValueOfObj(emp, 'address.locality.street'));