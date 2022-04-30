import { useState } from "react";

function App() {

    const [todo, setTodo] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('job'))
        return storageJobs ?? []
    });
    // Toán tử null hoặc undefined mới lấy vế phải
    const [job, setJob] = useState('');

    function handleTodo() {
        if (!job) return false

        setTodo(prev => {
            const newJob = [...prev, job];
            const jsonJobs = JSON.stringify(newJob)
            localStorage.setItem('job', jsonJobs)
            return newJob
        });
        setJob('')
    }

    function handleRemove(e) {
        const a1 = todo.slice(0, e);
        const a2 = todo.slice(e + 1, todo.length);
        const new_arr = a1.concat(a2);
        setTodo(new_arr);
        localStorage.setItem('job', JSON.stringify(new_arr))
    }
    return (
        <div className="App">
            <input value={job} onChange={(e) => setJob(e.target.value)}></input>
            <button onClick={handleTodo}>Submit</button>
            <ul>
                {todo.map((element, index) => {
                    return (<li key={index}>{element} <button onClick={() => handleRemove(index)}>Remove</button> </li>)
                })}
            </ul>
        </div>
    );
}

export default App;

// 1. Tạo chức năng todolist
// 2. Xóa dữ liệu sau khi all
// 3. Lưu vào local để f5 không mất dữ liệu
// 4. Làm thêm chức năng xóa
