import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let elementHotPrice = document.getElementsByClassName("hot");
  console.log(elementHotPrice);

  let addFireEmoji = elementHotPrice[0].innerText + " 🔥";

  elementHotPrice[0].innerText = addFireEmoji;
});
