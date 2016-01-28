import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class Tests {

  public static KarateChop KC = new KarateChop();

  @Test
  public void testEmptyArray() {
    int[] emptyArray = {};
    assertEquals(KC.iterativeChop(4,emptyArray),-1);
  }

  @Test
  public void testSingleElement() {
    int[] singleItemArray = {1};
    assertEquals(KC.iterativeChop(1,singleItemArray),0);
  }

  @Test
  public void testSmokeCase() {
    int[] normalArray = {1,2,3,4,5,6,7,8,9};
    assertEquals(KC.iterativeChop(3,normalArray),2);
  }

  @Test
  public void testBigNumber() {
    int[] normalArray = {1,2,3,4,5,6,7,8,9};
    assertEquals(KC.iterativeChop(55,normalArray),-1);
  }

  @Test
  public void testMissingNumber() {
    int[] normalArray = {1,2,3,4,6,7,8,9};
    assertEquals(KC.iterativeChop(5,normalArray),-1);
  }

  @Test
  public void testNegativeNumber() {
    int[] normalArray = {1,2,3,4,5,6,7,8,9};
    assertEquals(KC.iterativeChop(-35,normalArray),-1);
  }

}
