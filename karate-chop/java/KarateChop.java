public class KarateChop {

  // public KarateChop() {}

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

  public static void main(String[] args) {
    System.out.println("KarateChop!");
  }
}
