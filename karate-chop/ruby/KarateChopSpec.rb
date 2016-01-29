require 'minitest/autorun'
require './KarateChop'

class TestBlog < Minitest::Test

  def setup
    @kc = KarateChop.new
  end

  def test_basic
    assert_equal(-1, @kc.iterativeChop(3, []))
    assert_equal(-1, @kc.iterativeChop(3, [1]))
    assert_equal(0,  @kc.iterativeChop(1, [1]))
  end

  def test_three_numbers
    assert_equal(0,  @kc.iterativeChop(1, [1, 3, 5]))
    assert_equal(1,  @kc.iterativeChop(3, [1, 3, 5]))
    assert_equal(2,  @kc.iterativeChop(5, [1, 3, 5]))
    assert_equal(-1, @kc.iterativeChop(0, [1, 3, 5]))
    assert_equal(-1, @kc.iterativeChop(2, [1, 3, 5]))
    assert_equal(-1, @kc.iterativeChop(4, [1, 3, 5]))
    assert_equal(-1, @kc.iterativeChop(6, [1, 3, 5]))
  end

  def test_four_numbers
    assert_equal(0,  @kc.iterativeChop(1, [1, 3, 5, 7]))
    assert_equal(1,  @kc.iterativeChop(3, [1, 3, 5, 7]))
    assert_equal(2,  @kc.iterativeChop(5, [1, 3, 5, 7]))
    assert_equal(3,  @kc.iterativeChop(7, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterativeChop(0, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterativeChop(2, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterativeChop(4, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterativeChop(6, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterativeChop(8, [1, 3, 5, 7]))
  end

end
