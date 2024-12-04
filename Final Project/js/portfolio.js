const imagesDirectory = "images/portfolio";

document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("portfolioGrid");
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const imageList = [
        "image_1.jpg",
        "image_10.jpg",
        "image_11.jpg",
        "image_12.jpg",
        "image_13.jpg",
        "image_15.JPG",
        "image_16.jpg",
        "image_17.jpg",
        "image_18.jpg",
        "image_19.jpg",
        "image_2.jpg",
        "image_20.jpg",
        "image_21.jpg",
        "image_22.JPG",
        "image_3.jpg",
        "image_4.jpg",
        "image_5.jpg",
        "image_6.jpg",
        "image_7.jpg",
        "image_8.jpg",
        "image_9.jpg",
    ];

    let currentIndex = null; 

    imageModal.style.display = "none";

    imageList.forEach((imageName, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = `${imagesDirectory}/${imageName}`;
        imgElement.alt = `Portfolio Image`;
        imgElement.dataset.index = index; 
        imgElement.addEventListener("click", () => openModal(index));
        portfolioGrid.appendChild(imgElement);
    });

    function openModal(index) {
        currentIndex = index;
        modalImage.src = `${imagesDirectory}/${imageList[index]}`;
        imageModal.style.display = "flex"; 
    }

    closeBtn.addEventListener("click", () => {
        imageModal.style.display = "none"; 
        currentIndex = null;
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex !== null) {
            currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
            modalImage.src = `${imagesDirectory}/${imageList[currentIndex]}`;
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentIndex !== null) {
            currentIndex = (currentIndex + 1) % imageList.length;
            modalImage.src = `${imagesDirectory}/${imageList[currentIndex]}`;
        }
    });

    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = "none"; 
            currentIndex = null; 
        }
    });
});
