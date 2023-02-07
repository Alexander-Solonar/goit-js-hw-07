import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = galleryItems.reduce(
  (html, { original, preview }) => {
    return (
      html +
      `<li class="gallery__item">
        <a class="gallery__item" href="${original}">
           <img class="gallery__image" src="${preview}" alt="Image description" />
        </a>
    </li>`
    );
  },
  ""
);

galleryContainer.addEventListener("click", onShowOriginalImage);
function onShowOriginalImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  console.log(evt.target.dataset.source);
}
