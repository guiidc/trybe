import logo from './logo.svg';
import './App.css';

const compromises = ['Estudar React', 'Fazer exercícios do course', 'Formatar PC'];

const Task = (value) => {
  return (
    <li>{ value }</li>
  )
}

function App() {
  return (
   <ul>
     { compromises.map((compromise) => Task(compromise)) }
   </ul>
  );
}

export default App;
