import { useState, useEffect } from "react";

function Content() {

    const [avatar, setAvatar] = useState(' ');
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])
    function handleAvatar(e) {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value =''
    }

    return (
        <div>
            <input
                type='file'
                onChange={handleAvatar}
            />
            <img src={avatar && avatar.preview} width='20%'></img>
        </div>
    )
}

export default Content

// 1. Chọn ảnh tử hiển thị ảnh