var emp = {
  name: "Rajesh",
  address : {
         locality : {
               street : "2nd main domlur"
          }
    }
}

var getValueOfObj = function(obj, path){
    var path = path.split('.');
    var len = path.length;
    for (var i=0; i<len; i++){
        obj = obj[path[i]];
    };
    if (obj == undefined){
    	return null;
    }
    else
    	return obj;
};

console.log(getValueOfObj(emp, 'address.locality.street'));
