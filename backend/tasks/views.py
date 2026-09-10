# pyright: reportMissingImports=false
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """
    Proporciona las operaciones CRUD para las tareas:
    listar, crear, actualizar y eliminar.
    """

    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer