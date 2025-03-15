const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    resetActivePanels();
    panel.classList.add("active");
  });
});

function resetActivePanels() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
