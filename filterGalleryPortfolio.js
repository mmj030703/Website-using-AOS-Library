const galleryMenu = document.querySelector('.gallery_menu');
let galleryMenuCurrentItem = document.querySelector('.btn_2');
const galleryPortfolio = document.querySelector('.gallery_porfolio');
const galleryMenuImageElements = [...Array.from(galleryPortfolio.children)];
const galleryMenuFilteredImages = [];

const resetGalleryPortfolio = () => {
    galleryMenuFilteredImages.length = 0;
    
    Array.from(galleryPortfolio.children).forEach((image) => {
        image.remove();
    });
}

const showGalleryImages = () => {
    galleryMenuFilteredImages.forEach((filteredImage) => {
        galleryPortfolio.append(filteredImage);
    });
}

const filterImage = (eventObj, galleryMenuCurrentItem) => {
    resetGalleryPortfolio();

    if(galleryMenuCurrentItem.dataset.filter === "all") {
        galleryMenuFilteredImages.push(...galleryMenuImageElements);
    }
    else {
        galleryMenuFilteredImages.push(...galleryMenuImageElements.filter((image) => {
            return image.classList.contains(`${eventObj.target.dataset.filter}`);
        }));
    }
    showGalleryImages();
}

galleryMenu.addEventListener('click', (eventObj) => {
    if(eventObj.target.classList.contains('item')) {
        galleryMenuCurrentItem.classList.remove('btn_2');
        galleryMenuCurrentItem = eventObj.target;
        galleryMenuCurrentItem.classList.add('btn_2');
        filterImage(eventObj, galleryMenuCurrentItem);
    }
});