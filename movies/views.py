from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from .models import Movie
from .serializers import MovieSerializer
from rest_framework.response import Response


class MovieView(viewsets.ViewSet):
	limit = 20

	queryset = Movie.objects.all()
	serializer_class = MovieSerializer

	def list(self, request):
		page = request.GET.get('p') or 1
		# print(page)
		queryset = Movie.objects.all()
		serializer = MovieSerializer(queryset, many=True)
		return Response(serializer.data)

	def retrieve(self, request, pk=None):
		print(pk)
		queryset = Movie.objects.all()
		movie = get_object_or_404(queryset, pk=pk)
		serializer = MovieSerializer(movie)
		return Response(serializer.data)
