///* String(chuỗi)
var myString = 'Hoc JS tai JS F8 JS';
//var languages ='Javascript, PHP, Ruby';
// console.log(myString.length); độ dài của chuối

// console.log(myString.indexOf('JS',6)); tìm vị trí của 'JS' trong chuỗi bắt đầu từ vị trí thứ 6
// console.log(myString.lastIndexOf('JS'));tìm 'JS' cuối cùng của chuỗi 
// console.log(myString.search('JS')); giống indexOf nhưng không có thông số thứ 2

// console.log(myString.slice(4,6)); căt chuỗi slice(vị trí đầu , vị trí cuối)

// console.log(myString.replace('JS','Javascript')); thay thế 'JS' đầu tiên trong chuỗi thành 'Javascript'
// console.log(myString.replace(/JS/g,'Javascript')); thay thế all 'JS' trong chuỗi thành 'Javascript'

// console.log(myString.toUpperCase());đổi chuỗi thành chữ viết Hoa
// console.log(myString.toLowerCase());đổi chuỗi thành chữ viết thường

// console.log(myString.trim()); loại bỏ khoản trắng trc và sau chuỗi

//console.log(languages.split(', '));//tách chuỗi thành array.Căt theo điểm chung là ', '.  split(''): tách từ chữ cái 

// console.log(myString.charAt(4));in ra kí tự trong chuỗi nếu ko trả ra chuỗi rỗng(string)
//console.log(myString[4]);//in ra kí tự trong chuỗi nếu ko trả ra undefined

///* Array(Mảng)
var languages =[
    'Javascript',
    'PHP',
    'Ruby'
]
var languages2 =[
    'Reactjs',
    'Vue'
]
// console.log(languages[2]); //in ra 'Ruby'(tri xuất mảng)
// console.log(Array.isArray(languages)); //kiểm tra có phải array ko
// console.log(languages.length);//in ra độ dài Array
// console.log(languages.toString()); //chuyển từ array sang chuỗi bằng dấu ','
// console.log(languages.join(', ')); //chuyển từ array sang chuỗi với ', ' ở giữa các element
// console.log(languages.pop()); //xóa element cuối mảng và trả về phần tử đã xóa
// console.log(languages.push('Python','Java')); //thêm các phần tử vào cuối mảng và trả về độ dài mới của mảng
// console.log(languages.shift()); //xóa element đầu mảng và trả về phần tử đã xóa
// console.log(languages.unshift('C++','C#'));//thêm các phần tử vào đầu mảng và trả về độ dài mới của mảng
// languages.splice(1,0,'Angular');//đưa con trỏ chuột đến trc vị trí elm=ts1, xóa số lượng = tst2 tính từ con trỏ chuột vê sau, thêm phần tử là tst3 trở đi
// console.log(languages.concat(languages2));//nối array1 với array2
// console.log(languages.slice(1,2));//căt mảng từ đầu tst1 --> đâu tst2,nếu chỉ có 1 thông số thì cắt đên hêt mảng
// console.log(languages)

///* Function( đối tượng)
// function writeLog(message,message2){
//     console.log(message)
//     console.log(message2)
//     console.log(arguments)// chuyển thành dạng array
// }
// function writeLog(){
//     var myString = '';
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// }//các phần tử nằm trên 1 dòng ngăn cách bởi dấu -
// writeLog('Python',1234,'CSS');
//Tính tổng
// function tong(a,b){
//     return a+b;
// }//ting tong
// var result = tong(5,2);
// console.log(result)
//Định nghĩa hàm trong hàm
// function show(){
//     function show2(){
//         console.log('message2')
//     }
//     show2()
// }
// show()

