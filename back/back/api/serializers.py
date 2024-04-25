from django.contrib import auth
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

from .models import Genre, Release, Movie, Series, Anime, Cartoon, User

class GenreSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Genre.objects.create(name=validated_data.get("name"))
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

class ReleaseSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    release = serializers.IntegerField()

    def create(self, validated_data):
        instance = Release.objects.create(release=validated_data.get("release"))
        return instance

    def update(self, instance, validated_data):
        instance.release = validated_data.get('release')
        instance.save()
        return instance

class MovieSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True)
    release = ReleaseSerializer()
    class Meta:
        model = Movie
        fields = ('id', 'name', 'genre', 'rating', 'description', 'release', 'image')

class SeriesSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True)
    release = ReleaseSerializer()
    class Meta:
        model = Series
        fields = ('id', 'name', 'genre', 'rating', 'description', 'release', 'image')

class CartoonSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True)
    release = ReleaseSerializer()
    class Meta:
        model = Cartoon
        fields = ('id', 'name', 'genre', 'rating', 'description', 'release', 'image')

class AnimeSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(many=True)
    release = ReleaseSerializer()
    class Meta:
        model = Anime
        fields = ('id', 'name', 'genre', 'rating', 'description', 'release', 'image')

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    class Meta:
        model = User
        fields = ['email', 'username', 'password']
    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')
        if not username.isalnum():
            raise serializers.ValidationError(
                self.default_error_messages)
        return attrs
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68, min_length=6,write_only=True)
    username = serializers.CharField(max_length=255, min_length=3)
    tokens = serializers.SerializerMethodField()
    def get_tokens(self, obj):
        user = User.objects.get(username=obj['username'])
        return {
            'refresh': user.tokens()['refresh'],
            'access': user.tokens()['access']
        }
    class Meta:
        model = User
        fields = ['password','username','tokens']
    def validate(self, attrs):
        username = attrs.get('username','')
        password = attrs.get('password','')
        user = auth.authenticate(username=username,password=password)
        if not user:
            raise AuthenticationFailed('Invalid credentials, try again')
        if not user.is_active:
            raise AuthenticationFailed('Account disabled, contact admin')
        return {
            'email': user.email,
            'username': user.username,
            'tokens': user.tokens
        }

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs
    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')