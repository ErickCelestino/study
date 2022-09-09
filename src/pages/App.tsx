import Form from '../Components/Form';
import style from './App.module.scss';
import List from '../Components/List';
import Timer from '../Components/Timer';
import {useState} from 'react';
import { Itask } from '../types/task';

function App() {
  const [tasks,setTasks] = useState<Itask[]>([]);
  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks}/>
     <List tasks={tasks}/>
     <Timer/>
    </div>
  );
}

export default App;
