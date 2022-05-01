import { useState, useEffect } from "react";

function Content() {

    const [countDow, setcountDow] = useState(180);

    useEffect(() => {
        const timeID = setInterval(() => {
            setcountDow(prevState => prevState - 1)
        }, 1000)
        return () => clearInterval(timeID)
    }, [])

    return (
        <div>
            <h1>{countDow}</h1>
        </div>
    )
}

export default Content

// 1. Đếm lùi thời gian