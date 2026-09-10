import { useEffect, useState } from 'react'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  // Obtiene las tareas desde Django al cargar la aplicación
  useEffect(() => {
    console.log('React está ejecutando el fetch')

    fetch('http://127.0.0.1:8000/api/tasks/')
      .then((response) => {
        console.log('Respuesta de Django:', response.status)

        if (!response.ok) {
          throw new Error('Error HTTP: ' + response.status)
        }

        return response.json()
      })
      .then((data) => {
        console.log('Tareas recibidas:', data)
        setTasks(data)
      })
      .catch((error) => {
        console.error('Error al obtener tareas:', error)
      })
  }, [])

  // Marca o desmarca una tarea como completada
  const toggleTask = (taskId, completed) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: !completed
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error HTTP: ' + response.status)
        }

        return response.json()
      })
      .then((updatedTask) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        )
      })
      .catch((error) => {
        console.error('Error al cambiar estado:', error)
      })
  }

  // Actualiza el título o descripción de una tarea
  const updateTask = (taskId, updatedData) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error HTTP: ' + response.status)
        }

        return response.json()
      })
      .then((updatedTask) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        )
      })
      .catch((error) => {
        console.error('Error al actualizar tarea:', error)
      })
  }

  // Elimina una tarea de Django
  const deleteTask = (taskId) => {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error HTTP: ' + response.status)
        }

        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== taskId)
        )
      })
      .catch((error) => {
        console.error('Error al eliminar tarea:', error)
      })
  }

  // Crea una nueva tarea en Django
  const addTask = (newTask) => {
    fetch('http://127.0.0.1:8000/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error HTTP: ' + response.status)
        }

        return response.json()
      })
      .then((data) => {
        console.log('Nueva tarea:', data)
        setTasks((prevTasks) => [...prevTasks, data])
      })
      .catch((error) => {
        console.error('Error al crear tarea:', error)
      })
  }

  return (
    <div className="app">
      <h1>Mi lista de tareas</h1>

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App


