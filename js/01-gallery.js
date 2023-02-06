import { galleryItems } from "./gallery-items.js";

const cardItem = creategalleryCardItem(galleryItems);
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("afterbegin", cardItem);
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

let instance;
function onShowOriginalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const linkOriginalImg = event.target.dataset.source;
  instance = basicLightbox.create(`
      <img src="${linkOriginalImg}" width="800" height="600">`);
  instance.show(() => window.addEventListener("keydown", onEscKeyPress));
}

function onEscKeyPress(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
  if (!document.body.lastElementChild.classList.contains("basicLightbox")) {
    window.removeEventListener("keydown", onEscKeyPress);
  }
  console.log(evt.code);
}
