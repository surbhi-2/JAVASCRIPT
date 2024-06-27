//JS2

function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
  }
  
  let exampleString = 'webmaster';
  let sortedString = sortStringAlphabetically(exampleString);
  console.log(sortedString);