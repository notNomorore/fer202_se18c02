
function PersonDetails(){
  const person = {name: "Minh", age: 20, occupation:"Student"};
    return (
      <div>
        <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Occupation: {person.occupation}</li>
        </ul>
      </div>
    );
  }
export default PersonDetails;
