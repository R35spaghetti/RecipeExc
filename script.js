document.addEventListener('DOMContentLoaded', function () {
    const carouselImagesContainer = document.querySelector('.carousel-images-container');
    const prevArrow = document.querySelector('.carousel-arrow.prev');
    const nextArrow = document.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    const totalItems = carouselImagesContainer.children.length;


    function moveTo(index) {
        carouselImagesContainer.style.transform = `translateX(${-index * 100}%)`;
        currentIndex = index;
    }

    prevArrow.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) currentIndex = totalItems - 1;
        moveTo(currentIndex);
    });


    nextArrow.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= totalItems) currentIndex = 0;
        moveTo(currentIndex);
    });

    //3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        moveTo(currentIndex);
    }, 3000);
});
