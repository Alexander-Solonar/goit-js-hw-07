import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = creategalleryCardItem(galleryItems);
galleryContainer.addEventListener("click", onShowOriginalImage);
let instance;

function creategalleryCardItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href= "${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onShowOriginalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const linkOriginalImg = event.target.dataset.source;
  onLightboxCreateModal(linkOriginalImg);
}

function onLightboxCreateModal(url) {
  instance = basicLightbox.create(`
      <img src="${url}" width="800" height="600">`);
  instance.show(() => {
    window.addEventListener("keydown", onEscKeyPress);
  });
}

function onEscKeyPress(event) {
  if (!instance.visible()) {
    window.removeEventListener("keydown", onEscKeyPress);
    return;
  }
  if (event.code === "Escape") {
    instance.close();
  }
}
