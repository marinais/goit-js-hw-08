
import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const savedTime = "videoplayer-current-time"


function playOn (currentTime) {
localStorage.setItem(savedTime, currentTime.seconds)
console.log("currentTime", currentTime.seconds)
}

player.on('timeupdate', throttle(playOn, 1000));
player.setCurrentTime(localStorage.getItem(savedTime))
console.log(savedTime)
