import { useState } from 'react'

function TaskForm({ onAddTask }) {

  // Guardamos lo que escribe el usuario
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // Evitamos agregar tareas sin título
    if (!title.trim()) { 
      return
    }

    // Enviamos la nueva tarea a App.jsx
    onAddTask({
      title: title,
      description: description
    })

    // Limpiamos los campos
    setTitle('')
    setDescription('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Descripción de la tarea"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button type="submit">
        Agregar tarea
      </button>

    </form>
  )
}

export default TaskForm