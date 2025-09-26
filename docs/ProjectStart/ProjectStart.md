# GE02 Project Start

Starting the project is quite simple, we are just going to understand what we installed and what we need.
```
pip freeze > requirements.txt
```

Running this in our virutal enviorment in a termnial lets us see what prerequistes we need for our project.

# Git
We will make a new branch for our project, this lets us make a seperate section of code that lets us modify code while keeping a old backup of our code.

running ``git checkout -b GE02`` will create a new branch of code called GE02.
we will also create a ``.gitignore`` file that will tell github to ignore files to our repo

the file will look like this:

<details>
<summary>.gitignore</summary>

```
# Byte-compiled / optimized / DLL files
__pycache__/
django_project/__pycache__/
*.py[codz]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#  Usually these files are written by a python script from a template
#  before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py.cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
.pybuilder/
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
#   For a library or package, you might want to ignore these files since the code is
#   intended to run in multiple environments; otherwise, check them in:
# .python-version

# pipenv
#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
#   However, in case of collaboration, if having platform-specific dependencies or dependencies
#   having no cross-platform support, pipenv may install dependencies that don't work, or not
#   install all needed dependencies.
#Pipfile.lock

# UV
#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#uv.lock

# poetry
#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
#poetry.lock
#poetry.toml

# pdm
#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.
#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control
#pdm.lock
#pdm.toml
.pdm-python
.pdm-build/

# pixi
#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.
#pixi.lock
#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one
#   in the .venv directory. It is recommended not to include this directory in version control.
.pixi

# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
__pypackages__/

# Celery stuff
celerybeat-schedule
celerybeat.pid

# Redis
*.rdb
*.aof
*.pid

# RabbitMQ
mnesia/
rabbitmq/
rabbitmq-data/

# ActiveMQ
activemq-data/

# SageMath parsed files
*.sage.py

# Environments
.env
.envrc
.venv
.djvenv/
djvenv/
djvenv/*
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

# Cython debug symbols
cython_debug/

# PyCharm
#  JetBrains specific template is maintained in a separate JetBrains.gitignore that can
#  be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
#  and can be added to the global gitignore or merged into this file.  For a more nuclear
#  option (not recommended) you can uncomment the following to ignore the entire idea folder.
#.idea/

# Abstra
# Abstra is an AI-powered process automation framework.
# Ignore directories containing user credentials, local state, and settings.
# Learn more at https://abstra.io/docs
.abstra/

# Visual Studio Code
#  Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore
#  that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
#  and can be added to the global gitignore or merged into this file. However, if you prefer,
#  you could uncomment the following to ignore the entire vscode folder
# .vscode/

# Ruff stuff:
.ruff_cache/

# PyPI configuration file
.pypirc

# Marimo
marimo/_static/
marimo/_lsp/
__marimo__/

# Streamlit
.streamlit/secrets.toml
```
</details>

