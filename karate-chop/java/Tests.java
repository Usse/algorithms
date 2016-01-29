import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class Tests {

  public static KarateChop KC = new KarateChop();

  // Iterative
  @Test
  public void iTestEmptyArray() {
    int[] emptyArray = {};
    assertEquals(-1,KC.iterativeChop(4,emptyArray));
  }

  @Test
  public void iTestSingleElement() {
    int[] singleItemArray = {1};
    assertEquals(0,KC.iterativeChop(1,singleItemArray));
  }

  @Test
  public void iTestSmokeCase() {
    int[] normalArray = {1,2,3,4,5,6,7,8,9};
    assertEquals(2,KC.iterativeChop(3,normalArray));
  }

  @Test
  public void iTestBigNumber() {
    int[] normalArray = {1,2,3,4,5,6,7,8,9};
    assertEquals(-1,KC.iterativeChop(55,normalArray));
  }

  @Test
  public void iTestMissingNumber() {
    int[] normalArray = {1,2,3,4,6,7,8,9};
    assertEquals(-1,KC.iterativeChop(5,normalArray));
  }

  @Test
  public void iTestNegativeNumber() {
    int[] normalArray = {1,2,3,4,5,6,7,8,9};
    assertEquals(-1,KC.iterativeChop(-35,normalArray));
  }
}
