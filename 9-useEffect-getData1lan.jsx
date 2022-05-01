import { useState, useEffect } from "react";
import Content from "./Content";
function App() {
    const [mount, setMount] = useState(true);
    const [title, setTitle] = useState('');
    const [post, setPost] = useState([]);

    useEffect(() => {
        document.title = title;
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
                console.log(posts)
            })
    }, [])


    return (
        <div className="App">
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <button onClick={() => setMount(!mount)}>Toggle</button>
            {mount || <Content />}
            <ul>
                {post.map((element => {
                    return (
                        <li key={element.id}>{element.title}</li>
                    )
                }))}
            </ul>
        </div>
    );
}

export default App;

// 1. Tạo title mỗi khi gõ giá trị vào input
