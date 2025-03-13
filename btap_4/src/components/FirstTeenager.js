import React from "react";

function FirstTeenager (){
    const people = [
        { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 15, occupation: "Student" },
        { id: 3, name: "Charlie", age: 17, occupation: "Student" },
        { id: 4, name: "Diana", age: 30, occupation: "Teacher" },
        { id: 5, name: "Sophia", age: 14, occupation: "Student" }
      ];
  const teenager = people.find((person) => {
    return person.age >= 13 && person.age <= 19;
  });

  if (teenager) {
    return (
      <div>
        <h2>First Teenager</h2>
        <p>Name: {teenager.name}</p>
        <p>Age: {teenager.age}</p>
        <p>Occupation: {teenager.occupation}</p>
      </div>
    );
  }
  return (
    <div>
      <h2>First Teenager</h2>
      <p>No teenagers found.</p>
    </div>
  );
};

export default FirstTeenager;
