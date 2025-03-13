import "./App.css";

const person = { id: 1, name: "Alice", age: 25, occupation: "Engineer" };
const App = () => {
  const people = [
  { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
  { id: 2, name: "Bob", age: 15, occupation: "Student" },
  { id: 3, name: "Charlie", age: 17, occupation: "Student" },
  { id: 4, name: "Diana", age: 30, occupation: "Teacher" },
];
  return (
    <div>
      <h1>Person Information</h1>
    </div>
  );
};

export default App;
