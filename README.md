# Aplicación ToDo

Aplicación web para administrar tareas, desarrollada como parte de una prueba técnica.

El proyecto utiliza **Django REST Framework** para crear la API REST del backend y **React** para desarrollar la interfaz de usuario.

La aplicación permite crear, consultar, editar, completar, desmarcar y eliminar tareas.

---

## Tecnologías utilizadas

### Backend

- Python
- Django
- Django REST Framework
- SQLite
- django-cors-headers

### Frontend

- React
- JavaScript
- Vite
- CSS

---

## Funcionalidades

La aplicación permite:

- Crear nuevas tareas.
- Mostrar las tareas registradas.
- Consultar la información de las tareas.
- Editar el título y la descripción.
- Marcar una tarea como completada.
- Desmarcar una tarea y volverla a dejar como pendiente.
- Eliminar tareas.
- Confirmar la eliminación de una tarea antes de borrarla.
- Mantener los cambios realizados mediante la API REST.

---

## Estructura del proyecto

El proyecto está separado en un **backend** y un **frontend**, para mantener una organización clara del código.

```text
todo-app/
│
├── backend/
│   ├── manage.py
│   │
│   ├── todo_project/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   └── tasks/
│       ├── migrations/
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── tests.py
│       ├── urls.py
│       └── views.py
│
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   │
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── main.jsx
│       │
│       └── components/
│           ├── TaskForm.jsx
│           └── TaskList.jsx
│
├── .gitignore
└── README.md