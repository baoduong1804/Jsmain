
var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start();
setInterval(function(){
    getCourses(renderCourses);
},1000)
function getCourses(callback){
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function createCourse(data, callback){
    var options = {
        method: 'POST',
        headers: {//Để cho BE biết mong chờ điều gì
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
    .then(function(response){
        response.json();
    })
    .then(callback)
}

function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {//Để cho BE biết mong chờ điều gì
            'Content-Type': 'application/json'
        }
    }
    fetch(courseApi + '/' + id, options)
    .then(function(response){
        response.json();
    })
    .then(function(){
        getCourses(renderCourses)
    })
}

function renderCourses(courses){
var listCourseBlock = document.querySelector('#list-courses');

    var htmls = courses.map(function(course){
        return `<li>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick ="handleDeleteCourse(${course.id})" >Xóa</button>
                </li>`
    });
    listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name:name,
            description: description
        };
        createCourse(formData,function(){
            getCourses(renderCourses);
            getCourses(renderCourses);
        });
    }
}