

const song = document.getElementById("song");
const playBtn =document.querySelector('.player-inner');
const nextBtn =document.querySelector('.play-forward');
const prevBtn =document.querySelector('.play-back');
const musics =['saveMe.mp3','holo.mp3','spark.mp3','summer.mp3'];
let isPlaying =true;
var indexMusic = 0;
playBtn.addEventListener('click',playPause);
function playPause(){
    if(isPlaying){
        song.play();
        isPlaying=false;
        playBtn.innerHTML = `<ion-icon name="pause"></ion-icon>`;
    }else{
        song.pause();
        isPlaying=true;
        playBtn.innerHTML = `<ion-icon name="play" class="play-icon"></ion-icon>`;
    }
}
nextBtn.onclick = function(){
    ++indexMusic;
    if(indexMusic == musics.length){
        indexMusic = 0;
    }
    song.setAttribute('src',`music/${musics[indexMusic]}`);
    console.log(indexMusic);
    if(isPlaying){
        isPlaying=false;
    }else{
        isPlaying=true;
    }
    playPause();
}
prevBtn.onclick = function(){
    --indexMusic;
    if(indexMusic==-1){
        indexMusic = musics.length-1;
    }
    
    song.setAttribute('src',`music/${musics[indexMusic]}`);
    console.log(indexMusic);
    if(isPlaying){
        isPlaying=false;
    }else{
        isPlaying=true;
    }
    playPause()
}




