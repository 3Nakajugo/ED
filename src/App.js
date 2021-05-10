import Header from "./Components/Header/Header"
import Tasks from './Components/Task/Tasks'
import React, { useState } from 'react'
import AddTask from './Components/AddTask/AddTask'
import Footer from './Components/Footer/Footer '

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,

    },
    {
      id: 2,
      text: "Buy gift for mothers day",
      day: "feb 6th at 2:00pm",
      reminder: true,

    },
    {
      id: 3,
      text: "Attend family meeting",
      day: "feb 10th at 2:30pm",
      reminder: true,

    }
  ])

  //Add task 
  const AddTaskfunc = (task) => {
    const id = tasks.length + 1
    const newTask = {
      id, ...task
    }
    setTasks([...tasks, newTask])

  }

  //Delete task 
  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} onshow={showAddTask} />
      {showAddTask && <AddTask onSave={AddTaskfunc} />}
      {tasks.length < 1 ? <p>No tasks to dislay</p> : <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={toggleReminder} />}
      <Footer />


    </div>
  );
}

export default App;