///* Object (đối tượng)
// var myInfor = {
//     name: 'Bao Duong',
//     age:19,
//     address:'Binh Dinh',
//     getName: function(){
//         return this.name0
//     }
// }
// //Function --> Phương thức(method),Others --> Thuộc tính(property)
// delete myInfor.age;//xóa key age
// myInfor.phone ='0339610933';//thêm key phone
// console.log(myInfor.address)//in ra Binh Dinh
// console.log(myInfor.getName());//in ra Bao Duong
///Object constructor(Hàm tạo "Khuông")
// function User(firstName, lastName, avatar){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.avatar=avatar;
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// var author = new User('Bao', 'Duong', 'Avatar1');
// var user = new User('Son', 'Dang', 'Avatar2');
// author.title='hi';
// user.comment='hello';
// ///Object prototype(thêm thuộc tinh ở bên ngoài hàm tạo )
// User.prototype.className ='F8';//thêm thuộc thính className vào User
// User.prototype.getClassName = function(){
//     return this.className;
// }//thêm phương thức getClassName vào User
// console.log(author.getClassName())
// console.log(user)
///Date
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth()+1;
// var day = date.getDate()
// var hour = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();
// var millisecond = date.getMilliseconds();
// console.log(`${day}/${month}/${year} ${hour}:${minute}:${second}:${millisecond}`)
///* Switch case
// var number= 5;
// switch(number){
//     case 1:
//     case 2:
//         console.log('la 1 or 2');
//         break;
//     case 3:
//         console.log('la 3');
//         break;
//     default:
//         console.log('khac');
// }
///* Loop (Vòng lặp)
//for/in: lặp qua key của đối tượng 
// //for(var key in languages){
//     console.log(key);}
//for/of: lặp qua value của đối tượng
///Continue
// for (var i=1;i<=10;i++){
//     if(i>2 && i<8){
//         continue;// true thì bỏ qua những code phía dưới và tiếp tục vòng lặp
//     }
//     console.log(i);
// }
///Nested loop(Vòng lặp lồng nhau)
// var myArray=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// for(var i=0;i<myArray.length;i++){
//     for(var j=0;j<myArray[i].length;j++)
//     console.log(myArray[i][j])
// }
var courses=[
    {
        id:1,
        name:'html',
        coin:0,
        isFinish:true 
    },
    {
        id:2,
        name:'CSS',
        coin:300,
        isFinish:true
    },
    {
        id:3,
        name:'Javscript',
        coin:500,
        isFinish:true
    }
]
// var isFree = courses.every(function(course,index){
//     return course.coin === 0;
// })
// console.log(isFree)
/*
forEach():duyệt qua
every():kiểm tra tất cả các phần tử(từ trên xuống) thỏa mãng đk j đó thì trả về true
some(): ngược với every() ,kiểm tra chỉ cần 1 phần thỏa mãng đk đó thi trả veed true
find():(chỉ trả về đc 1 phần tử) phần tử nào thỏa mãng dk(return true) đầu tiên courses sẽ trả về ptu đó
filter():(trả về all phần tử) phần tử nào thỏa mãng dk(return true) courses sẽ trả về các ptu đó
*/
///*map():lần 1 lấy element đầu tiên trong mảng truyền vào courseHandler(thực hiện code trong function courseHandler) --> course nhận đc thông số của element đó,sau đó lấy elm thứ 2 và tt như vậy.
//      function thứ n return j thì vị trí thứ n của newCourses nhận đc cái đó
// function courseHandler(course,index){
//     return {
//         id:course.id,
//         name:`khoa hoc:${course.name}`,
//         coin:course.coin,
//         index:index
//     }
// }
// var newCourses = courses.map(courseHandler);
// console.log(newCourses);
///*reduce()
/*
accumulator(biến lưu trữ):giá trị đầu tiên = gtri khởi tạo là 0,lượt function thứ n return cái j thì function thứ n+1 lưu trữ cái đó
currentValue:lượt chạy thứ n trả về object mới thứ n
currentIndex:currentValue -1
originArray: array gốc
*/
//Tính tổng coin trong courses
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     return accumulator + currentValue.coin//Giá trị cộng thêm
// }
// var totalCoin = courses.reduce(coinHandler,0);
// console.log(totalCoin)
//vd làm phẳng mảng
// var depthArray = [1,2,[3,4],5,6,[7,8,9]];
// var flatArray = depthArray.reduce(function(flatOutput,depthItem){
//     return flatOutput.concat(depthItem)
// },[])
// console.log(flatArray)
///includes(): kiểm tra 1 chuỗi có tồn tại trong 1 chuỗi, 1 phần tử có tồn tại trong 1 mảng hay ko , tst2 là vị trí bắt đầu tìm
// var title = 'Responsive web design'
// console.log(title.includes('Responsive',1))//băt đầu tìm từ 'e' -->false
// console.log(languages.includes('Javascript',0));//true
///*Math object
/*
- Math.PI: trả về số PI;
- Math.round(): làm tròn (>=.5 tăng 1 đơn vị);
- Math.abs():giá trị tuyệt đối;
- Math.ceil(): làm tròn trên (vd 1.0001 làm tròn = 2);
- Math.floor(): làm tròn dưới (vd 1.9999 làm tròn = 1);
- Math.random(): random ra 1 sô thập phân >0 and < 1;
- Math.min(): lấy ra số nhỏ nhất (console.log(Math.min(-100,50,15,80)); in ra là -100)
- Math.max(): lấy ra số lớn nhất
*/
// var grifs =[
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// for(var i=0;i<100;i++){
//     random = Math.floor(Math.random()*100);
// if(random<10){
//     document.write(`${'Cường hóa thành công lần thứ'} ${i} ${'<br/>'}`)
// } else {
//     console.log(`${'Chúc bạn may mắn lần sau lần thứ'} ${i}`)
// }
// }
// for(var i=0;i<10;i++){
//     console.log(grifs[Math.floor(Math.random()*5)])
// }
///*Callback function
// function myFunction(param){
//     param(123);
// }
// function myCallBack(value){
//     console.log('Value: ',value)
// }
// myFunction(myCallBack)

