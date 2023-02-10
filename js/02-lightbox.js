import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = galleryItems.reduce(
  (html, { original, preview, description }) => {
    return (
      html +
      `<li class="gallery__item">
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    );
  },
  ""
);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
