document.querySelectorAll("span").forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    e.target.className = "hover";
  });
  box.addEventListener("mouseleave", (e) => {
    e.target.className = "";
  });
});
