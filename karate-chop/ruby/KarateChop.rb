class KarateChop

  def iterativeChop(elem,array)
    minIndex = 0
    maxIndex = array.length - 1

    while(minIndex<=maxIndex) do
      pivot = (minIndex + maxIndex)/2
      if elem > array[pivot]
        minIndex = pivot+1
      elsif elem < array[pivot]
        maxIndex = pivot-1
      else
        return pivot
      end
    end

    return -1
  end

end
