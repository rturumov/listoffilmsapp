from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework_simplejwt.tokens import RefreshToken

class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True, db_index=True, default='')

    class Meta:
        swappable = 'AUTH_USER_MODEL'

    def __str__(self):
        return self.username

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return{
            'refresh':str(refresh),
            'access':str(refresh.access_token)
        }

class Genre(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Genre'
        verbose_name_plural = 'Genres'
    
    def __str__(self):
        return self.name

class Release(models.Model):
    release = models.IntegerField()

    def __str__(self):
        if self.release is not None:
            return str(self.release)
        return ""

class Movie(models.Model):
    name = models.CharField(max_length=255)
    genre = models.ManyToManyField(Genre)
    rating = models.FloatField()
    description = models.TextField()
    release = models.ForeignKey(Release, on_delete=models.CASCADE)
    image = models.URLField()

    class Meta:
        verbose_name = 'Movie'
        verbose_name_plural = 'Movies'
    
    def __str__(self):
        return self.name

class Series(models.Model):
    name = models.CharField(max_length=255)
    genre = models.ManyToManyField(Genre)
    rating = models.FloatField()
    description = models.TextField()
    release = models.ForeignKey(Release, on_delete=models.CASCADE)
    image = models.URLField()

    class Meta:
        verbose_name = 'Series'
        verbose_name_plural = 'Series'
    
    def __str__(self):
        return self.name

class Cartoon(models.Model):
    name = models.CharField(max_length=255)
    genre = models.ManyToManyField(Genre)
    rating = models.FloatField()
    description = models.TextField()
    release = models.ForeignKey(Release, on_delete=models.CASCADE)
    image = models.URLField()

    class Meta:
        verbose_name = 'Сartoon'
        verbose_name_plural = 'Сartoons'
    
    def __str__(self):
        return self.name

class Anime(models.Model):
    name = models.CharField(max_length=255)
    genre = models.ManyToManyField(Genre)
    rating = models.FloatField()
    description = models.TextField()
    release = models.ForeignKey(Release, on_delete=models.CASCADE)
    image = models.URLField()

    class Meta:
        verbose_name = 'Anime'
        verbose_name_plural = 'Anime'
    
    def __str__(self):
        return self.name