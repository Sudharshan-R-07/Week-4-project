const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxChars = 200;

textarea.addEventListener("input", () => {
  const typedChars = textarea.value.length;
  const remaining = maxChars - typedChars;

  counter.textContent = `${typedChars} / ${maxChars} characters`;

  if (typedChars > maxChars) {
    warning.textContent = "⚠️ You have reached the character limit!";
    textarea.value = textarea.value.substring(0, maxChars); // prevent extra typing
  } else {
    warning.textContent = "";
    
  }
});
