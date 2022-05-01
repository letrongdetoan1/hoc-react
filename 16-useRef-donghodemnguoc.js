import { useState, useEffect, useLayoutEffect, useRef } from "react";

function Content() {
    const [count, setCount] = useState(60);

    const timeID = useRef();
    const countRef = useRef();
    const h1Ref = useRef();

    useEffect(() =>{
        countRef.current = count
    },[count])

    useEffect(() =>{
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect);
    },[])

    function hanldeStart() {
        timeID.current = setInterval(() => {
            setCount(prevState => prevState - 1)
        }, 1000)
    }
    function hanldeStop() {
        clearInterval(timeID.current)
    }
    return (
        <div>
            {console.log(count, countRef.current)}
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={hanldeStart}>Start</button>
            <button onClick={hanldeStop}>Stop</button>
        </div>
    )
}

export default Content

// 1. Đồng hồ đếm ngược và dừng lại
// 2. Xem giá trị trước đó của count
// 3. Lấy vị trí tọa độ của thẻ h1