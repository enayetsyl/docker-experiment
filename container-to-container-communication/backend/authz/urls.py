# authz/urls.py
from django.urls import path
from . import views
urlpatterns = [
    path("register/", views.register),
    path("login/", views.login),
    path("forgot-password/", views.forgot_password),
]
