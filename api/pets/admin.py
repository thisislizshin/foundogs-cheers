from django.contrib import admin
from django.utils.html import mark_safe
from . import models


@admin.register(models.Breed)
class ItemAdmin(admin.ModelAdmin):

    """ Item Admin Definition """

    list_display = ("name", "pets_count")

    def pets_count(self, obj):
        return obj.pets.count()

    pass


class PhotoInline(admin.TabularInline):

    model = models.Photo


@admin.register(models.Pet)
class PetAdmin(admin.ModelAdmin):

    """ Pet Admin Definition """

    inlines = (PhotoInline,)

    fieldsets = (
        (
            "Basic Info",
            {
                "fields": (
                    "name",
                    "birthdate",
                    "gender",
                    "breed",
                    "serial_number",
                    "deposit",
                    "is_adopted",
                    "description",
                )
            },
        ),
        ("Owner", {"fields": ("owner",)}),
    )

    list_display = (
        "name",
        "birthdate",
        "gender",
        "owner",
        "breed",
        "serial_number",
        "deposit",
        "is_adopted",
    )

    list_filter = (
        "name",
        "birthdate",
        "gender",
        "owner",
        "breed",
        "serial_number",
        "deposit",
        "is_adopted",
    )

    raw_id_fields = ("owner",)

    search_fields = ("^owner__username",)

    def count_photos(self, obj):
        return obj.photos.count()

    count_photos.short_description = "Photo Count"


@admin.register(models.Photo)
class PhotoAdmin(admin.ModelAdmin):

    """ Photo Admin Definition """

    list_display = ("__str__", "get_thumbnail")

    def get_thumbnail(self, obj):
        return mark_safe(f'<img width="50px" src="{obj.file.url}" />')

    get_thumbnail.short_description = "Thumbnail"
