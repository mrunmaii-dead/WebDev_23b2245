from django.urls import path
from . import views
urlpatterns = [
    path("",views.login_page,name = "login"),
     path("login/",views.login_page,name = "login"),
    path("home/",views.Homepage,name= "home"),
    path('logout/', views.Logout, name='logout'),
    path("register/",views.register_page,name = 'register')
]