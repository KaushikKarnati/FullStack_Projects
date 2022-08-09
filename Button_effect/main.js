const butt = document.querySelector(".butt");

butt.addEventListener("mouseover", (event) => {
    const x = event.pageX - butt.offsetLeft;
    const y = event.pageY - butt.offsetTop;

    butt.style.setProperty("--xPos", x + "px");
    butt.style.setProperty("--yPos", y + "px");
});