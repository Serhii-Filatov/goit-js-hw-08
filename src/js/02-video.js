import Player from '@vimeo/player';
import _ from 'lodash';

const player = new Player('vimeo-player');
const lodash = _; 
const currentTime = localStorage.getItem("videoplayer-current-time");;

player.setCurrentTime(currentTime).then(function(seconds) {    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':           
            break;

        default:            
            break;
    }
});

player.on('timeupdate', lodash.throttle(
    function (data) {
    console.log(Math.trunc(data.seconds));
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));
