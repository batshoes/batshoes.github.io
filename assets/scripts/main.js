document.addEventListener("DOMContentLoaded", function () {
  colours = ["#7a77cb", "#ff8a54", "#cbf7dd", "#f7c9c4", "#f5f289"]
  selection = colours[Math.floor(Math.random() * colours.length)]
  footer = document.querySelector('.footer');
  footer.style.backgroundColor = selection
});
