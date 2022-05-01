import { useState, useEffect } from "react";
let count = 1;
const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState([]);
    const [type, setType] = useState('posts');

    console.log(type);
    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
            })
        console.log(++count, 'Effect')
    }, [type])

    return (
        <div>
            {tabs.map((tab) => {
                return <button key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            })}
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <ul>
                {post.map((element => {
                    return (
                        <li key={element.id}>{element.title || element.name}</li>
                    )
                }))}
            </ul>
            {console.log(++count, 'dom')}
        </div>
    )
}

export default Content

// 1. Get nhieu tab