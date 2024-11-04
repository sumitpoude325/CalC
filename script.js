let calculationDone = false;

function appear(value) {
  if (calculationDone) {
    document.getElementById("dis").value = "";
    calculationDone = false;
  }
  document.getElementById("dis").value += value;
}

function allClear(value) {
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
