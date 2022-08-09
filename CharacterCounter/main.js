const textareas = document.getElementById("text");
const TCount = document.getElementById("Cout");
const RCount = document.getElementById("Rout");

textareas.addEventListener("keyup", () => {
  //   console.log("key is pressed");
  update();
});

function update() {
  TCount.innerText = textareas.value.length;
  RCount.innerText =
    textareas.getAttribute("maxLength") - textareas.value.length;
}
