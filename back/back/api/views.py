from django.contrib import messages
from django.http import Http404
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import View
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

from .models import Genre, Release, Movie, Series, Anime, Cartoon, User
from rest_framework import status, generics, permissions, viewsets
from rest_framework.views import APIView
from .serializers import (GenreSerializer, ReleaseSerializer, MovieSerializer, SeriesSerializer, CartoonSerializer, AnimeSerializer, RegisterSerializer, LoginSerializer, LogoutSerializer)

from rest_framework.request import Request
from rest_framework.response import Response



#1-3
class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request):
        user=request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        return Response(user_data, status=status.HTTP_201_CREATED)

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self,request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)



# 5-6
@api_view(["GET", "POST"])
def movie_list(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def movie_detail(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# 7-8
@api_view(["GET", "POST"])
def cartoons_list(request):
    if request.method == 'GET':
        cartoons = Cartoon.objects.all()
        serializer = CartoonSerializer(cartoons, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CartoonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET', 'PUT', 'DELETE'])
def cartoon_detail(request, cartoon_id):
    cartoon = get_object_or_404(Cartoon, pk=cartoon_id)

    if request.method == 'GET':
        serializer = CartoonSerializer(cartoon)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CartoonSerializer(cartoon, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cartoon.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# 9-10
@api_view(["GET", "POST"])
def series_list(request):
    if request.method == 'GET':
        series = Series.objects.all()
        serializer = SeriesSerializer(series, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = SeriesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def series_detail(request, series_id):
    series = get_object_or_404(Series, pk=series_id)

    if request.method == 'GET':
        serializer = SeriesSerializer(series)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SeriesSerializer(series, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        series.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# 11-12
@api_view(["GET", "POST"])
def anime_list(request):
    if request.method == 'GET':
        anime = Anime.objects.all()
        serializer = AnimeSerializer(anime, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AnimeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def anime_detail(request, anime_id):
    anime = get_object_or_404(Anime, pk=anime_id)

    if request.method == 'GET':
        serializer = AnimeSerializer(anime)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AnimeSerializer(anime, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        anime.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



# 13-17
@api_view(["GET", "POST"])
def genres_list(request):
     if request.method == 'GET':
        genre = Genre.objects.all()
        serializer = GenreSerializer(genre, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_movies_by_genre(request, genre_id):
    movies = Movie.objects.filter(pk=genre_id)
    serializer = MovieSerializer(movies, many=True)
    data = {
        'movies': serializer.data,
    }
    return Response(data)

@api_view(['GET'])
def get_series_by_genre(request, genre_id):
    series = Series.objects.filter(pk=genre_id)
    serializer = SeriesSerializer(series, many=True)
    data = {
        'series': serializer.data,
    }
    return Response(data)

@api_view(['GET'])
def get_cartoons_by_genre(request, genre_id):
    cartoons = Cartoon.objects.filter(pk=genre_id)
    serializer = CartoonSerializer(cartoons, many=True)
    data = {
        'cartoons': serializer.data,
    }
    return Response(data)

@api_view(['GET'])
def get_anime_by_genre(request, genre_id):
    anime = Anime.objects.filter(pk=genre_id)
    serializer = AnimeSerializer(anime, many=True)
    data = {
        'anime': serializer.data,
    }
    return Response(data)



# 18-22
@api_view(['GET'])
def release_list(request):
    if request.method == 'GET':
        release = Release.objects.all()
        serializer = ReleaseSerializer(release, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_movies_by_releases(request, release_id):
    release = get_object_or_404(Release, pk=release_id)
    movies = Movie.objects.filter(release=release)
    serializer = MovieSerializer(movies, many=True)
    data = {
        'movies': serializer.data,
    }
    return Response(data)

@api_view(['GET'])
def get_series_by_releases(request, release_id):
    release = get_object_or_404(Release, pk=release_id)
    series = Series.objects.filter(release=release)
    serializer = SeriesSerializer(series, many=True)
    data = {
        'series': serializer.data,
    }
    return Response(data)

@api_view(['GET'])
def get_cartoons_by_releases(request, release_id):
    release = get_object_or_404(Release, pk=release_id)
    cartoons = Cartoon.objects.filter(release=release)
    serializer = CartoonSerializer(cartoons, many=True)
    data = {
        'cartoons': serializer.data,
    }
    return Response(data)

@api_view(['GET'])
def get_anime_by_releases(request, release_id):
    release = get_object_or_404(Release, pk=release_id)
    anime = Anime.objects.filter(release=release)
    serializer = AnimeSerializer(anime, many=True)
    data = {
        'anime': serializer.data,
    }
    return Response(data)


# 23-26
class Top10MoviesAPIView(APIView):
    def get(self, request):
        movies = Movie.objects.order_by('-rating')[:10]
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

class Top10SeriesAPIView(APIView):
    def get(self, request):
        series = Series.objects.order_by('-rating')[:10]
        serializer = SeriesSerializer(series, many=True)
        return Response(serializer.data)

class Top10CartoonsAPIView(APIView):
    def get(self, request):
        cartoons = Cartoon.objects.order_by('-rating')[:10]
        serializer = CartoonSerializer(cartoons, many=True)
        return Response(serializer.data)

class Top10AnimeAPIView(APIView):
    def get(self, request):
        anime = Anime.objects.order_by('-rating')[:10]
        serializer = AnimeSerializer(anime, many=True)
        return Response(serializer.data)
