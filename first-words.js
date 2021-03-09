let open = true;
const button = document.querySelector('button');
const speak = document.getElementById('speak-button')
const eyeLeft = document.getElementById("eye-left");

button.addEventListener('click', () => {
    open = !open;
    button.textContent = open ? "Click to close the left eye" : "Click to open the left eye";
    eyeLeft.classList.toggle("eye-closed");
    eyeLeft.style.backgroundColor = open ? "orange" : "black";
});

speak.addEventListener('click', () => {
    const newElem = document.createElement("div");
    newElem.textContent = "Hello there!";
    newElem.className = 'words';
    document.getElementById("torso").append(newElem);
})