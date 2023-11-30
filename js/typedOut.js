const txt = 'Full-Stack Web Developer';
const speed = 50;
let i = 0;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('type').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}