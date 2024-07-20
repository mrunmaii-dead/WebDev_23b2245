from django.shortcuts import render,redirect
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.models import User
from .forms import LoginForm, RegistrationForm



def login_page(request):
   error_message = None
   form = LoginForm(request.POST)
   if request.method == 'POST':
     
     form = LoginForm(request.POST)
     if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
                
            else:
                error_message = 'Invalid credentials'
   return render(request, 'login.html', {'form': form, 'error_message': error_message})
def register_page(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
            form = RegistrationForm()
    return render(request,'register.html',{'form':form})

@login_required
def Homepage(request):
    return render(request,'home.html',{})
def Logout(request):
    logout(request)
    return redirect('login')