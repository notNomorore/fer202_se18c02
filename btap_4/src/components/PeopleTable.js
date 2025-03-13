import React from "react";
const PeopleTable = () => {
    const people = [
        { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 15, occupation: "Student" },
        { id: 3, name: "Charlie", age: 17, occupation: "Student" },
        { id: 4, name: "Diana", age: 30, occupation: "Teacher" },
      ];
  return (
    <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;
