import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.setAttribute("href", item.original);

  const picture = document.createElement("img");
  picture.classList.add("gallery__image");
  picture.src = item.preview;
  picture.setAttribute("data-source", item.original);
  picture.setAttribute("alt", item.description);

  link.append(picture);
  div.append(link);
  gallery.append(div);
});

let instance = basicLightbox.create("");

const handlerFunc = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  instance = basicLightbox.create(`
    <img src=${event.target.getAttribute(
      "data-source"
    )} alt=${event.target.getAttribute("alt")} >
    `);

  instance.show();
};

gallery.addEventListener("click", handlerFunc);

gallery.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Escape") {
    instance.close();
  }
});

console.log(galleryItems);
