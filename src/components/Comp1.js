import React, { useState} from 'react';

const Comp1 = (props) => {

const text = props.text;

const clickHandler = () => {
    console.log('Hello!!!')
}
const [count, setCount] = useState(0)

return (
    <div>
        <h2>Event Handling</h2>
        <button onClick={clickHandler}>Push</button>
        <h2>useState-Hook example</h2>
        <p>Du hast mich {count} mal geklickt!!!!!</p>
        <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
);

}

export default Comp1