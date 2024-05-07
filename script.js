let val = "";
const input = document.getElementById("input");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.dataset.value;
    if (buttonValue) {
      handleClick(buttonValue);
    } else if (button.id === "clear") {
      handleClear();
    } else if (button.id === "delete") {
      handleDelete();
    } else if (button.id === "result") {
      handleResult();
    }
  });
});

function handleClick(value) {
  val += value;
  input.value = val;
}

function handleClear() {
  val = "";
  input.value = "";
}

function handleDelete() {
  val = val.substring(0, val.length - 1);
  input.value = val;
}

function handleResult() {
  try {
    val = eval(val).toString();
    input.value = val;
  } catch (err) {
    val = "Error";
    input.value = val;
  }
}
