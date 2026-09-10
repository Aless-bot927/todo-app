from django.db import models  # pyright: ignore[reportMissingModuleSource]

# Modelo que representa una tarea dentro de la aplicación ToDo.
# Contiene la información necesaria para crear, consultar y gestionar tareas.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Permite mostrar el título de la tarea cuando el objeto se representa como texto.
    def __str__(self):
        return self.title
