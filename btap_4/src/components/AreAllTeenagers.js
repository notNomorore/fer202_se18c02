import React from "react";

function AreAllTeenagers (){
    const people1 = [
        { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 15, occupation: "Student" },
        { id: 3, name: "Charlie", age: 17, occupation: "Student" },
        { id: 4, name: "Diana", age: 30, occupation: "Teacher" },
        { id: 5, name: "Sophia", age: 14, occupation: "Student" }
      ];
      const people2 = [
        { id: 1, name: "Alice", age: 16, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 15, occupation: "Student" },
        { id: 3, name: "Charlie", age: 17, occupation: "Student" },
        { id: 4, name: "Diana", age: 18, occupation: "Teacher" },
        { id: 5, name: "Sophia", age: 14, occupation: "Student" }
      ];
   let count;
  const notTeenager = people1.find((person) => {
    return person.age <= 13 && person.age >= 19;
  });

  if (notTeenager) {
    return (
      <div>
        <p>All aren't teenagers.</p>
      </div>
    );
  }
  return (
    <div>
      <h2>All are Teenagers</h2>
      <p>All aren't teenagers.</p>
    </div>
  );
};

export default AreAllTeenagers;
