import { galleryItems } from "./gallery-items.js";

const cardItem = creategalleryCardItem(galleryItems);
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML("afterbegin", cardItem);
galleryContainer.addEventListener("click", onGalleryComtainerClick);

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

function onGalleryComtainerClick(event) {
  event.preventDefault();
  const linkOriginalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${linkOriginalImg}" width="800" height="600">`);
  instance.show();
}
