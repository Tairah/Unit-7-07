document.getElementById('multiply').addEventListener('click', calculate)

let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0
let negative = false

function calculate () {
  answer = 0
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)
  answer = 0
  negative = false

  if (firstNum < 0) {
    negative = !negative
    firstNum = Math.abs(firstNum)
  }

  if (secondNum < 0) {
    negative = !negative
    secondNum = Math.abs(secondNum)
  }
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  if (negative) {
    answer = 0 - answer
  }
  document.getElementById('answer').innerHTML = answer
}
