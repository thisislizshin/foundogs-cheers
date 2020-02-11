from django.shortcuts import render


def all_pets(request):
    return render(request, "all_pets")
