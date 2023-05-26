import { useState } from 'react'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Date.now(),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>{todos.length} Task</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        )
      })}
    </div>
  )
}

export default App
