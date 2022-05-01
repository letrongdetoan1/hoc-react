import { useState } from "react";

function App() {
    const [mount, setMount] = useState(true );
    function Mounted () {
        return (
            <h1>Xin chào Mouted</h1>
        )
    }

    return (
        <div className="App">
            <button onClick={()=> setMount(!mount)}>Toggle</button>
            {mount || <Mounted/>}
        </div>
    );
}

export default App;

// 1. Tạo ứng dụng toggle hiện ẩn div
