const body = document.querySelector("body");
const IMG_NUM = 4;

function paintImage(num){
    const image = new Image();
    image.classList.add("bgImage");
    image.src = `./image/${num}.jpg`;
    body.appendChild(image);
}

function genRandomNum(){
    return Math.ceil(Math.random() * IMG_NUM);
}

function init(){
    const num = genRandomNum();
    console.log(num);
    paintImage(num);
}

init();