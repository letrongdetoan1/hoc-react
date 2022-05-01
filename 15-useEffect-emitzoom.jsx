import { useState, useEffect } from "react";

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lesson-${id}`
            })
        )
    }, 1000)
}

emitComment(1)
emitComment(2)
emitComment(3)

function Content() {
    const [lessonId, setLessonId] = useState(1);
    const Cousers = [
        {
            id: 1,
            name: 'Javascripts'
        },
        {
            id: 2,
            name: 'PHP'
        },
        {
            id: 3,
            name: 'React'
        },
    ]



    useEffect(() => {
        function handleEvent({ detail }) {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleEvent)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleEvent)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {Cousers.map((couser) => {
                    return (
                        <li
                            key={couser.id}
                            style={couser.id == lessonId ? {
                                color: 'red'
                            } : {}}
                            onClick={() => setLessonId(couser.id)}
                        >{couser.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content

// 1. Chọn ảnh tử hiển thị ảnh