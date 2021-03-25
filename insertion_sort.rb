# frozen_string_literal: true

def insertionSort1(n, arr)
  return arr if arr.length <= 1

  new_arr = []
  arr.each { |num| new_arr << num }
  loop do
    break if n <= 0

    n -= 1
    arr.each do |n|
      x = arr.index(n)
      next unless arr[x + 1] && n > arr[x + 1]

      new_arr[x + 1] = new_arr[x + 1]
      new_arr[x + 1] = new_arr[x]
      puts new_arr.join(' ')
      arr[x], arr[x + 1] = arr[x + 1], arr[x]
      new_arr = []
      arr.each { |num| new_arr << num }
    end
  end
  puts new_arr.join(' ')
end
