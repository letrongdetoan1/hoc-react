import { useState, useEffect } from "react";
import Content from "./Content";
function App() {
    const [mount, setMount] = useState(true);
    return (
        <div className="App">
            <button onClick={() => setMount(!mount)}>Toggle</button>
            {mount || <Content />}
        </div>
    );
}

export default App;

// 1. Tạo title mỗi khi gõ giá trị vào input
