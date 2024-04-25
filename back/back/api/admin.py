from django.contrib import admin
from .models import Genre, Release, Movie, Series, Anime, Cartoon

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'get_genres', 'rating', 'description', 'release', 'image')

    def get_genres(self, obj):
        return ", ".join([genre.name for genre in obj.genre.all()])
    get_genres.short_description = 'Genres'

@admin.register(Series)
class SeriesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'get_genres', 'rating', 'description', 'release', 'image')

    def get_genres(self, obj):
        return ", ".join([genre.name for genre in obj.genre.all()])
    get_genres.short_description = 'Genres'

@admin.register(Cartoon)
class CartoonAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'get_genres', 'rating', 'description', 'release', 'image')

    def get_genres(self, obj):
        return ", ".join([genre.name for genre in obj.genre.all()])
    get_genres.short_description = 'Genres'

@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'get_genres', 'rating', 'description', 'release', 'image')

    def get_genres(self, obj):
        return ", ".join([genre.name for genre in obj.genre.all()])
    get_genres.short_description = 'genres'

@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Release)
class ReleaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'release')
    search_fields = ('release',)

