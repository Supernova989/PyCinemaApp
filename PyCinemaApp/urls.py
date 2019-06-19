from django.contrib import admin
from django.urls import path, re_path, include
from frontend.views import IndexPage
from django.conf import settings
from django.conf.urls.static import static
from movies.views import MovieView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('movies', MovieView)

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', IndexPage),
	path('api/', include(router.urls)),
	re_path(r'^(?:.*)/?$', IndexPage),  # Fallback
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
