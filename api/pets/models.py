from django.db import models
from core import models as core_models


class AbstractItem(core_models.TimeStampedModel):

    """ Abstract Item """

    name = models.CharField(max_length=80)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class Breed(AbstractItem):

    """ Breed Model Definition """

    class Meta:
        verbose_name = "Breed"


class Photo(core_models.TimeStampedModel):

    """ Photo Model Definition """

    caption = models.CharField(max_length=80)
    file = models.ImageField(upload_to="pet_photos")
    pet = models.ForeignKey("Pet", related_name="photos", on_delete=models.CASCADE)

    def __str__(self):
        return self.caption


class Pet(core_models.TimeStampedModel):

    """ Pet Model Definition """

    GENDER_MALE = "male"
    GENDER_FEMALE = "female"

    GENDER_CHOICES = ((GENDER_MALE, "Male"), (GENDER_FEMALE, "Female"))

    name = models.CharField(max_length=140)
    birthdate = models.DateField(blank=True, null=True)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=10, blank=True)
    owner = models.ForeignKey(
        "users.User", related_name="pets", on_delete=models.CASCADE
    )
    breed = models.ForeignKey(
        "Breed", related_name="pets", on_delete=models.SET_NULL, null=True
    )
    serial_number = models.IntegerField()
    deposit = models.IntegerField(default=0)
    is_adopted = models.BooleanField(default=False)
    nft_hash = models.CharField(max_length=140, null=True)
    description = models.TextField()

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.city = str.capitalize(self.city)
        super().save(*args, **kwargs)

    def first_photo(self):
        try:
            (photo,) = self.photos.all()[:1]
            return photo.file.url
        except ValueError:
            return None

    def get_next_four_photos(self):
        photos = self.photos.all()[1:5]
        return photos
