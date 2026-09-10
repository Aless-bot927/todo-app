# Aplicación ToDo

Aplicación web para administrar tareas, desarrollada como parte de una prueba técnica.

El proyecto utiliza **Django REST Framework** para crear la API REST del backend y **React** para desarrollar la interfaz de usuario.

La aplicación permite crear, consultar, editar, completar, desmarcar y eliminar tareas.

---

## Tecnologías utilizadas

### Backend

* Python
* Django
* Django REST Framework
* SQLite
* django-cors-headers

### Frontend

* React
* JavaScript
* Vite
* CSS

---

## Funcionalidades

La aplicación permite:

* Crear nuevas tareas.
* Mostrar las tareas registradas.
* Consultar la información de las tareas.
* Editar el título y la descripción.
* Marcar una tarea como completada.
* Desmarcar una tarea y volverla a dejar como pendiente.
* Eliminar tareas.
* Confirmar la eliminación de una tarea antes de borrarla.
* Mantener los cambios realizados mediante la API REST.

---

## Estructura del proyecto

El proyecto está separado en un **backend** y un **frontend**, para mantener una organización clara del código.

```text
todo-app/
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
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
```

---

## Instalación y ejecución

Para ejecutar el proyecto es necesario tener instalados **Python** y **Node.js**.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Aless-bot927/todo-app.git
cd todo-app
```

---

### 2. Ejecutar el backend

Entrar a la carpeta del backend:

```bash
cd backend
```

Instalar las dependencias de Python:

```bash
pip install -r requirements.txt
```

Aplicar las migraciones de la base de datos:

```bash
python manage.py migrate
```

Iniciar el servidor de Django:

```bash
python manage.py runserver
```

El backend estará disponible en:

```text
http://127.0.0.1:8000/
```

La API de tareas se encuentra en:

```text
http://127.0.0.1:8000/api/tasks/
```

---

### 3. Ejecutar el frontend

Abrir **otra terminal** y regresar a la carpeta principal del proyecto:

```bash
cd todo-app/frontend
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abrir esa dirección en el navegador para utilizar la aplicación.

---

## Uso de la aplicación

Una vez iniciados el backend y el frontend, se puede utilizar la aplicación desde el navegador.

Las tareas se administran mediante la API REST de Django y se muestran en la interfaz desarrollada con React.

---

## Repositorio

El código fuente del proyecto se encuentra disponible en GitHub:

https://github.com/Aless-bot927/todo-app
