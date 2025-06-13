const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector("#img-viewer");

function toggleMenu() {
  menu.classList.toggle("hide");
}
menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}
handleResize();
window.addEventListener("resize", handleResize);

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return;

  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");
  const fullSrc = src.replace("-sm", "-full");

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;
  modal.showModal();

  modal.querySelector(".close-viewer").addEventListener("click", () => modal.close());
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
