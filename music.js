
const song = document.getElementById("song");
const playBtn = document.querySelector('.player-inner');
const nextBtn = document.querySelector('.play-forward');
const prevBtn = document.querySelector('.play-back');
const durationTime = document.querySelector('.duration');
const remainingTime = document.querySelector('.remaining');
const rangeBar = document.querySelector('.range');
const musicName = document.querySelector('.music-name');
const musicImage = document.querySelector('.music-thumb img');
const changeBgImage = document.querySelector('.change-bg-img');
const changeBgColor = document.querySelector('.change-bg-color');
const body = document.querySelector('body');
const infiniteBtn = document.querySelector('.play-infinite');
const repeatBtn = document.querySelector('.play-repeat');
const musicBox  =document.querySelector('.music');
let isPlaying =true;
let isRepeat = false;
let isInfinite = false;
var indexMusic = 0;
let isBgImage = true;
let isBgColor = 1;
//List bài hát
const musics =[
    {
        id:1,
        title:'Đến để đi',
        file:'De-Den-De-Di.mp3',
        image:'https://img.theinfluencer.vn/thumb_w/850/uploads/2021/10/li4JR5EBvckEWNhAXvkte85DXPUQRqvwZddhvAS1.png'
    },
    {
        id:2,
        title:'Tình yêu ngủ quên',
        file:'Tinh-Yeu-Ngu-Quen.mp3',
        image:'https://i.ytimg.com/vi/eukA1NGSM5w/maxresdefault.jpg'
    },
    {
        id:3,
        title:'Gác lại Âu lo',
        file:'Gac-Lai-Au-Lo.mp3',
        image:'https://photo-cms-tpo.zadn.vn/600x315/Uploaded/2022/qqc_wqdun/2020_07_23/da_lab_miu_le_CQBP.png'
    },
    {
        id:4,
        title:'Nụ cười em là nắng',
        file:'Nu-Cuoi-Em-La-Nang.mp3',
        image:'https://i.ytimg.com/vi/EsVgzTJf4TA/maxresdefault.jpg'
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
    },
    {
        id:8,
        title:'Holo',
        file:'holo.mp3',
        image:'https://d34ojwe46rt1wp.cloudfront.net/wp-content/uploads/2020/04/san-holo.jpg'
    },
    {
        id:9,
        title:'Ngày đầu tiên',
        file:'Ngay-Dau-Tien.mp3',
        image:'https://i.ytimg.com/vi/rIXhXaQ8tiM/maxresdefault.jpg'
    },
    {
        id:10,
        title:'Lời anh chưa thể nói',
        file:'Loi-Anh-Chua-The-Noi.mp3',
        image:'https://i.ytimg.com/vi/yfpiynLlcDA/maxresdefault.jpg'
        // image:'https://i.ytimg.com/vi/IagHzELYX6U/maxresdefault.jpg'
    }
]
//Hoán đổi isPlaying
function exchange(){
    if(isPlaying){
        isPlaying=false;
    }else{
        isPlaying=true;
    }
}
//Hoán đổi isRepeat,thay đổi màu khi ấn play-repeat
repeatBtn.onclick =function(){
    if(isRepeat){
     repeatBtn.removeAttribute('style');
     isRepeat =false;
    } else {
     isRepeat =true;
     repeatBtn.style.color = '#6103f7ab';
    }
}
//Hoán đổi isInfinite,thay đổi màu khi ấn play-infinite
infiniteBtn.onclick =function(){
   if(isInfinite){
    infiniteBtn.removeAttribute('style');
    isInfinite =false;
   } else {
    isInfinite =true;
    infiniteBtn.style.color = '#008b85';
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
    //Xử lý repeat 1 bài 1 lần
    if(!isRepeat){
        ++indexMusic;
    } else {
        isRepeat= false;
        repeatBtn.removeAttribute('style');
    }
    // Xử lí lặp lại vô hạn music list
    if(isInfinite && indexMusic==musics.length){    
            indexMusic=0;
    } else if(!isInfinite && indexMusic==musics.length) {
        --indexMusic;
        playPause();
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
    remainingTime.textContent = formatTimer(currentTime);
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
//Thay đổi background Image
changeBgImage.onclick = function(){
    if(isBgImage){
        body.setAttribute('background',musics[indexMusic].image);
        isBgImage = false;
    } else {
        body.removeAttribute('background');
        isBgImage = true;
    }
}
//Thay đỏi background black or white or colorful
changeBgColor.onclick = function(){
    if(isBgColor==1){
        changeBgColor.removeAttribute('style');
        musicBox.classList.add('music-black');//màu đen
        musicName.classList.add('music-name-green');
        changeBgColor.classList.add('music-colorful');
    } else if(isBgColor==2) {
        changeBgColor.removeAttribute('style');
        musicBox.classList.remove('music-black');
        musicBox.classList.add('music-colorful');//màu colorful
        musicName.classList.remove('music-name-green');
        changeBgColor.style.background = 'white';
    }else if(isBgColor==3) {
        changeBgColor.removeAttribute('style');
        musicBox.classList.remove('music-colorful');
        musicName.classList.remove('music-name-green');
        changeBgColor.style.background = '#000000a9';
    }
    if(isBgColor<3){
        ++isBgColor
    } else {
        isBgColor =1;
    }
}
init(indexMusic)