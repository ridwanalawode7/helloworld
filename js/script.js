setInterval(flashText, 500);

function flashText() {

    let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor1}`;
    document.querySelector('h1').style.color = `#${randomColor2}`;
}