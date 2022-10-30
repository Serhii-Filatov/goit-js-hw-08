import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    gallery: document.querySelector('.gallery'),
}

const markupArr = galleryItems.map((item) => {
    return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" 
                        alt="${item.description}"
                        title="${item.description}"/>
            </a>`;
})

const zoomImage = (event) => {
    event.preventDefault();  
}

refs.gallery.insertAdjacentHTML('afterbegin', markupArr.join(''))

refs.gallery.addEventListener('click', zoomImage)

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});