import { useState } from "react";

export default function ClickCount() {
    const [count, setCount] = useState(0);
    return (
        <div className="container pt -5">
            <span>{count}</span>
            {/* {/*button onClick={setCount(count + 1)} */}

            <button onClick={increaseByOne}>Increase By One</ button>
        </div>
    )
}