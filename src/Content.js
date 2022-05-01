import { useState, useEffect } from "react";

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
        function handleEvent({detail}) {
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