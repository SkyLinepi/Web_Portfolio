const track = document.getElementById("track");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
leftBtn.onclick = goLeft;
rightBtn.onclick = goRight;
let i = 0;

function goLeft() {
    slideTo(i - 1);
}

function goRight() {
    slideTo(i + 1);
}

function slideTo(n) {
    const count = track.children.length;
    i = (n + count) % count;
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
}
