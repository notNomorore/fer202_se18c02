import React from 'react';
function PeopleList (){
    const people = [
        { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 15, occupation: "Student" },
        { id: 3, name: "Charlie", age: 17, occupation: "Student" },
        { id: 4, name: "Diana", age: 30, occupation: "Teacher" },
      ];
        return (
          <div>
            {people.map((people) => (
            <ul>{people.name}
            <li>{people.age}</li>
            <li>{people.occupation}</li>
            </ul>
            ))}
          </div>
        );       
}
export default PeopleList;