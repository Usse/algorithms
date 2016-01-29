public class KarateChop {

  static int iterativeChop(int elem , int[] arr) {
    int maxIndex = arr.length;
    int minIndex = 0;

    if(maxIndex == 0) { return -1; }

    while(minIndex < maxIndex) {
      int pivot = (maxIndex + minIndex) / 2;
      if(elem < arr[pivot]) {
        maxIndex = pivot -1;
      }else if(elem > arr[pivot]) {
        minIndex = pivot +1;
      } else {
        return pivot;
      }
    }
    return -1;
  }


  static int recursiveChop(int elem, int[] arr) {
    if(arr.length < 0 ) {return -1;}
    return recursiveInner(elem, arr, 0, arr.length-1);
  }

  static int recursiveInner(int elem, int[] arr, int minIndex, int maxIndex) {
    if(minIndex > maxIndex) { return -1; }

    int pivot = (minIndex + maxIndex) /2;
    if(arr[pivot] > elem) {
      return recursiveInner(elem, arr, minIndex, pivot-1);
    } else if(arr[pivot] < elem) {
      return recursiveInner(elem, arr, pivot+1, maxIndex);
    } else {
      return pivot;
    }
    // return -1;
  }



  public static void main(String[] args) {
    System.out.println("KarateChop!");
  }
}
