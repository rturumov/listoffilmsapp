from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('register/',views.RegisterView.as_view(),name="register"),
    path('login/',views.LoginAPIView.as_view(),name="login"),
    path('logout/', views.LogoutAPIView.as_view(), name="logout"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('movies/', views.movie_list, name='movies'),
    path('movies/<int:movie_id>/', views.movie_detail, name='movie_detail'),

    path('cartoons/', views.cartoons_list, name='cartoons'),
    path('cartoons/<int:cartoon_id>/', views.cartoon_detail, name='cartoon_detail'),

    path('series/', views.series_list, name='series'),
    path('series/<int:series_id>/', views.series_detail, name='series_detail'),

    path('anime/', views.anime_list, name='anime'),
    path('anime/<int:anime_id>/', views.anime_detail, name='anime_detail'),

    path('genres/', views.genres_list, name='genres'),
    path('genres/<int:genre_id>/movies/', views.get_movies_by_genre, name='get_movies_by_genre'),
    path('genres/<int:genre_id>/series/', views.get_series_by_genre, name='get_series_by_genre'),
    path('genres/<int:genre_id>/cartoons/', views.get_cartoons_by_genre, name='get_cartoons_by_genre'),
    path('genres/<int:genre_id>/anime/', views.get_anime_by_genre, name='get_anime_by_genre'),

    path('release/', views.release_list, name='genres'),
    path('release/<int:release_id>/movies/', views.get_movies_by_releases, name='get_movies_by_release'),
    path('release/<int:release_id>/series/', views.get_series_by_releases, name='get_series_by_release'),
    path('release/<int:release_id>/cartoons/', views.get_cartoons_by_releases, name='get_cartoons_by_release'),
    path('release/<int:release_id>/anime/', views.get_anime_by_releases, name='get_anime_by_release'),

    path('top10movies/', views.Top10MoviesAPIView.as_view(), name='top10movies'),
    path('top10series/', views.Top10SeriesAPIView.as_view(), name='top10series'),
    path('top10cartoons/', views.Top10CartoonsAPIView.as_view(), name='top10cartoons'),
    path('top10anime/', views.Top10AnimeAPIView.as_view(), name='top10anime'),
]