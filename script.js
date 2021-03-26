document.getElementById('multiply').addEventListener('click', calculate)

let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

function calculate () {
  answer = 0
  firstNum = document.getElementById('first').value
  secondNum = document.getElementById('second').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)

  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
     }
     document.getElementById('answer').innerHTML = answer
  }
  