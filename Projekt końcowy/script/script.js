function cookiesAccepted(){
    element=document.getElementById("cookie");
    element.style.display = "none";
    element=document.getElementById("cookie-bg");
    element.style.display = "none";
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const logo = document.querySelector('.logo');
    menu.classList.toggle('active');
    logo.classList.toggle('hidden');
}
function adjustSideImageHeight() {
    const kontentContainers = document.querySelectorAll('.kontent-container');
    kontentContainers.forEach(container => {
        const kontentBox = container.querySelector('.kontent-box');
        const sideImage = container.querySelector('.side-image');
        if (kontentBox && sideImage) {
            sideImage.style.height = `${kontentBox.clientHeight}px`;
        }
    });
}
function hideMenu(){
    const menu = document.querySelector('.menu');
        const logo = document.querySelector('.logo');
        
        if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                if (logo.classList.contains('hidden')) logo.classList.remove('hidden');
            }
}
document.addEventListener('DOMContentLoaded', function() {
const links = document.querySelectorAll('a.scroll-to');


links.forEach(link => {
    link.addEventListener('click', function(event) {
        
        event.preventDefault(); // Zatrzymaj domyślne działanie linku
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').getBoundingClientRect().height;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 10;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
});

    window.addEventListener('load', adjustSideImageHeight);
    window.addEventListener('resize', adjustSideImageHeight);
    document.addEventListener('DOMContentLoaded', function() {
const galleries = document.querySelectorAll('.gallery-container');
galleries.forEach((galleryContainer, galleryIndex) => {
    let currentImageIndex = 0;
    const gallery = galleryContainer.querySelector('.gallery');
    const items = galleryContainer.querySelectorAll('.gallery-item');

    function showImage(index) {
        if (index >= items.length) {
            currentImageIndex = 0;
        } else if (index < 0) {
            currentImageIndex = items.length - 1;
        } else {
            currentImageIndex = index;
        }
        const offset = -currentImageIndex * 100;
        gallery.style.transform = `translateX(${offset}%)`;
    }
    function prevImage() {
        showImage(currentImageIndex - 1);
    }

    function nextImage() {
        showImage(currentImageIndex + 1);
    }
    galleryContainer.querySelector('.gallery-prev').addEventListener('click', function() {
        showImage(currentImageIndex - 1);
    });

    galleryContainer.querySelector('.gallery-next').addEventListener('click', function() {
        showImage(currentImageIndex + 1);
    });

    showImage(currentImageIndex);
});
});
function changeLanguage(lang){
fetch(`languages/${lang}.json`)
                .then(response => response.json())
                .then(data => {
                    for (const [key, value] of Object.entries(data)) {
                        
                        const element = document.getElementById(key);
                        if (element) {
                            element.innerText = value;
                        }
                    }
                })
                .catch(error => console.error('Error loading language file:', error));
}
