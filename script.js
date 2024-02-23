let hor = document.querySelector("#hour")
let min = document.querySelector("#minute")
let sec = document.querySelector("#second")
let ampm = document.querySelector("#ampm")

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ap = "AM"

    if (h > 12) {
        h = h - 12
        ap = "PM"
    }

    h=h<10 ? "0" + h:h;

    hor.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = ap;

    setTimeout(() => {
        updateclock()
    }, 1000);
}
updateclock();