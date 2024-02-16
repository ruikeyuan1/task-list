import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AddTaskForm } from './components/AddTaskForm';
import { Task } from './components/Task';
import axios from `axios`;
import React, {useState,useEffect} from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const task = {
  id: '1',
  name:'do dishes',
  completed: false,
};

export default function App() {
  const [task, setTask] = useState([])

  const fetchTasks = async () => {
    try{
      const {data} = axios.get(API_URL);
      setTasks(data);
    }catch(error){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm fetchTasks = {fetchTasks}/>
      {tasks.map((task) => (
        <Task task={task} key={task.id} fetchTasks={fetchTasks}/>
      ))}

    </ThemeProvider>
  );
}