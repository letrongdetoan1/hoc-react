import { useState, useEffect } from "react";

function Content() {

    const [resie, setResie] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setResie(window.innerWidth);
            console.log('resize')
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h1>{resie}</h1>
        </div>
    )
}

export default Content

// 1. Tạo và thay đổi resize