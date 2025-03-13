    import React, {useState} from 'react';
    import { Button } from 'react-bootstrap';

    const SnapshotDemo = () => {
    const [count, setCount] = useState(0);
    const [snapshot, setSnapshot] = useState(null);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleSnapshot = () => {
        setSnapshot(count);
    };

    const handleRestore = () => {
        if (snapshot !== null) {
        setCount(snapshot);
        }
    };

    return (
        <div>
        <h1>State as a Snapshot Demo</h1>
        <p>Count: {count}</p>
        <Button style={{margin: "3px"}} onClick={handleIncrement}>Increment</Button>
        <Button style={{margin: "3px"}} onClick={handleSnapshot}>Take Snapshot</Button>
        <Button style={{margin: "3px"}} onClick={handleRestore}>Restore Snapshot</Button>
        </div>
    );
    };

    export default SnapshotDemo;
