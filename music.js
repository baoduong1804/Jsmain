
const song = document.getElementById("song");
const playBtn =document.querySelector('.player-inner');
const nextBtn =document.querySelector('.play-forward');
const prevBtn =document.querySelector('.play-back');
const durationTime = document.querySelector('.duration');
const remainingTime = document.querySelector('.remaining');
const rangeBar = document.querySelector('.range');
const musicName = document.querySelector('.music-name');
const musicImage = document.querySelector('.music-thumb img');
const changeBg = document.querySelector('.change-bg-img');
const changeBgWhite = document.querySelector('.change-bg-white');
const body = document.querySelector('body');
//Danh sách phát
const musics =[
    {
        id:1,
        title:'Holo',
        file:'holo.mp3',
        image:'https://d34ojwe46rt1wp.cloudfront.net/wp-content/uploads/2020/04/san-holo.jpg'
    },
    {
        id:2,
        title:'Summer',
        file:'summer.mp3',
        image:'https://i.ytimg.com/vi/4loUFomAgck/maxresdefault.jpg'
    },
    {
        id:3,
        title:'Tình yêu ngủ quên',
        file:'Tinh-Yeu-Ngu-Quen.mp3',
        image:'https://i.ytimg.com/vi/eukA1NGSM5w/maxresdefault.jpg'
    },
    {
        id:4,
        title:'Gác lại Âu lo',
        file:'Gac-Lai-Au-Lo.mp3',
        image:'https://photo-cms-tpo.zadn.vn/600x315/Uploaded/2022/qqc_wqdun/2020_07_23/da_lab_miu_le_CQBP.png'
    },
    {
        id:5,
        title:'Có hẹn với thanh xuân',
        file:'co-hen-voi-thanh-xuan.mp3',
        image:'https://i.ytimg.com/vi/bR38ZicMZWg/maxresdefault.jpg'
    },
    {
        id:6,
        title:'Anh luôn là lý do',
        file:'Anh-Luon-La-Ly-Do.mp3',
        image:'https://i.ytimg.com/vi/1PQU1n6nMq8/maxresdefault.jpg'
    },
    {
        id:7,
        title:'Bỏ em vào Balo',
        file:'Bo-Em-Vao-Balo.mp3',
        image:'https://i.ytimg.com/vi/FW5aNm9cx9A/maxresdefault.jpg'
    }
]
let isPlaying =true;
var indexMusic = 0;
//Hoán đổi isPlaying
function exchange(){
    if(isPlaying){
        isPlaying=false;
    }else{
        isPlaying=true;
    }
}
//Xử lý khi ấn nút Play
playBtn.addEventListener('click',playPause);
function playPause(){
    if(isPlaying){
        song.play();//nhạc chạy
        isPlaying=false;
        playBtn.innerHTML = `<ion-icon name="pause"></ion-icon>`;
        musicImage.parentElement.classList.add('isplaying');
    }else{
        song.pause();//nhạc dừng
        isPlaying=true;
        playBtn.innerHTML = `<ion-icon name="play" class="play-icon"></ion-icon>`;
        musicImage.parentElement.classList.remove('isplaying');
    }
}
//Xử lý khi ấn nút Play Forward
nextBtn.onclick = function(){
    ++indexMusic;
    if(indexMusic == musics.length){
        indexMusic = 0;
    }
    init(indexMusic);
}
//Xử lý khi ấn nút Play Back
prevBtn.onclick = function(){
    --indexMusic;
    if(indexMusic==-1){
        indexMusic = musics.length-1;
    };
    init(indexMusic);
}
//Qua bài mới khi kết thúc
song.onended = function(){
    ++indexMusic;
    if(indexMusic==musics.length){
        indexMusic=0;
    }
    init(indexMusic);
}
//Xử lý thời gian nhạc
function displayTimer(){
const {duration ,currentTime} = song;
//duration là tổng thời lượng nhạc
//currentTime là thời lượng bài hát đang chạy
    rangeBar.max = duration;
    rangeBar.value = currentTime;
    remainingTime.textContent = formatTimer(currentTime)
    durationTime.textContent = formatTimer(Math.floor(duration)-Math.floor(currentTime));
}
setInterval(displayTimer,300);
//Xử lý thời lượng nhạc thành phút:giây
function formatTimer(number){
    const minutes = Math.floor(number/60);
    const seconds = Math.floor(number - minutes*60);
    return `${minutes < 10 ? '0'+minutes:minutes}:${seconds < 10 ? '0'+seconds:seconds}`
}
//Tua nhạc
rangeBar.oninput = function(){
        song.currentTime = rangeBar.value;
}
//Thay đổi nhạc,ảnh và tên
function init(indexMusic){
    displayTimer();
    song.setAttribute('src',`music/${musics[indexMusic].file}`);
    musicImage.setAttribute('src',musics[indexMusic].image);
    musicName.textContent = musics[indexMusic].title;
    exchange();
    playPause();
}
//Thay đổi background
changeBg.onclick = function(){
    body.setAttribute('background',musics[indexMusic].image);
}
changeBgWhite.onclick = function(){
    body.removeAttribute('background');
}
