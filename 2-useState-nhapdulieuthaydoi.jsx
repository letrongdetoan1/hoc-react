import { useState } from "react";

function App() {
    const [name, setName] = useState('')

    console.log(name)

    return (
        <div className="App">
            <input value={name}
            onChange={e => setName(e.target.value)} />
            <button onClick={() => setName('nguyen van b')}>Change</button>
        </div>
    );
}

export default App;

// 1. nhập dẽ liệu tự thay đổi
