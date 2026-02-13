// 🎵 Enable music on first click
document.body.addEventListener("click", () => {
    document.getElementById("bgMusic").play();
}, { once: true });

// 🖱️ Scroll hint (auto gentle scroll after 4 sec on first page)
setTimeout(() => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
    });
}, 4000);


// ❤️ Slideshow
let images = ["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg","img6.jpeg","img7.jpeg","img8.jpeg","img9.jpeg","img10.jpeg"];
let index = 0;

setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}, 3000);


// 😈 Moving NO button
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


// 💛 YES button
document.getElementById("yesBtn").onclick = () => {
    document.getElementById("result").innerHTML =
        "Yayyyy!!! 💛I love you sooo much maah🫶🫂😘";
};


// 💛 Floating hearts generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💛";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);

