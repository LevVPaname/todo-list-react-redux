import React from 'react'
import AddTaskInput from './components/addTaskInput/AddTaskInput'
import TasksList from './components/tasksList/TasksList'

function App() {
  return (
    <div className='App'>
      <AddTaskInput />
      <TasksList />
    </div>
  )
}

export default App
