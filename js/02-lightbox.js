import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const link = document.createElement("a");
  link.classList.add("gallery__item");
  link.setAttribute("href", item.original);

  const picture = document.createElement("img");
  picture.classList.add("gallery__image");
  picture.src = item.preview;
  picture.setAttribute("alt", item.description);

  link.append(picture);
  gallery.append(link);
});

var lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionDelay: 200,
  captionsData: "alt",
});
console.log(galleryItems);