// function User(firstName,lastName,avatar){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.avatar=avatar;  
// }
// User.prototype.getName=function(){
//     return this.firstName
// }
// var Author= new User('bao','duong','123')
// console.log(Author.getName())
// function courseHanler(course){
//     return `<h2>${course.name}</h2>`
// }
// var newCourse=courses.map(courseHanler);
// console.log(newCourse.join(''))
// var courses =[
//     'Javascript','python','ruby'
// ]
/*
///Tự định nghĩa map()
Array.prototype.map2=function(callback){
    var mapLength= this.length
    var output=[];
    for(var i=0;i<mapLength;i++){
        var result=callback(this[i],i)
        output.push(result)
    }
    return output;
}
var htmls= courses.map2(function(course){
    return `<h2>${course}</h2>`
})
console.log(htmls.join(''))
*/

/*
///Tự định nghĩa forEach()
Array.prototype.forEach2=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            callback(this[index],index,this)
        }
    }
}
courses.forEach2(function(course,index,array){
    console.log(course,index,array)
})
*/
/*
///Tự định nghĩa filter()
Array.prototype.filter2 = function(callback){
    var output=[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this)
            if(result){
                output.push(this[index])
            }
        }
    }
    return output
}
var filterCourses = courses.filter2(function(course,index,array){
    return course.coin > 200
})
console.log(filterCourses)
*/
/*
///Tự định nghĩa some()
Array.prototype.some2 = function(callback){
    output=false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                output=true;
                break;
            }
        }
    }
    return output
}
var isFinishCourses = courses.some2(function(course,index,array){
    return course.isFinish //or course.isFinish === true
})
console.log(isFinishCourses)
*/
/*
///Tự định nghĩa every()
Array.prototype.every2 = function(callback){
    output=true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(!callback(this[index],index,this)){
                output=false;
                break;
            }
        }
    }
    return output
}
var allFinishCourses = courses.every2(function(course,index,array){
    return course.isFinish //or course.isFinish === true
})
console.log(allFinishCourses)
*/
/*
///Ko lăp lại trong mảng
var array =['a','b','e','a','b','d']
console.log([...new Set(array)])
*/
////*DOM Events
///*Get element,attribute,text
// var elementNode = document.getElementById('heading')
// elementNode.className = 'headingClass';// chỉ thêm được thuộc tính hợp lệ
// elementNode.setAttribute('data','123');// thêm đc thuộc tính không cần hợp lệ
// console.log(elementNode.getAttribute('data'))
// elementNode.innerText = 'New Heading'//thay đổi node text
// console.log(elementNode.innerText)//in ra console nhứng gì nhìn thấy trên viewport
// console.log(elementNode.textContent)//in ra những gì trong nodeElement bỏ qua các nodeElement

