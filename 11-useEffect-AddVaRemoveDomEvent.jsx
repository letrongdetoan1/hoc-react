import { useState, useEffect } from "react";
let count = 1;
const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState([]);
    const [type, setType] = useState('posts');
    const [scrollGoToTop, setscrollGoToTop] = useState(false);

    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
            })
    }, [type])

    useEffect(() => {
        function handleScroll() {
            setscrollGoToTop(window.scrollY > 200);
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)

        }
    }, [])

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
            {scrollGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px'
                    }
                    }
                >
                    Gototop
                </button>}
        </div>
    )
}

export default Content

// 1. Tạo gototop add và xóa bỏ DOM event