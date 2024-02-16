import { Button, Dialog, TextField, DialogTitle } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import React, {useState} from 'react'
import axios from "axios";
import { API_URL } from '../utils';

export const UpdateTaskForm = ({
    fetchTasks,
    isDialogOpen,
    setIsDialogOpen,
    task
}) => {
    const {id, isComplete} = task;
    const [taskName, setTaskName] = useState("");

    const handleUpdateTaskName = async() =>  {
        try {
            await axios.put(API_URL, {
                id,
                name:taskName,
                completed,
            });

            await fetchTasks();
            setTaskName("")
        } catch (error) {
            console.log(err);
        }
    }
 
    return <Dialog open={isDialogOpen}>
        <DialogTitle>Edit Task</DialogTitle>
        <div className='dialog'>
            <TextField 
                size="small" 
                label="Task" 
                variant='outlined'>
                onChange={(e) => setTaskName(e.target.value)}
            </TextField>
            <Button variant='contained' onClick={async()=>{
                await handleUpdateTaskName();
                setIsDialogOpen(false)
            }}>
                <CheckIcon/>
            </Button>
        </div>

        </Dialog>
};
