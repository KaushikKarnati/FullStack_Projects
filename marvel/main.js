const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".rightSlide");
const sliderLeft = document.querySelector(".leftSlide");
const upButton = document.querySelector(".upButt");
const downButton = document.querySelector(".downButt");
const slidesLength = slideRight.querySelectorAll("div").length;

//console.log(slidesLength);

let activeStackIndex = 0;
sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    //console.log(sliderHeight);
    if (direction == "up") {
        activeStackIndex++;
        console.log(activeStackIndex);
        if (activeStackIndex > slidesLength - 1) {
            activeStackIndex = 0;
        }
    } else if (direction == "down") {
        activeStackIndex--;
        if (activeStackIndex < 0) {
            activeStackIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${
    activeStackIndex * sliderHeight
  }px)`;
    sliderLeft.style.transform = `translateY(${
    activeStackIndex * sliderHeight
  }px)`;
};