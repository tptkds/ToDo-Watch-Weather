const dateContainer = document.querySelector(".js-date");
const h1date = dateContainer.querySelector(".date");
const h1time = dateContainer.querySelector(".time");

function getDate(){
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    h1time.innerText = `${hours < 10 ?`0${hours}`:hours}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`;
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    h1date.innerText = `${year}년${month<10?`0${month}`:month}월${day<10?`0${day}`:day}일`;

}

function init(){
    getDate();
    setInterval(getDate,1000);
}

init();