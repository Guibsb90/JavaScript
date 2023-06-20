function charKeyBtn(charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    let input = document.querySelector("#input");
    let value = charKeyBtn.dataset.value;
    input.value += value;
  });
}
function clear() {
  let input = document.querySelector("#input");
  input.value = "";
  input.focus();
  resInput.value = "";
}

export { charKeyBtn, clear };
