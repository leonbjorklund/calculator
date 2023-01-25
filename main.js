const calcButtons = document.getElementsByClassName("grid-item");
const displayNumbers = document.getElementById("display-numbers");

let operations = ["/", "*", "-", "+"];


function clearNumbers() {
    displayNumbers.innerText = "";
}

function deleteNumber() {
  let showQuery = displayNumbers.innerText;
  displayNumbers.innerText = showQuery.slice(0,-1);
}

function calcPress (button) {
 
if (isNaN(button)) {

  let showQuery = displayNumbers.innerText;
  if(operations.includes(showQuery.slice(-1)) || showQuery.length === 0) {
    return false;
  }

 
  switch (button) {
    case divide:
      displayNumbers.innerText += "/";
      break;

    case multiply:
      displayNumbers.innerText += "*";
      break;

    case subtract:
      displayNumbers.innerText += "-";
      break;

    case dot:
      displayNumbers.innerText += ".";
      break;

    case add:
      displayNumbers.innerText += "+";
      break;
  } 
}

else {
  displayNumbers.innerText += button;
}

let query = displayNumbers.innerText;

return query;

} 


function equalNumbers() {
  let query = calcPress();
  let result = eval(query);
  displayNumbers.innerText = result;
}


