from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # path("", include("core.urls", namespace="core")),
    # path("pets/", include("pets.urls", namespace="pets")),
    # path("users/", include("users.urls", namespace="users")),
    # path("conversations/", include("conversations.urls", namespace="conversations")),
    path("admin/", admin.site.urls),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
