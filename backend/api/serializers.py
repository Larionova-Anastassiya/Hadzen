from rest_framework import serializers
from .models import Post, Profile, Comment


class PostSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    likes_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        template_name = 'home.html'
        fields = ['id', 'title', 'header_image', 'title_tag', 'author', 'body', 'post_date', 'category', 'snippet',
                  'likes', 'likes_count']
        read_only_fields = ['id', 'post_date', 'likes', 'likes_count']

    def get_likes_count(self, obj):
        return obj.likes.count()


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Profile
        fields = ['id', 'user', 'bio', 'profile_pic', 'website_url', 'facebook_url', 'twitter_url', 'instagram_url',
                  'pinterest_url']
        read_only_fields = ['id']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'post', 'name', 'body', 'date_added']
        read_only_fields = ['id', 'date_added']
