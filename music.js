
const song = document.querySelector('#song');
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
const repeatBtn = document.querySelector('.play-repeat');
const shuffleBtn = document.querySelector('.play-shuffle');
const musicBox  =document.querySelector('.music');
// const infiniteBtn = document.querySelector('.play-infinite');
const listMusic =document.querySelector('.list-music');
const listMusicBtn =document.querySelector('.button-list-music');
const contentMusic = document.querySelector('.content');
const musicBars = document.querySelector('.music-bars-circle');

let isPlaying =true;
let isRepeat = false;
let isInfinite = false;
var indexMusic = 0;
let isBgImage = true;
let isBgColor = 1;
let isListMusicBtn = false;
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
        title:'Nắng ấm xa dần',
        file:'Nang-Am-Xa-Dan-MTP.mp3',
        image:'https://media.doisongvietnam.vn/u/rootimage/editor/2020/05/02/20/56/w825/max1588406160_7745.jpg'
    },
    {
        id:9,
        title:'Thằng điên',
        file:'Thang-Dien.mp3',
        image:'https://4.bp.blogspot.com/-jVjd6ftMFHs/W-z1vN5bbpI/AAAAAAAARN0/4zRTHj5Ly_MFsfUpJKWFqhFvGkOBG_4lACLcBGAs/s1600/startuanit--thang-dien.jpg'
    },
    {
        id:10,
        title:'Lời anh chưa thể nói',
        file:'Loi-Anh-Chua-The-Noi.mp3',
        image:'https://i.ytimg.com/vi/yfpiynLlcDA/maxresdefault.jpg'
    },
    {
        id:11,
        title:'Em của ngày hôm qua',
        file:'Em-Cua-Ngay-Hom.mp3',
        image:'https://loretofest.org/cdn/files/loi-bai-hat-em-cua-ngay-hom-qua.jpg'
    },
    {
        id:12,
        title:'Bắt cóc con tim',
        file:'Bat-Coc-Con-Tim.mp3',
        image:'https://img.theinfluencer.vn/thumbs/1200_630/uploads/2022/07/M0ZbrnkF3OR7RwfdEa4cRj4QLKKO49dCQaZZbTNx.png'
    },
    {
        id:13,
        title:'Thằng hầu',
        file:'Thang-Hau.mp3',
        image:'https://i.ytimg.com/vi/Ra0Ist7dO_Y/maxresdefault.jpg'
    },
    {
        id:14,
        title:'Cơn mưa ngang qua',
        file:'Con-Mua-Ngang-Qua.mp3',
        image:'https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/10/8/photo-1-1665216582775798055371.jpg'
    },
    {
        id:15,
        title:'Yêu 5',
        file:'Yeu-5.mp3',
        image:'https://tainguyen24h.com/wp-content/uploads/2020/05/yeu-5-1.jpg'
    },
    {
        id:16,
        title:'Đã lỡ yêu em nhiều',
        file:'Da-Lo-Yeu-Em-Nhieu.mp3',
        image:'https://bdkhtravinh.vn/nguoi-yeu-oi-co-biet-em-da-yeu-anh-rat-nhieu/imager_26309.jpg'
    }
];
let isShuffle =false;
shuffleBtn.onclick =function(){
    if(isShuffle){
     shuffleBtn.removeAttribute('style');
     isShuffle =false;
    } else {
     isShuffle =true;
     shuffleBtn.style.color = '#008b85';
    }
}
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
// infiniteBtn.onclick =function(){
//    if(isInfinite){
//     infiniteBtn.removeAttribute('style');
//     isInfinite =false;
//    } else {
//     isInfinite =true;
//     infiniteBtn.style.color = '#008b85';
//    }
// }
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
    document.querySelector(`.list${indexMusic+1}`).removeAttribute('style');
    ++indexMusic;
    if(indexMusic == musics.length){
        indexMusic = 0;
    }
    init(indexMusic);
}
//Xử lý khi ấn nút Play Back
prevBtn.onclick = function(){
    document.querySelector(`.list${indexMusic+1}`).removeAttribute('style');
    --indexMusic;
    if(indexMusic==-1){
        indexMusic = musics.length-1;
    };
    init(indexMusic);
}
//Qua bài mới khi kết thúc
song.onended = function(){
    var indexMusicOld =indexMusic;
    document.querySelector(`.list${indexMusic+1}`).removeAttribute('style');
    if(!isRepeat){
        if(isShuffle){//Phát bài ngẫu nhiên ko trùng bài trc đó
            do{
                indexMusic=Math.floor(Math.random()*musics.length);
            } while (indexMusicOld==indexMusic);
        } else {
            ++indexMusic;
            //Chuyển đến bài đầu tiên nếu hết bài cuối cùng
            if(indexMusic==musics.length){
                indexMusic=0;
        }
        }
    } else {//Xử lý repeat 1 bài 1 lần(ko thay đổi indexMusic)
        isRepeat= false;
        repeatBtn.removeAttribute('style');
    }
    // Xử lí lặp lại vô hạn music list
    // if(isInfinite && indexMusic==musics.length){
    //         indexMusic=0;
    // } else if(!isInfinite && indexMusic==musics.length){
    //     --indexMusic;
    //     playPause();
    // }

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
    
    var listSong= document.querySelectorAll(`.list`);
    for(var i=0;i<listSong.length;i++){
        listSong[i].onclick = anyListMusic;
    };
    document.querySelector(`.list${indexMusic+1}`).style.background ='greenyellow';
    displayTimer();
    song.setAttribute('src',`music/${musics[indexMusic].file}`);
    musicImage.setAttribute('src',musics[indexMusic].image);
    musicName.textContent = musics[indexMusic].title;
    exchange();
    playPause();
}
anyListMusic = function(e){
    document.querySelector(`.list${indexMusic+1}`).removeAttribute('style');
    indexMusic= e.target.id-1;
    init(indexMusic);
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
        changeBgColor.style.background = 'linear-gradient(to right bottom ,greenyellow, skyblue, pink,yellow)'
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
//Lấy danh sách phát
var codeMusicBars = '<div class="music-bars-circle"><div class="bar bar1"></div><div class="bar bar2"></div><div class="bar bar3"></div><div class="bar bar4"></div></div></div></div>'
var getMusics = musics.map(musicList)
contentMusic.innerHTML=getMusics.join('');
function musicList(music,index){
    return `<div class="list list${index+1}" id="${index+1}">${index+1}. ${music.title}${codeMusicBars}`
}
openClose();
//Bật tắt nút mở listMusic
listMusicBtn.onclick = openClose;
function openClose(){
   if(isListMusicBtn){
       listMusicBtn.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
       isListMusicBtn = false;
       listMusic.style.opacity = '1';
       contentMusic.style.height = '180px';
   } else{
        contentMusic.removeAttribute('style');
       listMusicBtn.innerHTML = '<ion-icon name="list-circle-outline" class="open"></ion-icon>';
       isListMusicBtn = true;
       listMusic.style.opacity = '0';
   }
}
console.log(musicBars)
init(indexMusic);