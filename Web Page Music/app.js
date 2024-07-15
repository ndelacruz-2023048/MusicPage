const audio = document.querySelector('audio');
const detectar = document.getElementsByClassName('desplegables_texto');


const playPause = document.getElementById('PlayPause');
playPause.addEventListener('click', () => {
    if (audio.paused) {
        playPause.src = 'img/pause-64.png';
        audio.play();
    } else {
        playPause.src = 'img/play-64.png';
        audio.pause();
    }
});

