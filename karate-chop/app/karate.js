var karate = (function() {
  'use strict';

  var karate = {
    iterativeChop: function(elem,arr) {
      var minIndex = 0;
      var maxIndex = arr.length -1;
      var pivotIndex;
      var pivotElement;

      while(minIndex<=maxIndex) {
        pivotIndex = (minIndex+maxIndex)/2 | 0;
        pivotElement = arr[pivotIndex];

        if(pivotElement < elem) {
          minIndex = pivotIndex + 1;
        } else if( pivotElement > elem) {
          maxIndex = pivotIndex - 1
        } else {
          return pivotIndex;
        }
      }
      return -1;
    },

    recursiveChop: function(elem,arr) {
      if(arr.length === 0) return -1;
      return karate.doBinarySearch(0,arr.length-1,elem,arr);
    },

    doBinarySearch: function(min,max,elem,arr) {
      var pivotIndex = (min+max)/2 | 0;
      var pivotElement = arr[pivotIndex];

      if(min > max) {return -1;}

      if(pivotElement < elem) {
        return karate.doBinarySearch(pivotIndex+1,max,elem,arr);
      }
      else if(pivotElement > elem) {
        return karate.doBinarySearch(min,pivotIndex-1,elem,arr);
      }
      else {
        return pivotIndex;
      }
    }
  };

  return karate;
}());

module.exports = karate;
