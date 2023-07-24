import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGallery = document.querySelector(".gallery");

containerGallery.addEventListener("click", handleClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
  )
  .join("");

containerGallery.insertAdjacentHTML("beforeend", markup);

function handleClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">

`);
  instance.show();

  containerGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
