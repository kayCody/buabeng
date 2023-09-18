from django.urls import path
from . import views

urlpatterns=[
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('product/', views.product, name='product'),
    path('product-details/', views.product_detail, name='product-detail'),
    path('contact/', views.contact, name='contact'),
    path('account/', views.account, name='account'),
    path('cart/', views.cart, name='cart'),
]