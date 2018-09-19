const play = (e) => {
    const audio = document.querySelector(`audio[data-keycode="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-keycode = '${e.keyCode}']`)

    if(!audio) {return};

    audio.play();
    audio.currentTime = 0;

    key.classList.add('anim');
}

window.addEventListener('keydown', play);

const keys = Array.from(document.querySelectorAll('.key'));

const removeTransition = (e) => {
    if (!e.propertyName) {return};
    console.log(e);
    e.target.classList.remove('anim');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))


