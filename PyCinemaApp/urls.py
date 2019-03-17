from django.contrib import admin
from django.urls import path
from frontend.views import IndexPage
urlpatterns = [
	path('admin/', admin.site.urls),
	path('', IndexPage)
]
