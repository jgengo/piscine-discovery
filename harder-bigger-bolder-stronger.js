export const generateLetters = () => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for (let i = 0; i < 120; i++) {
        let elem = document.createElement('div');
        elem.style.fontSize = (i+11)+'px';
        if (i < 40) {
            elem.style.fontWeight = "300"; 
        }
        else if (i < 80) {
            elem.style.fontWeight = "400"
        } else {
            elem.style.fontWeight = "600"
        }
        elem.textContent = alpha[Math.floor(Math.random() * alpha.length)];
        document.body.append(elem)
    }
}