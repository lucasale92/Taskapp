# Generated by Django 5.0.3 on 2024-03-14 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0009_remove_task_created_at_remove_task_deleted_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='priority',
            field=models.CharField(choices=[('low', 'Baja'), ('medium', 'Media'), ('high', 'Alta')], default='low', max_length=10),
        ),
    ]
