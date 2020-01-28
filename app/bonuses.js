//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let newArr = [];
  let toArr = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ' && i != 0) {
      newArr.push(str[i + 1].toUpperCase())
    }
    else if (str[i - 1] != ' ') {
      newArr.push(str[i])
    }
  }

  return newArr.join('');
}
