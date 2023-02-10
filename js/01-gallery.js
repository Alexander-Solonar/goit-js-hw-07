import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener("click", onTragetImgClick);

function createGalleryMarkup(items) {
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

function onTragetImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const urlOriginalImg = evt.target.dataset.source;

  controlLightboxModal(urlOriginalImg);
}

function controlLightboxModal(url) {
  const html = `<img src="${url}" width="800" height="600">`;
  const instance = basicLightbox.create(html, {
    onShow: () => document.addEventListener("keydown", onEscKeyPress),
    onClose: () => document.removeEventListener("keydown", onEscKeyPress),
  });

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
