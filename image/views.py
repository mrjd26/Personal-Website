from django.shortcuts import render
import os
import json
from django.http import HttpResponse
from PIL import Image

def home(request):
  post = {
             'Animation with Html5 Canvas':{
                                         'imgSrc':'/static/blackandwhite.png',
                                         'caption':'A good way to animate using Html5 Canvas is by asking the browser for RequestAnimationFrame.  This browser method was created to handle animations inside browsers. It is usefull across different browsers with different frame update rates as well. This post covers the very basic idea to get started with an Html5 Canvas animation'
                                        },
             'Basic Math in a Bowling Game':{
                                         'imgSrc':'/static/bowling.png',
                                         'caption':'Much of computer programming can be performed with basic math skills.  Think of setting percentages in CSS3 for div heights or setting a javascript popup to open at 1/2 the width of the current browser window. Taking this concept one step further, some classical formulas for geometry and algebra can be helpful when creating apps.  See how a bowling game was created with the <canvas> tag and some helpful formulas to make the game play ( at least a little ) more realistic.',
                                          'url':'math',
                                            }
        }

  return render(request, 'home.html', {'post': post})

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

def math(request):
  return render(request, 'bowl.html')

  return HttpResponse(data)
