let calculationDone = false;

function appear(value) {
  if (calculationDone) {
    document.getElementById("dis").value = "";
    calculationDone = false;
  }
  document.getElementById("dis").value += value;
}

function allClear() {
  document.getElementById("dis").value = "";
}

function Clear() {
  const display = document.getElementById("dis");
  if (calculationDone) {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  let result = eval(document.getElementById("dis").value);
  document.getElementById("dis").value = result;
  calculationDone = true;
}


// for keyboard
document.addEventListener("keydown",function(event){
  console.log(event.key);
  if((event.key>=0 && event.key<=9) || event.key=='+'|| event.key=='-'|| event.key=='/' || event.key=='*'){
    appear(event.key);
  }
  else if(event.key=='Delete'){
    allClear();
  }
  else if(event.key=='Backspace'){
    Clear();
  }
  else if(event.key=='=' && calculationDone==false){
    calculate();
  }
})
