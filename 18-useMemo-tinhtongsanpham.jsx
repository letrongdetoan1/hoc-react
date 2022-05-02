import { useState, useEffect, useLayoutEffect, useRef, useMemo } from "react";

function Content() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    function handleProduct() {
        setProducts(
            [...products, {
                name, price: +price
            }]
        )
        setName('')
        setPrice('')
        nameRef.current.focus()
    }

    let total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('tinh toan')
            return result + prod.price
        }, 0)
        return result
    }, [products])
    return (
        <div>
            <input type="text"
                ref={nameRef}
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <input type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            <ul>
                {products.map((product, index) =>
                    <li key={index}>{product.name} - {product.price}</li>
                )}

            </ul>
            <h1>Total {total == 0 ? '' : total}</h1>
            <button onClick={handleProduct}>Start</button>
        </div>
    )
}

export default Content



// 1. Sử dụng useMemo tính tổng sản phẩm