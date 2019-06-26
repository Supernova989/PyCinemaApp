from django.contrib import admin
from django.urls import path, re_path, include
from frontend.views import IndexPage
from django.conf import settings
from django.conf.urls.static import static
from movies.views import MovieView
from rest_framework import routers

router = routers.DefaultRouter(trailing_slash=False)
router.register('movies', MovieView)

_static = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', IndexPage),
	path('api/', include(router.urls)),
] + _static + [re_path(r'^(?:.*)/?$', IndexPage)]
