import { APIkey } from "./key.js";
import { getFavoritePhotos, saveСhange } from "./storage.js";

let isFetching = false;
const photoContEl = document.querySelector('#photo-container');
const showCollectionEl = document.querySelector('.show-collection');
const collectionEl = document.querySelector('.collection');

async function getImage() {
    isFetching = true;

    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?`, { headers: { Authorization: 'Client-ID ' + APIkey } });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const json = await response.json();
        return json;
    } finally {
        isFetching = false;
    }
}

try {
    const result = await getImage();
    renderImage(result, photoContEl);

    const likeBtnEl = document.querySelector('.photo-like-btn');
    photoContEl.addEventListener('click', ({ target }) => {
        const photoLikesEl = document.querySelector('.photo-likes');
        const favoritePhotos = getFavoritePhotos();

        if (!target.closest('.like')) {
            likeBtnEl.classList.add('like');
            result.likes++;
            result.liked_by_user = true;
            favoritePhotos.push(result);
            saveСhange(favoritePhotos);
            photoLikesEl.textContent = result.likes;
        } else {
            likeBtnEl.classList.remove('like');
            result.likes--;
            result.liked_by_user = false;
            favoritePhotos.splice(favoritePhotos.indexOf(result), 1);
            saveСhange(favoritePhotos);
            photoLikesEl.textContent = result.likes;
        }
    });
} catch (error) {
    alert(error);
}

showCollectionEl.addEventListener('click', () => {
    collectionEl.innerHTML = '';
    const favoritePhotos = getFavoritePhotos();
    favoritePhotos.forEach((photo) => {
        const collectionCardEl = document.createElement('div');
        collectionCardEl.classList.add('collection-card');
        collectionCardEl.setAttribute('data-id', photo.id);
        collectionEl.append(collectionCardEl)
        renderImage(photo, collectionCardEl);
    });
});

collectionEl.addEventListener('click', ({ target }) => {
    if (target.closest('.like')) {
        const favoritePhotos = getFavoritePhotos();
        const collectionCardEl = target.closest('.collection-card');
        const cardId = collectionCardEl.dataset.id;
        const foundedIndex = favoritePhotos.findIndex((card) => card.id === cardId);
        if (foundedIndex !== -1) {
            favoritePhotos.splice(foundedIndex, 1);
            saveСhange(favoritePhotos);
            collectionCardEl.remove();
        }
    }
});

function renderImage(photo, container) {
    container.insertAdjacentHTML('beforeend',
        `
        <img class="photo" src="${photo.urls.regular}">
        <div class="photo-info">
            <h3 class="photo-title">Фотограф: ${photo.user.name}</h3>
            <div class="photo-like-container">
                <button class="photo-like-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512">
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                </button>
                <p class="photo-likes">${photo.likes}</p>
            </div>
        </div>
    `);
    if (photo.liked_by_user) {
        container.querySelector('.photo-like-btn').classList.add('like');
    }
}