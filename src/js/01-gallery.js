
import "simplelightbox/dist/simple-lightbox.min.css"
import SimpleLightbox from "simplelightbox"
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Change code below this line
const galleryEl = document.querySelector(".gallery")

console.log(galleryItems);

function createGallary (galleryItems){
    return galleryItems.reduce((acc, item) => acc + `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`, ""
    )
}

const resultOfCreateGallery = createGallary (galleryItems)
galleryEl.insertAdjacentHTML("beforeend", resultOfCreateGallery)

// galleryEl.addEventListener("click", galleryHandler)

// function galleryHandler (event){
//     event.preventDefault()
//     const eventItem = event.target.dataset.source
//     const modalEl = simplelightbox.create(
//         `<img src="${eventItem}" width="800" height="600">`,
    
//         {
//     onShow: () => window.addEventListener("keydown", escape ),
//     onClose: () => window.removeEventListener("keydown", escape)
//     }
//     )
//     modalEl.show()

//     function escape (event){
//     if (event.code === "Escape"){
//     modalEl.close()   
// }
// }    
// }

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
})



