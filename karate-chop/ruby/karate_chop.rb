
# KarateChop class for Binary Search KAta
class KarateChop
  def iterative_chop(elem, array)
    min_index = 0
    max_index = array.length - 1
    while min_index <= max_index
      pivot = (min_index + max_index) / 2
      if elem > array[pivot]
        min_index = pivot + 1
      elsif elem < array[pivot]
        max_index = pivot - 1
      else
        return pivot
      end
    end
    return -1
  end
end
