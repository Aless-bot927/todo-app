import { useState } from 'react'

function TaskList({ tasks, onToggleTask, onUpdateTask, onDeleteTask }) {

  const [editingId, setEditingId] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Activa el modo de edición de una tarea
  const startEditing = (task) => {
    setEditingId(task.id)
    setTitle(task.title)
    setDescription(task.description)
  }

  // Cancela la edición y limpia los campos
  const cancelEditing = () => {
    setEditingId(null)
    setTitle('')
    setDescription('')
  }

  // Guarda los cambios realizados en la tarea
  const saveEditing = () => {
    if (!title.trim()) {
      return
    }

    onUpdateTask(editingId, {
      title: title,
      description: description
    })

    cancelEditing()
  }

  // Confirma antes de eliminar una tarea
  const handleDelete = (taskId) => {
    const confirmDelete = window.confirm(
      '¿Seguro que quieres eliminar esta tarea?'
    )

    if (confirmDelete) {
      onDeleteTask(taskId)
    }
  }

  return (
    <div className="task-list">

      <h2>Tareas</h2>

      {tasks.length === 0 ? (
        <p>No hay tareas para mostrar.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task">

            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />

                <button onClick={saveEditing}>
                  Guardar
                </button>

                <button onClick={cancelEditing}>
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <p>
                  Estado: {task.completed ? 'Completada' : 'Pendiente'}
                </p>

                <button onClick={() => startEditing(task)}>
                  Editar
                </button>

                {/* Permite marcar y desmarcar la tarea */}
                <button
                  onClick={() => onToggleTask(task.id, task.completed)}
                >
                  {task.completed
                    ? 'Marcar como pendiente'
                    : 'Marcar como completada'}
                </button>

                <button onClick={() => handleDelete(task.id)}>
                  Eliminar
                </button>
              </>
            )}

          </div>
        ))
      )}

    </div>
  )
}

export default TaskList


