// const audio1 = document.getElementById('audio1');
// const audio2 = document.getElementById('audio2');
// const audio3 = document.getElementById('audio3');
// const audio4 = document.getElementById('audio4');

// document.addEventListener('keydown', function(event) {
//     console.log(event)

//     if (event.keyCode == 65) {
//         audio1.play();
//     }
//     else if (event.keyCode == 83) {
//         audio2.play();
//     }
//     else if (event.keyCode == 68) {
//         audio3.play();
//     }
//     else if (event.keyCode == 70) {
//         audio4.play();
//     }
//     else {
//         console.log('Not Found');
//     }
// })

// 
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


