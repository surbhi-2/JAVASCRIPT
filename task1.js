

function reverseNumber(num) {
    let reversedNum = 0;
    
    while (num > 0) {
      reversedNum = reversedNum * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    
    return reversedNum;
  }
  
  let x = 32243;
  let reversedX = reverseNumber(x);
  console.log(reversedX);