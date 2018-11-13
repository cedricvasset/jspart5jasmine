var languagesArrayCreation = function () {
  //possibilité d utiliser une variable var languages= ['html',...etc]
  return new Array('Html', 'CSS', 'Java', 'PHP');
  //creation nouveau tableau
}

var numbersArrayCreation = function () {
    return new Array(0, 1, 2, 3, 4, 5);
}

var ElementReplacement = function (languages) {
  //languages[2]= 'javascript'
languages.splice(2, 1, 'Javascript');
  return (languages);
}

var AddElementToLanguagesArray = function (languages) {
languages.push('Ruby', 'Python');
  return (languages)
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2, -1)
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
languages.shift()
  return languages;
}

var deleteArrayLastElement = function (languages) {
languages.pop()
  return languages;
}

var stringToArray = function (socialMediaInString) {
  return socialMediaInString.split(',');
}

var arrayToString = function (languages) {
  return languages.join(',');
}

var arraySort = function (socialMedia) {
//tri par ordre alphabetique
  return socialMedia.sort();
}

var arrayInvert = function (languages){
  return languages.reverse();
}
