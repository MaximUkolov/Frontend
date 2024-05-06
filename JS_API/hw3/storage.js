const photosLsKey = 'photos';

function getFavoritePhotos() {
    const photos = localStorage.getItem(photosLsKey);
    if (!photos) {
        return [];
    }
    return JSON.parse(photos);
};

function saveСhange(value) {
    localStorage.setItem(photosLsKey, JSON.stringify(value));
}

export { saveСhange, getFavoritePhotos };