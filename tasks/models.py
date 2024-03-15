from django.db import models
from datetime import datetime

PRIORITY_CHOICES = [
    ('baja', 'Baja'),
    ('media', 'Media'),
    ('alta', 'Alta'),
]

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)
    deadline = models.DateTimeField(default=datetime.now)
    category = models.CharField(max_length=255, blank=True)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='baja')
    dueDate = models.DateField(null=True, blank=True)     
def __str__(self):
    return self.title
