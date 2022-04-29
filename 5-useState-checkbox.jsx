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
    const [checked, setChecked] = useState([])
    console.log(checked);
    function registerSubmit() {

    }

    function handleCheck (id) {
        setChecked((prev) => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    return (
        <div className="App">
            {Cousers.map(couser => (
                <div key={couser.id}>
                    <input type="checkbox"
                        checked={checked.includes(couser.id)}
                        onChange={() => handleCheck (couser.id)}
                    />
                    {couser.name}
                </div>
            ))}
            <button onClick={registerSubmit}>Submit</button>
        </div>
    );
}

export default App;

// 1. Tạo chức check box
