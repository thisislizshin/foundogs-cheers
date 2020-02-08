from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models


@admin.register(models.User)
class CustomUserAdmin(UserAdmin):

    """ Custom User Admin """

    fieldsets = UserAdmin.fieldsets + (
        (
            "Custom Profile",
            {
                "fields": (
                    "avatar",
                    "name",
                    "nickname",
                    "bio",
                    "phone",
                    "gender",
                    "birthdate",
                )
            },
        ),
    )

    list_display = (
        "username",
        "name",
        "email",
        "is_active",
        "is_staff",
        "is_superuser",
        "is_verified",
    )
