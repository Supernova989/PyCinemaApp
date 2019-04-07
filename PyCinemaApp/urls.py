from django.contrib import admin
from django.urls import path, re_path
from frontend.views import IndexPage
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', IndexPage),
	re_path(r'^(?:.*)/?$', IndexPage),  # Fallback
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
