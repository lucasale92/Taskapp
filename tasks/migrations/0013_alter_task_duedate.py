# Generated by Django 5.0.3 on 2024-03-16 01:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0012_alter_task_duedate_alter_task_priority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='dueDate',
            field=models.DateField(blank=True, null=True),
        ),
    ]
