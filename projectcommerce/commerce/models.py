from django.db import models
from PIL import Image

OPTIONS = [
  ('Clothing', 'Clothings'),
  ('Electronics', 'Electronics'),
  ('Stationaries', 'Stationaries'),
  ('Groceries', 'Groceries'),
]
PRODUCTTYPE = [
   ('Featured', 'Featured'),
  ('Latest', 'Latest'),
]
# Create your models here.
class Product(models.Model):
  id=models.AutoField(primary_key=True, null=False, blank=False)
  ProductName = models.CharField(max_length=100, blank=False, null=False)
  category = models.CharField(max_length=100, blank=False, null=False, choices=OPTIONS)
  product_type = models.CharField(max_length=100, blank=False, null=False, choices=PRODUCTTYPE)
  price = models.IntegerField()
  quantity = models.IntegerField( default=1, blank=False, null=False)
  date_added = models.DateTimeField(auto_now_add=True)
  image = models.ImageField(default='default.jpg', upload_to = 'images/' )

  def __str__(self):
        return self.ProductName
    
  def save(self):
      super().save()  # saving image first
      image = Image.open(self.image.path) # Open image using self
      if image.height > 300 or image.width > 300:
          new_img = (470, 270)
          image.thumbnail(new_img)
          image.save(self.image.path)  # saving image at the same path
      