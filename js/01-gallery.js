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
  console.log(event.target.dataset.source);
}
