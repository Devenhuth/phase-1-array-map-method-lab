const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newArr = tutorials.map ((tutorial) => {
    return tutorial.split(' ') // getting arrays containing each word byself 
    })
  
  return newArr.map(first => {
    return first.map(word => {
     return word[0].toUpperCase() + word.substring(1) // caps first letter of the array
    }).join(' ') //rejoins the strings into one array
 })
}

 titleCased(tutorials)