// const openBtn =document.querySelector('.open');
// const closeBtn =document.querySelector('.close');
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
const listMusic =document.querySelector('.list-music');
const listMusicBtn =document.querySelector('.button-list-music');
const contentMusic = document.querySelector('.content');
const musicBars = document.querySelector('.music-bars-circle');
let isListMusicBtn = false;

var codeMusicBars = '<div class="music-bars-circle"><div class="bar bar1"></div><div class="bar bar2"></div><div class="bar bar3"></div><div class="bar bar4"></div></div></div></div>'
var getMusics = musics.map(musicList)
contentMusic.innerHTML=getMusics.join('');
function musicList(music,index){
    return `<div class="list list${index+1}" id="${index+1}">${index+1}. ${music.title}${codeMusicBars}<ion-icon name="heart" class="heart"></ion-icon>`
}
openClose();
listMusicBtn.onclick = openClose;
function openClose(){
    if(isListMusicBtn){
        listMusicBtn.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
        isListMusicBtn = false;
        listMusic.style.opacity = '1'
        musicBars.style.opacity = '1'
        console.log(1)
    } else{
        listMusicBtn.innerHTML = '<ion-icon name="list-circle-outline" class="open"></ion-icon>';
        isListMusicBtn = true;
        listMusic.style.opacity = '0'
        musicBars.style.opacity = '0'
    }
}




