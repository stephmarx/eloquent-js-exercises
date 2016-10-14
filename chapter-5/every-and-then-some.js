function every(array, func){
  var toReturn = true;
  array.forEach(function(n){
    if (func(n) == false){
      toReturn = false; 
      return;
    }
  })
                
  return toReturn;
}

function some(array, func){
  var toReturn = false;
  array.forEach(function(n){
    if (func(n) == true){
      toReturn = true;
      return;
    }
  })
  
  return toReturn;
}