after this i would commit your stage and commit those files. I do this through my VScode but you can do this through your termnial as well. [This Link](https://education.github.com/git-cheat-sheet-education.pdf) will help you understand git commands and will be a useful resource for using git.

# Creating the Portfolio App

We will first make our portfolio app. This is done with running ``django-admin startapp portfolio_app`` in our terminal.

This creates our protfiol app and adds files into it. After that we will need to edit or django_project's settings.py file, adding portfolio_app to our installed apps and adding an authentication backend:

```python
INSTALLED_APPS = [
# ...
'django.contrib.auth',
'django.contrib.contenttypes',
'django.contrib.sessions',
'django.contrib.messages',
'Django.contrib.staticfiles',
# Add your app name here
'portfolio_app',
]
# Add support for authenticating users
AUTHENTICATION_BACKENDS = [
'django.contrib.auth.backends.ModelBackend',
]
```

# Defining URL path and view

#TODO ADD RESOURCES

Open django_project urls.py to add our admin path to include specfiic urls that will be created in the portfolio_app urls.py. You need to import include:

```python
from django.contrib import admin
from django.urls import path, include
urlpatterns = [
path('admin/', admin.site.urls),
#connect path to portfolio_app urls
path('', include('portfolio_app.urls')),
]
```

After this we will update our ``portfolio_app/views.py`` by defining the following view for the home page:

```python
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
# Render the HTML template index.html with the data in the
context variable.
return HttpResponse('home page')
```

and we will now create a urls.py file in our portfolio_app that contains a path to the defined view:

```python
from django.urls import path
from . import views
urlpatterns = [
#path function defines a url pattern
#'' is empty to represent based path to app
# views.index is the function defined in views.py
# name='index' parameter is to dynamically create url
# example in html <a href="{% url 'index' %}">Home</a>.
path('', views.index, name='index'),
]
```

now running the server with ``python3 manage.py runserer`` on linux or ``py manage.py runserver`` on windows. Now open [http://127.0.0.1:8000](http://127.0.0.1:8000) and you should see a home page.

#TODO add picture example of what it should look like

Now we will update ``portfolio_apps/views.py`` views by defining the following view for the home page

```python
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
# Render index.html
return render( request, 'portfolio_app/index.html')
```

openning [http://127.0.0.1:8000](http://127.0.0.1:8000) will result in a issue which we will fix next part.

# Creating the Template

First lets create a folder called templates in our portfolio_app folder, then create a folder called portfolio app in that templates folder, the directory should look like ``portfolio_app/templates/portfolio_app``.

Now create a ``base_template.html`` file in ``templates/portfolio_app`` folder. This will contain the html needed on every page, such as the navigation menu. Paste the following into it:

```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
<title>UCCS CS Students</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,
initial-scale=1">
<title>Bootstrap demo</title>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap
.min.css" rel="stylesheet"
integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDE
XuppvnDJzQIu9" crossorigin="anonymous">
</head>
<body>
<div class="container-fluid">
<!-- Navbar-->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<img src="{% static 'images/uccs_logo.gif' %}">
<div class="container-fluid">
<button class="navbar-toggler" type="button"
data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
aria-controls="navbarNavAltMarkup" aria-expanded="false"
aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse"
id="navbarNavAltMarkup">
<div class="navbar-nav">
<!-- {% url 'index' %} is defined in url path to
dynamically create url -->
<a class="nav-link active" aria-current="page" href="{%
url 'index' %}">Home</a>
<a class="nav-link" href="#">Menu 2</a>
<a class="nav-link" href="#">Menu 3</a>
{% if user.is_authenticated %}
<a class="nav-link" href="{% url 'logout' %}?next={{
request.path }}">Logout {{user}}</a>
{% else %}
<a class="nav-link" href="{% url 'login' %}?next={{
request.path }}">Login</a>
{% endif %}
</div>
</div>
</div>
</nav>
<div class="col-sm-10">
<!-- add block content from html template -->
{% block content %}
{% endblock %}
```

in this piece of code you will notice ``{% codeblock %}``, these sections are where django will fill in the data provided form the database. for now we don't have to worry to much at these, but later these are the basis of using this framework.

now lets create a index html in the same folder as the last directory, title it ``index.html``, we will put this: 
```html
<!-- inherit from base.html-->
{% extends "portfolio_app/base_template.html" %}
<!-- Replace block content in base_template.html -->
{% block content %}
<h1>Computer Science Portfolios</h1>
<h2>More to come from [and your name goes here]</h2>
{% endblock %}
```

Make sure to fill in your name.

Restarting our server results in seeing an error. Try and investigate why this error occured and try to fix it. (Hint look at the login field in the html)

Now your website should look good and should be functioning.


# Static Content
Static content is content such as pictures. To add static content we first need to add to our ``settings.py``

We need the top of the ``settings.py`` file to look like this:

```python
import os

from pathlib import Path
```

next, near the bottom of the file we need to add settings that tell Django where to find the static content of the website. this is built from the BASE_DIR defined in ``settings.py`` already.

```python
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/
STATIC_URL = 'static/'
STATICFILES_DIRS = [
os.path.join(BASE_DIR, 'static')
]
MEDIA_URL = '/images/'
```

At the top of our ``base_template.html`` we add ``{% load static %}`` above ``<!DOCTYPE html>``

```html
{% load static %}

<!DOCTYPE html>
```

if you want to test this out you can download [This Picture](https://brand.uccs.edu/sites/g/files/kjihxj1416/files/inline-images/uccs-signature-email.gif)

and replace 
```html
<a class="navbar-brand" href="#">Navbar</a>
```
with
```html
<img src="{% static 'images/uccs_logo.gif' %}">
```

After this, open [http://127.0.0.1:8000](http://127.0.0.1:8000) and you  should see the logo.

Now version on your branch and update your remote repository.
You can merge with your main branch and tag the code as GE02.

We have now finished the first section of our website!

[orignal Resource](https://docs.google.com/document/d/1qFe5nsJ5JPfvojJ15Mr6Z49xBQXN5AvY/edit#heading=h.1fob9te)