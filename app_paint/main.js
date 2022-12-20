const colorBtn = document.querySelector('#color')
const eraserBtn = document.querySelector('.eraser');
const decreaseBtn = document.querySelector('.decrease');
const sizeBtn = document.querySelector('.size');
const increaseBtn = document.querySelector('.increase');
const saveBtn= document.querySelector('.save');
const clearBtn = document.querySelector('.clear');
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let colorPaint ='#000000';
let lineSize =10;
sizeBtn.innerText =lineSize

let p
let pos1={
    x:0,
    y:0
}

let pos2={
    x:0,
    y:0
}

let isDarwing =false

canvas.addEventListener('mousedown',e=>{
    pos1={
        x:e.offsetX,
        y:e.offsetY
    }
    isDarwing =true;
})

canvas.addEventListener('mousemove',e=>{
   if(isDarwing){
    pos2={
        x:e.offsetX,
        y:e.offsetY
    }
    ctx.beginPath();
    ctx.arc(pos1.x, pos1.y, lineSize/2, 0, 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(pos1.x, pos1.y);
    ctx.lineTo(pos2.x, pos2.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = lineSize;
    ctx.stroke();
    pos1.x = pos2.x
    pos1.y = pos2.y
   }

})

canvas.addEventListener('mouseup',e=>{
    isDarwing =false;
});

colorBtn.onchange = e =>{
    colorPaint = e.target.value
}

eraserBtn.onclick = e =>{
    colorPaint = '#ffffff';
    colorBtn.onclick = e =>{
        colorPaint = e.target.value
    }
}

decreaseBtn.onclick =()=>{
    if(lineSize>5){
        lineSize -=5;
        sizeBtn.innerText =lineSize
    }
}

increaseBtn.onclick =()=>{
    if(lineSize<30){
        lineSize +=5;
        sizeBtn.innerText =lineSize
    }
}

clearBtn.onclick =()=>{
    let canvasStats = canvas.getClientRects()[0];
    ctx.clearRect(0,0,canvasStats.width,canvasStats.height)
}

saveBtn.onclick =()=>{
    let nameFile = prompt('Lưu với tên');

    console.log(nameFile)
    if(nameFile){
        saveBtn.setAttribute('download',nameFile + '.png');
        let output = canvas.toDataURL('image/png');
        saveBtn.setAttribute('href',output)
    }
   
   
}