const imgs = document.querySelectorAll(".barista-boxes");
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");

let startIndex = 0;

function changeSlide(startIndex) {
    for (let i = 0; i < imgs.length; i++) {
        if (i >= startIndex && i < startIndex + 3) {
            imgs[i].style.display = "block";
        } else {
            imgs[i].style.display = "none";
        }
    }
}

changeSlide(startIndex);

prev_btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    startIndex = (startIndex - 1 < 0) ? imgs.length - 2 : startIndex - 1;
    changeSlide(startIndex);
});

next_btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    startIndex = (startIndex + 3 >= imgs.length) ? 0 : startIndex + 1;
    changeSlide(startIndex);
});
