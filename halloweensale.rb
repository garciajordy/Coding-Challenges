def howManyGames(p, d, m, s)
    amount = 0
      if s >= p
      s -= p;
      amount = 1;
      end
      if p-d >= m
        p-=d
      elsif p-d <= m && p >= m
        p=m
      end
      until s < p
          if p-d > m && p < s
            s-=p;
            p-=d;
            amount+=1;
       
           elsif p-d <= m && p >= m
            s -= p
            p = m
            amount +=1
           else
            s -= p
            amount +=1
          end
    end
      return amount
  
  end
  