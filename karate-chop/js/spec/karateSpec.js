var karate = require('../app/karate.js');

describe("Karate Chop! iterative", function() {
  it("Basics", function() {
    expect(karate.iterativeChop(3, [])).toBe(-1);
    expect(karate.iterativeChop(3, [1])).toBe(-1);
    expect(karate.iterativeChop(1, [1])).toBe(0);
  });
  it("3 Elements", function() {
    expect(karate.iterativeChop(1, [1,3,5])).toBe(0);
    expect(karate.iterativeChop(3, [1,3,5])).toBe(1);
    expect(karate.iterativeChop(5, [1,3,5])).toBe(2);
    expect(karate.iterativeChop(0, [1,3,5])).toBe(-1);
    expect(karate.iterativeChop(2, [1,3,5])).toBe(-1);
    expect(karate.iterativeChop(4, [1,3,5])).toBe(-1);
    expect(karate.iterativeChop(6, [1,3,5])).toBe(-1);
  });
  it("4 Elements", function() {
    expect(karate.iterativeChop(1, [1,3,5,7])).toBe(0);
    expect(karate.iterativeChop(3, [1,3,5,7])).toBe(1);
    expect(karate.iterativeChop(5, [1,3,5,7])).toBe(2);
    expect(karate.iterativeChop(7, [1,3,5,7])).toBe(3);
    expect(karate.iterativeChop(0, [1,3,5,7])).toBe(-1);
    expect(karate.iterativeChop(2, [1,3,5,7])).toBe(-1);
    expect(karate.iterativeChop(4, [1,3,5,7])).toBe(-1);
    expect(karate.iterativeChop(6, [1,3,5,7])).toBe(-1);
    expect(karate.iterativeChop(8, [1,3,5,7])).toBe(-1);
  });
});

describe("Karate Chop! recoursive", function() {
  it("Basics", function() {
    expect(karate.recursiveChop(3, [])).toBe(-1);
    expect(karate.recursiveChop(3, [1])).toBe(-1);
    expect(karate.recursiveChop(1, [1])).toBe(0);
  });
  it("3 Elements", function() {
    expect(karate.recursiveChop(1, [1,3,5])).toBe(0);
    expect(karate.recursiveChop(3, [1,3,5])).toBe(1);
    expect(karate.recursiveChop(5, [1,3,5])).toBe(2);
    expect(karate.recursiveChop(0, [1,3,5])).toBe(-1);
    expect(karate.recursiveChop(2, [1,3,5])).toBe(-1);
    expect(karate.recursiveChop(4, [1,3,5])).toBe(-1);
    expect(karate.recursiveChop(6, [1,3,5])).toBe(-1);
  });
  it("4 Elements", function() {
    expect(karate.recursiveChop(1, [1,3,5,7])).toBe(0);
    expect(karate.recursiveChop(3, [1,3,5,7])).toBe(1);
    expect(karate.recursiveChop(5, [1,3,5,7])).toBe(2);
    expect(karate.recursiveChop(7, [1,3,5,7])).toBe(3);
    expect(karate.recursiveChop(0, [1,3,5,7])).toBe(-1);
    expect(karate.recursiveChop(2, [1,3,5,7])).toBe(-1);
    expect(karate.recursiveChop(4, [1,3,5,7])).toBe(-1);
    expect(karate.recursiveChop(6, [1,3,5,7])).toBe(-1);
    expect(karate.recursiveChop(8, [1,3,5,7])).toBe(-1);
  });
});
