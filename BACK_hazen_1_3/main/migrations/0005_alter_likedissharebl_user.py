# Generated by Django 4.2 on 2023-04-10 16:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_likediscomm_id_likedissharebl_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='likedissharebl',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.authuser'),
        ),
    ]
