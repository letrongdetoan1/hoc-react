import { useState } from "react";

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function registerSubmit ( ) {
        console.log(
            name, email
        )
    }

    return (
        <div className="App">
            <input value={name}
            onChange={e => setName(e.target.value)} />
            <input value={email}
            onChange={e => setEmail(e.target.value)} />
            <button onClick={registerSubmit}>Submit</button>
        </div>
    );
}

export default App;

// 1. Nhập email và name đăng ký tự động gửi lên

