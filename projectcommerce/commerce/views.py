from django.shortcuts import render
from .models import Product

# Create your views here.
def home(request):
    querydata = Product.objects.filter(product_type = 'Featured')
    queries = Product.objects.filter(product_type = 'Latest')
    context = {
        'querydata': querydata,
        'queries': queries 
    }
    return render(request, 'home.html', context)
def about(request):
    return render(request, 'about.html')
def product(request):
    queries = Product.objects.all()
    context = {
        'queries': queries 
    }
    return render(request, 'product.html', context)
def contact(request):
    return render(request, 'contact.html')
def product_detail(request):
    product = Product.objects.get(id = id)
    context = {
        'product':product
    }
    return render(request, 'product_details.html', context)
def cart(request):
    return render(request, 'cart.html')
def account(request):
    return render(request, 'account.html')