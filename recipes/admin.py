# Register your models here.
from django.contrib import admin
from .models import Category, Recipe

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'description')
    list_filter = ('category',)
    search_fields = ('title', 'ingredients')

# Или можно зарегистрировать модели проще
# admin.site.register(Category)
# admin.site.register(Recipe)

