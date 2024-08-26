const buttonShowAlert = document.getElementById("buttonShowAlert");
const buttonChangeBackground = document.getElementById("buttonChangeBackground");
const buttonCreateHeading = document.getElementById("buttonCreateH1");
const buttonPrompt = document.getElementById("buttonPrompt");
const buttonOpenModal = document.getElementById("buttonOpenModal");
const buttonChangeText = document.getElementById("buttonChangeText");
const buttonCreateCounter = document.getElementById("buttonCreateCounter");
const buttonCounterIncrement = document.getElementById("buttonCounterIncrement");
const buttonCounterDecrement = document.getElementById("buttonCounterDecrement");
const buttonPlaySound = document.getElementById("buttonPlaySound");
const buttonPlayVideo = document.getElementById("buttonPlayVideo");
const buttonClearBody = document.getElementById("buttonClearBody");


buttonShowAlert.addEventListener("click", () => {
    alert("Hello, World!");
});

buttonChangeBackground.addEventListener("click", () => {
    document.body.style.backgroundColor = "aquamarine";
});

buttonCreateHeading.addEventListener("click", () => {
    if (!document.querySelector("h1")) {
        const heading = document.createElement("h1");
        heading.textContent = "This is a heading";
        document.body.insertBefore(heading, buttonCreateHeading);
    }
});

buttonPrompt.addEventListener("click", () => {
    const result = prompt("What is your name?");
    alert(`Hello, ${result}!`);
});

buttonOpenModal.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.id = "modal";
    document.body.appendChild(modal);
    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#000";
    modal.style.width = "300px";
    modal.style.height = "200px";
    modal.style.borderRadius = "10px";
    modal.style.zIndex = "1";
});

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
        modal.remove();
        document.body.style.filter = "none";
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

buttonChangeText.addEventListener("click", () => {
    const heading = document.querySelector("h1");
    const newText = prompt("Enter new text for the heading:");
    if (newText) {
        heading.textContent = newText;
    }
});

buttonCreateCounter.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    if (!counter) {
        const newCounter = document.createElement("div");
        newCounter.id = "counter";
        const currentCount = 0;
        newCounter.textContent = `${currentCount}`;
        document.body.insertBefore(newCounter, buttonCreateCounter);
    }
});

buttonCounterIncrement.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    let currentCount = parseInt(counter.textContent);
    currentCount++;
    counter.textContent = `${currentCount}`;
});

buttonCounterDecrement.addEventListener("click", () => {
    const counter = document.getElementById("counter");
    let currentCount = parseInt(counter.textContent);
    currentCount--;
    counter.textContent = `${currentCount}`;
});

buttonPlaySound.addEventListener("click", () => {
    const audio = new Audio("./vine-boom.mp3");
    audio.play();
});

buttonPlayVideo.addEventListener("click", () => {
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/wsTv9y931o8?autoplay=1&mute=1";
  iframe.allowFullscreen = true;
  iframe.style.width = "100%";
  iframe.style.height = "400px";
  document.body.insertBefore(iframe, buttonPlayVideo);
});

buttonClearBody.addEventListener("click", () => {
    document.body.innerHTML = "";
});

// Taget fra en anden gruppe
const refreshButton = document.getElementById("refresh-button");
refreshButton.addEventListener("click", function () {
  location.reload();
});