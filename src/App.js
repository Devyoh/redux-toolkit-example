import { useState } from 'react';
import './styles/App.css';
import TasksHeader from './components/Layouts/Header/header.jsx'
import TaskForm from './components/Tasks/form.jsx'
import TasksList from './components/Tasks/list.jsx'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ]);

  return (
    <div className="App container">
       <article>
        <TasksHeader />
        <TasksList />
        <footer>
          <TaskForm />
        </footer>
      </article>
    </div>
  );
}

export default App;
