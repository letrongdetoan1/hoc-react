import { useState, useEffect, useLayoutEffect, useRef, memo } from "react";

function Content({ onCount }) {
    console.log('render con');
    return (
        <div>
            <button onClick={onCount}>Start</button>
        </div>
    )
}
// file childen
const [mount, setMount] = useState(true);
const [count, setCount] = useState(1)

const handleCount = useCallback(() => {
    setCount(prev => prev + 1)
}, [])

// return (
//     <div className="App">
//         <h1>{count}</h1>
//         <Content onCount={handleCount} />
//         {console.log('cha')}
//     </div>
// );
export default memo(Content)



// 1. Sử dụng memo kết hợp với useCallback