const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("mouseenter", () => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    panel.classList.add("active");
  });
});
