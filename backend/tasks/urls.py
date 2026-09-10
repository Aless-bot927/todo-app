from rest_framework.routers import DefaultRouter
from .views import TaskViewSet


# Configura automáticamente las rutas CRUD para el ViewSet de tareas.
# El router genera los endpoints necesarios para listar, crear,
# actualizar y eliminar tareas mediante la API REST.
router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = router.urls