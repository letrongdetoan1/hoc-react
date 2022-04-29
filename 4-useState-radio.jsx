import { useState } from "react";

function App() {
    const Cousers = [
        {
            id: 1,
            name: "Javascript"
        },
        {
            id: 2,
            name: "React"
        },
        {
            id: 3,
            name: "Php"
        }
    ]
    const [checked, setChecked] = useState(1)
    console.log(checked);
    function registerSubmit() {

    }

    return (
        <div className="App">
            {Cousers.map(couser => (
                <div key={couser.id}>
                    <input type="radio"
                        checked={couser.id == checked}
                        onChange={() => setChecked (couser.id)}
                    />
                    {couser.name}
                </div>
            ))}
            <button onClick={registerSubmit}>Submit</button>
        </div>
    );
}

export default App;

// 1. Tạo chức năng bấm ngẫu nhiên ra phần thưởng
