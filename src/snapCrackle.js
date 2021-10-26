function snapCrackle(maxValue){
  for (let contador = 1; contador <= maxValue; contador++){   
   
    
     if(contador % 5 == 0 && contador % 2 == 1){
     let num = 'snapCrackle'
     console.log(num)
    }
   else if(contador % 5 == 0){
     let num = 'crackle'
     console.log(num) 
   } 
    else if(contador % 2 == 1){
     let num = 'snap'
     console.log(num)
   }  
    else{console.log(contador)}
    
  }
}

