import { useState } from "react";

function App() {
    const [gift, setGift] = useState()
    const gifts = ['Ô tô', 'Xe máy', 'Xe đạp']
    function handleGift() {
        let index = Math.floor(Math.random * gifts.length)
        console.log(index);
        setGift(gifts[index])
    }

    return (
        <div className="App">
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={handleGift}>Click me</button>
        </div>
    );
}

export default App;

// 1. Tạo chức năng bấm ngẫu nhiên ra phần thưởng
