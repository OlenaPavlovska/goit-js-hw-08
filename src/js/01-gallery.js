import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';


// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryElement = galleryItems.map(({ original, preview, description }) => {
    const html = `
        <li class="gallery__item">
            <a class="gallery__link" href= "${original}">
          <img class= "gallery__image"  src="${preview}" data-source="${original}" alt= "${description}"/>
    </a>
        </li>`;
    
    gallery.insertAdjacentHTML('afterbegin', html);
})


const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: alert,
    captionDelay: 250
});