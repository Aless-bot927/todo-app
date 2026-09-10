from rest_framework import serializers
from .models import Task


# Convierte los datos del modelo Task entre objetos de Django y formato JSON,
# permitiendo que la API pueda enviar y recibir información de las tareas.
class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'