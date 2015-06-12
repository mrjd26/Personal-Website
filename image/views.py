from django.shortcuts import render
import os
import json
from django.http import HttpResponse
from PIL import Image

def home(request):
  return render(request, 'home.html')

def json_maker(request):
  lst = []
  parameter = request.GET['target']
  path = os.path.join(os.path.dirname(__file__),('static/' + parameter))
  for filename in os.listdir(path):
    dct = {}
    dct['src'] = '/static/' + parameter + '/' + filename
    #lst.append(filename)
    im = Image.open(path + '/' + filename)
    width,height = im.size
    dct['w'] = width
    dct['h'] = height
    lst.append(dct)

  data = json.dumps(lst)

  return HttpResponse(data)
