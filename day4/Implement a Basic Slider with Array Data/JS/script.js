let images = [
    "photos/jungle.jpg", "photos/lake.jpg", "photos/waterfall.jpg", "photos/mount.jpg", "photos/road.jpg"
]
let currentIndex = 0
let myPhotos = document.getElementById("myimg")
let buttonNext = document.getElementById("nextphoto");
let buttonPrevious = document.getElementById("previousphoto")

function changePhoto() {
    myPhotos.src = images[currentIndex];
}

function nextImg() {
    currentIndex = (currentIndex + 1) % images.length;
    changePhoto();
}
function previousImg() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changePhoto();
}

buttonPrevious.addEventListener("click", previousImg);
buttonNext.addEventListener("click", nextImg)

changePhoto()