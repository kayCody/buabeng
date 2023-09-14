from django.contrib import admin
from .models import Product 

# Register your models here.
class ProductsAdmin(admin.ModelAdmin):
    search_fields = ("productName",)
    
admin.site.register(Product, ProductsAdmin)