'use strict';

const buttons = document.querySelectorAll('[data-audio]');
const mainButton = document.querySelector('.main__button')
const main = document.querySelector('.main');
const audio = new Audio();
let isPlay = false;

buttons.forEach(item => item.addEventListener('click', playAudio));

function playAudio() {
    const src = this.dataset.audio;

    audio.src = `assets/audio/${src}`;
    audio.currentTime = 0;

    if (this.classList.contains('main__button') && isPlay) {
        audio.pause();
        mainButton.style.backgroundImage = 'url(assets/img/play.svg)';
        isPlay = false;
    } else if (this.classList.contains('main__button') && !isPlay) {
        audio.play();
        isPlay = true;
        mainButton.style.backgroundImage = 'url(assets/img/pause.svg)';
    } else if (!isPlay || isPlay) {
        audio.play();
        mainButton.style.backgroundImage = 'url(assets/img/pause.svg)';                       //Поменяли кнопку
        let thisBG = document.querySelector(`.main__content--${src}`.replace(/\.mp3/, ''));  //нашли нужный див, который нужно активировать
        document.querySelectorAll('.main__content').forEach(item => item.classList.remove('main__content--active'));
        thisBG.classList.add('main__content--active')
        isPlay = true;
    }
}



