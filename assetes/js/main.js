const hero__banner = document.querySelector(".hero__banner");
const container__image = document.querySelectorAll(".container-image img");

for (let i = 0; i < container__image.length; i++) {
    container__image[i].addEventListener("click", function (e) {
        console.log(e.target.getAttribute("src"));
        const imgSrc = e.target.getAttribute("src");
        hero__banner.style.backgroundImage = `url(${imgSrc})`;
    });
}