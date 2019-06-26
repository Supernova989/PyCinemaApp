from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from schedule.models import Schedule


class Movie(models.Model):
	title = models.CharField(max_length=80)
	imdb_id = models.CharField(max_length=30, null=True, blank=True)
	description = models.TextField(max_length=1000)
	image = models.ImageField(null=True, blank=True, upload_to="img")
	length_mins = models.IntegerField(validators=[
		MinValueValidator(0)
	])
	schedule = models.ManyToManyField(Schedule, blank=True, symmetrical=False)
# active = models.BooleanField(default=False)
