import { useState } from 'react';


function SetAge() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);
    const [item,setItem] = useState("Máy giặt", "Bàn ủi");

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => {setName(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>My name is {name}</p>


      <input 
        type="number" 
        value={age} 
        onChange={(e) => setAge(parseInt(e.target.value, 10))} 
      />
      <p>My age is {age}</p>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => {setName(e.target.value);
          console.log(e.target.value)
        }} 
      />
      <p>Sản phẩm{name}</p>

    </div>
  );
}
  
export default SetAge;