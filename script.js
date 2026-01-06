let heartInterval;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const blurOverlay = document.getElementById("blurOverlay");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
const surpriseBtn = document.getElementById("surpriseBtn");
const bdaySection = document.getElementById("birthdaySection");
const bdayCake = document.getElementById("bdayCake");
// Get reference to the audio element
const bdaySong = document.getElementById("bdaySong"); 


// Remove the YouTube API Initialization function, it's no longer needed.


noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "fixed";
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    blurOverlay.style.display = "flex";
    heartLoader.style.display = "block";
    heartInterval = setInterval(createHeart, 150);

    setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "block";
        
        setTimeout(() => {
            clearInterval(heartInterval);
            surpriseBtn.style.display = "inline-block";
        }, 2000);
    }, 1000);
});

surpriseBtn.addEventListener("click", () => {
    resultContainer.style.display = "none";
    surpriseBtn.style.display = "none";
    bdaySection.style.display = "block";
    
    // Animate cake to center (ensure you have the CSS class 'center' or 'show' set up)
    bdayCake.classList.add("show"); 
    
    // Play the local MP3 song here
    bdaySong.play();
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}
