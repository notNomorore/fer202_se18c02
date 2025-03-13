import React, { useState } from 'react';
function Counter() {
    
    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: 'center'}} >
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <h5>Counts: {count}</h5>

        </div>
    );
}
export default Counter;
