const container = document.getElementById("container");
const image1 = document.querySelector(".image-1");
const image2 = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const mydetails=document.querySelector(".mydetails")
const Afteryes=document.querySelector(".Afteryes")
const before_yes=document.querySelector(".before_yes")

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

btnNo.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;

    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
});
function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}
btnYes.addEventListener("click",(e)=>{
    btnNo.classList.add("hide");
    image1.classList.add("hide");
    image2.classList.remove("hide");
    mydetails.classList.remove("hide");
    playAudio();


})



document.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector("audio");
    if (audio) {
        audio.volume = 0.30; // Adjust volume here
    }
});