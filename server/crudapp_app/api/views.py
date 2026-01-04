from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book
from .serializer import BookSerializer

@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serializedData = BookSerializer(books, many=True).data
    return Response(serializedData)

@api_view(['POST'])
def create_books(request):
    data = request.data
    print("*************88",data)
    serializer = BookSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "data": serializer.data},status=status.HTTP_201_CREATED)
    else:
        return Response({"status": "error", "errors": serializer.errors},
                        status=status.HTTP_400_BAD_REQUEST)
