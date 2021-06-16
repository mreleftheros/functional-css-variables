const inputs = document.querySelectorAll(".controls input");
inputs.forEach(input => {
  input.value = 0;
})

// function to handle input
const handleInput = e => {
  const suffix = e.target.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
};


inputs.forEach(input => {
  input.addEventListener("input", handleInput);
})