let open = true;
const button = document.querySelector('button');
const eyeLeft = document.getElementById("eye-left");

button.addEventListener('click', event => {
    open = !open;
    button.textContent = open ? "Click to close the left eye" : "Click to open the left eye";
    eyeLeft.classList.toggle("eye-closed");
    eyeLeft.style.backgroundColor = open ? "orange" : "black";
});