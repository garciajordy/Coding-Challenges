def divisibleSumPairs(n, k, ar)
    sum = 0
    i = 0
    num = 1
    
  loop do
  sum += 1 if ar[i] % k == 0 
  sum += 1 if ar[num] != nil &&(((ar[i]+ar[num]) % k) == 0) 

  if num >= n-1
    num = i+1
   i += 1
  
 end
 break if i >= n
 
  num += 1
  end
return sum
end