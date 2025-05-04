const hero = document.querySelector('.hero');
const button3 = document.querySelectorAll('.button3');
let number;

for (let i = 0; i < button3.length; i++) {
    button3[i].addEventListener("click", function(){
        number = i + 1;
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.setAttribute('src', `hero/${number}.png`);
        }, 400);
    });
}
const creator = document.querySelector('.creatorVideo');
const button4 = document.querySelectorAll('.button4');
const link = ["https://www.youtube.com/embed/H9TDZUc4_PQ", "https://www.youtube.com/embed/A8qQDvdHp7I", "https://www.youtube.com/embed/V_m-BN3zq7o", "https://www.youtube.com/embed/v4FXD0duPdk", "https://www.youtube.com/embed/UZMgNRoj9oI"];

for (let i = 0; i < button3.length; i++) {
    button4[i].addEventListener("click", function(){
        number = i + 1;
        creator.style.opacity = '0';
        setTimeout(() => {
            creator.style.opacity = '1';
            creator.setAttribute('src', `${link[i]}`);
        }, 400);
    });
}