// var boxElement = document.querySelector('.box1');
// boxElement.innerHTML = '<h1>Add heading</h1>';//thêm vào trong box1
// console.log(boxElement.innerHTML);//lấy ra <h1>Add heading</h1>

// var boxElement = document.querySelector('.box2');
// boxElement.outerHTML = '<h1>Add heading</h1>'//ghi đè lên box2
// console.log(boxElement.outerHTML);// lấy ra <div class="box2"></div>

///*ClassList Property
// var cardElement = document.querySelector('.card');
// console.log(cardElement.classList)
// cardElement.classList.add('red','blue');//thêm class
// // cardElement.classList.remove('red');//xóa class
// console.log(cardElement.classList.contains('red'));//kiểm tra class có tồn tại hay ko(true or false)
// cardElement.classList.toggle('red');//nếu có class 'red' thì xóa, nếu ko có thì thêm vào
// setInterval(()=> {
//     cardElement.classList.toggle('red');
// },100);//làm chữ nhấp nháy
///DOM Evets
// var cardElement = document.querySelector('h1');
// var i=0;
// cardElement.onclick= function(e){
//     console.log(e.target)
// }

// var inputElement = document.querySelector('input[type="text"]')
// // inputElement.onchange = function(e){//thực thi khi value thay đổi
// //     console.log(e.target.value)
// // }
// inputElement.onkeyup = function(e){//thực thi khi nhất phím lên
//     //onkeydown: vẫn còn thực thi khi dữ phím
//     console.log(e.target.value)// lấy ra value nhập
//     console.log(e.which)//lấy ra number vủa phím đó
// }
// inputElement.oninput = function(e){//gõ đến đâu thì thực thi đến đó
//     console.log(e.target.value)
// }
// var tickElement = document.querySelector('input[type="checkbox"]')
// tickElement.onchange = function(e){
//     console.log(e.target.checked)//tick:true ; notick:false
// }
// var selectElement = document.querySelector('select')
// selectElement.onchange = function(e){
//     console.log(e.target.value)
// }

///*preventDefault(ngăn chặn hành vi mặc định)
// aElements = document.links;
// for(var i=0;i<aElements.length;i++){
//     aElements[i].onclick = function(e){
//         console.log(e.target.href);// nhấn vào thẻ a nào in ra href của thẻ a đó
//         //chỉ thực hiện hành vi mặc định của thẻ a nào có href bắt đầu bằng 'https://youtube.com' 
//         if(!e.target.href.startsWith('https://youtube.com')){
//         e.preventDefault();
//     }
//     }
// }

///*stopPropagation(ngăn chặn hành vi nổi bọt)
// document.querySelector('div').onclick =function(e){
//     console.log('DIV')
// }
// document.querySelector('button').onclick =function(e){
//     e.stopPropagation();//ngăn chặn hành vi nổi bọt
//     console.log('Click me!')
// }

// ///*JSON
// JSON.stringify( );//Từ Js types -> JSON
// JSON.parse( );//Từ JSON -> Js types

// //Promise
// //1.new Promise
// //2.Executor
// var promise = new Promise(
//     //Executor
//     function(resolve,reject){
//         //Logic
//         //Thành công:resolve()
//         //Thất bại: reject()
//     }
// );
// promise
//     //Khi thành công
//     .then(function(){
//         console.log()
//     })
//     //Khi thất bại
//     .catch(function(){
//         console.log()
//     })
//     //Cả khi thất bại hoặc thành công
//     .finally(function(){
//         console.log()
//     })