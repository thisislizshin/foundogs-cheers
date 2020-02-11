from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    """ Custom User Model """

    GENDER_MALE = "male"
    GENDER_FEMALE = "female"

    GENDER_CHOICES = ((GENDER_MALE, "Male"), (GENDER_FEMALE, "Female"))

    avatar = models.ImageField(upload_to="avatars", blank=True)
    name = models.CharField(blank=True, max_length=255)
    nickname = models.CharField(blank=True, max_length=255)
    bio = models.TextField(blank=True)
    phone = models.CharField(max_length=13, null=True)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=10, blank=True)
    birthdate = models.DateField(blank=True, null=True)
    home_address = models.CharField(blank=True, max_length=255)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username
