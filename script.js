document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("num1");
  const hasil = document.getElementById("hasil"); 
  const buttons = document.querySelectorAll("button");

  let currentValue = "";

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (button.classList.contains("clear-all")) {
        currentValue = "";
        display.value = "";
        hasil.value = "";
      } else if (button.classList.contains("clear")) {
        currentValue = currentValue.slice(0, -1);
        display.value = currentValue;
      } else if (button.classList.contains("equal")) {
        try {
          hasil.value = eval(currentValue); 
          currentValue = hasil.value;
        } catch {
          hasil.value = "Error";
          currentValue = "";
        }
      } else {
        currentValue += value; 
        display.value = currentValue;
      }
    });
  });
});
