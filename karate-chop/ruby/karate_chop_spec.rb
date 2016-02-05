require 'minitest/autorun'
require './karate_chop'

# Tests for karate_chop
class TestBlog < Minitest::Test
  def setup
    @kc = KarateChop.new
  end

  def test_basic
    assert_equal(-1, @kc.iterative_chop(3, []))
    assert_equal(-1, @kc.iterative_chop(3, [1]))
    assert_equal(0,  @kc.iterative_chop(1, [1]))
  end

  def test_three_numbers
    assert_equal(0,  @kc.iterative_chop(1, [1, 3, 5]))
    assert_equal(1,  @kc.iterative_chop(3, [1, 3, 5]))
    assert_equal(2,  @kc.iterative_chop(5, [1, 3, 5]))
    assert_equal(-1, @kc.iterative_chop(0, [1, 3, 5]))
    assert_equal(-1, @kc.iterative_chop(2, [1, 3, 5]))
    assert_equal(-1, @kc.iterative_chop(4, [1, 3, 5]))
    assert_equal(-1, @kc.iterative_chop(6, [1, 3, 5]))
  end

  def test_four_numbers
    assert_equal(0,  @kc.iterative_chop(1, [1, 3, 5, 7]))
    assert_equal(1,  @kc.iterative_chop(3, [1, 3, 5, 7]))
    assert_equal(2,  @kc.iterative_chop(5, [1, 3, 5, 7]))
    assert_equal(3,  @kc.iterative_chop(7, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterative_chop(0, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterative_chop(2, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterative_chop(4, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterative_chop(6, [1, 3, 5, 7]))
    assert_equal(-1, @kc.iterative_chop(8, [1, 3, 5, 7]))
  end
end
