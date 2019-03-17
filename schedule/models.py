from django.db import models
from django.core.exceptions import ValidationError
import re


def validate_time(value):
	pattern = re.compile('^([0-9]{2}):([0-9]{2})$')
	if not pattern.match(value):
		raise ValidationError('Wrong time format')


class Reservation(models.Model):
	# 1 - reserved; 2 - purchased
	bought_out = models.BooleanField()  # whether bought out or just booked
	seat = models.IntegerField()


class Schedule(models.Model):
	date = models.DateField()
	time = models.CharField(default='12:00', max_length=5, validators=[validate_time])
	reservations = models.ManyToManyField(Reservation, blank=True)
	active = models.BooleanField(default=False)

	def __str__(self):
		return f'{self.date} - {self.time}'
