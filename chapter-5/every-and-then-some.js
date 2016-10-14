function every(array, func){
  for (var n=0; n<array.length; n++){
    if (!(func(array[n]))) {
      return false;
    }
  }
  return true;
}

function some(array, func){
  for (var n=0; n<array.length; n++){
    if (func(array[n])) {
      return true;
    }
  }
  return false;
}
