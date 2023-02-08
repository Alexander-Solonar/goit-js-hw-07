import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = creategalleryCardItem(galleryItems);
galleryContainer.addEventListener("click", onShowOriginalImage);

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
  basicLightboxShowImg(linkOriginalImg);
}

let instance;
function basicLightboxShowImg(url) {
  instance = basicLightbox.create(`
      <img src="${url}" width="800" height="600">`);
  instance.show(() => window.addEventListener("keydown", onEscKeyPress));
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  if (!instance.visible()) {
    window.removeEventListener("keydown", onEscKeyPress);
  }
  console.log(event.code);
}
