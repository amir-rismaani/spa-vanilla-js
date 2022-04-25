const sidebar = document.querySelector(".sidebar");
const collapseBtn = document.querySelector(".collapse");

collapseBtn.addEventListener("click", (event) => {
  sidebar.classList.toggle("sidebar--minimal");
  event.target.classList.toggle("collapsed");
});
