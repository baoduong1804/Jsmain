const container = document.getElementById('root');
//const h1React = React.createElement('h1',{
//   title: 'hello',
//    className: ' heading'
//},'hihhihihi');

// const courses = [
// {
//     name:'html,css'
// },
// {
//     name:'responsive web design'
// },
// {
//     name:'reactjs'
// }]
// const ul = <ul>
//     {courses.map(item =>{
//         return <li>{item.name}</li>
//     })}
// </ul>
//Component
function Header() {
    return (
        <div className="header">Header</div>
    )
}

class Content extends React.Component {
    render() {
        return (
            <div className="content">content</div>
        )
    }
}

// function App(){
//     return (
//         <div className="wrapper">
//             <Header/>
//             <Content/>
//         <div className="footer">Footer</div>
//         </div>
//     )
// }


const courses = [
    {
        "id": 15,
        "title": "HTML CSS Pro",
        "slug": "htmlcss",
        "description": "Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi.",
        "image": "courses/15/62f13d2424a47.png",
        "icon": "courses/15/62385d6c63dfa.png",
        "video_type": "upload",
        "video": null,
        "old_price": 2499000,
        "price": 1299000,
        "pre_order_price": 699000,
        "students_count": 2208,
        "is_pro": true,
        "is_coming_soon": false,
        "is_selling": true,
        "published_at": "2022-08-18T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
        "video_url": "",
        "landing_page_url": "/landing/htmlcss",
        "is_pre_order": false,
        "is_published": true
    },
    {
        "id": 19,
        "title": "JavaScript Pro",
        "slug": "javascript-pro",
        "description": "Khóa học JavaScript Pro",
        "image": "courses/19/62f13cb607b4b.png",
        "icon": "courses/19/62f13cb685c81.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-04-30T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
        "video_url": "",
        "landing_page_url": "/landing/javascript-pro",
        "is_pre_order": false,
        "is_published": true
    },
    {
        "id": 20,
        "title": "ReactJS Pro",
        "slug": "reactjs-pro",
        "description": "Khóa học ReactJS Pro",
        "image": "courses/20/62f13dded314e.png",
        "icon": "courses/20/62f13ddf5e7f9.png",
        "video_type": "upload",
        "video": null,
        "old_price": 0,
        "price": 0,
        "pre_order_price": 0,
        "students_count": 0,
        "is_pro": true,
        "is_coming_soon": true,
        "is_selling": false,
        "published_at": "2023-07-31T17:00:00.000000Z",
        "is_registered": false,
        "user_progress": 0,
        "last_completed_at": null,
        "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png",
        "icon_url": "https://files.fullstack.edu.vn/f8-prod/courses/20/62f13ddf5e7f9.png",
        "video_url": "",
        "landing_page_url": "/landing/reactjs-pro",
        "is_pre_order": false,
        "is_published": false
    }
]

// function PostItem (props){
//     return (
//         <div className="post-item">
//             <img 
//                 src={props.image}
//                 alt={props.alt}
//             />
//             <label htmlFor="input">Input</label>
//             <input id="input"/>
//             <h2 className="post-title">{props.title}</h2>
//             <p className="post-description">{props.desc}</p>
//         </div>
//     )
// }


// function App(){
//     return (
//         <div id="wrapper">
//             <PostItem 
//                 image = "https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
//                 title = "Reactjs"
//                 alt = "image"
//                 desc = "khóa học reactjs F8"
//             />
//             <PostItem 
//                 image = "https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
//                 title = "2 Reactjs"
//                 alt = "2 image"
//                 desc = "2 khóa học reactjs F8"
//             />
//         </div>
//     )
// }

///render Courses
// const Form ={
//     Input(){
//         return <input/>
//     },
//     CheckBox(){
//         return <input type="checkBox" />
//     }
// }

// function CourseItem({ course, onClick }) {
//     return(
//         <div>
//             <h2
//             onClick={()=> onClick(course)}
//             >
//                 {course.title}
//             </h2>
//             <img src={course.image_url} />
//             <p>{course.description}</p>
//         </div>
//     )
// }

// function App() {
//     const handleClick = (course) => {
//         console.log(course.title)
//     }
//     const type = 'Input';
//     const Component = Form[type];
//     return (
//         <div id="wrapper">
//             <Component/>
//             {courses.map(course => (
//                 <CourseItem
//                     key={course.id}
//                     course={course}
//                     onClick={handleClick}
//                 />
//             ))
//             }</div>
//     )
// }

///Button or href // Ứng dụng spread,rest.
function Button({title,href,onClick}){
    let Component = 'button';
    const props = {};
    if(href){
        Component = 'a';
        props.href = href;
    }
    if(onClick){
        props.onClick = onClick;
    }
    console.log(props)
    return(
        <Component {...props}>{title}</Component>
    )
}

function Input({label,...inputProps}){
    return(
        <div>
            <label>{label}</label>
            <input {...inputProps}/>
        </div>
    )
}

function App(){
    return(
        <div id="wrapper">
           <Button
                title="Click me"
                href="https://monkeytype.com/"   
                onClick={()=>console.log(Math.random())} 
           />
           <Input
                label="Full name"
                placeholder="Enter Name"
                title = "Name"
                type = "input"
                onFocus = {()=>{console.log(Math.random())}}
           />
        </div>
    )
}


const root = ReactDOM.createRoot(container)
root.render(<App />)

