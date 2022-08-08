const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("am_pm");

function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = "AM";

    if (h > 12) {
        h = h - 12;
        ap = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = ap;
    setTimeout(() => {
        clock();
    }, 1000);
}

clock();