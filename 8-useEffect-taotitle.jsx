import { useState, useEffect } from "react";
import Content from "./Content";
function App() {
    const [mount, setMount] = useState(true);
    const [title, setTitle] = useState('');
    
    useEffect(() => {
        document.title = title;
    })

    return (
        <div className="App">
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <button onClick={() => setMount(!mount)}>Toggle</button>
            {mount || <Content />}
            {console.log('dom')}
        </div>
    );
}

export default App;

// 1. Tạo title mỗi khi gõ giá trị vào input
