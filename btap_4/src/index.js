import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PeopleList from '../src/components/PeopleList';
import PeopleTable from '../src/components/PeopleTable';
import FirstTeenager from '../src/components/FirstTeenager';


const root = ReactDOM.createRoot(document.getElementById('root'));
const people = [
  { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
  { id: 2, name: "Bob", age: 15, occupation: "Student" },
  { id: 3, name: "Charlie", age: 17, occupation: "Student" },
  { id: 4, name: "Diana", age: 30, occupation: "Teacher" },
];
root.render(
  
  <React.StrictMode>
    <PeopleList/>
    <PeopleTable/>
    <FirstTeenager/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
