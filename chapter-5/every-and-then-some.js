// Not a big fan of this solution, as there's no way to break a forEach loop in Javascript. This doesn't break as soon as it finds an exception.

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
