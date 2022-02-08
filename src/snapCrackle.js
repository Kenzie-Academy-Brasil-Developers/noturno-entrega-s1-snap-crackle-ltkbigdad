function snapCrackle(maxValue){
  let saida = '';  
  
  for (let contador = 1; contador <= maxValue; contador++){     
   
     if(contador % 5 == 0 && contador % 2 == 1){
     saida += ', snapCrackle, '
     
    }
   else if(contador % 5 == 0){
     saida += 'crackle'
      
   } 
    else if(contador % 2 == 1 && contador > 1){
     saida += ', snap, '
     
   }  else if(contador  === 1){
     saida += 'snap, '
     
   }
    else{saida += contador }
    
  }
  console.log(saida)
}

console.log(snapCrackle(20))