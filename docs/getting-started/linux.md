# Linux

Before you start this process make sure that Python3 is installed.
On my machine i had to install python3-full to get my virutal enviroment set up.
That is done by entering this into the terminal:

```bash
sudo apt update
sudo apt install python3-full
```

Now lets create your virtual enviorment, you can setup the file structure
however you would like, personally i set up mine as such

```bash
/CS1030/portfolio
```

This is accomplished through 

```bash
mkdir CS1030
cd CS1030
mkdir portfolio
cd portfolio
```

This will lead you into the portfolio folder. we will create our virtual enviorment from there,
we do this with the command
```bash
python3 -m venv djvenv
```

This command tells python to create a virtual enviroment in that directory called djvenv.
we tell our system we want that as our source directory by doing
```bash
source djvenv/bin/activate
```

this will result into your terminal to be in this virtual enviorment.
we can now install update pip and install django.

```bash
python3 -m pip install --upgrade pip

pip install django
```

Now that django installed we can now start our django project.
```bash
django-admin startproject django_project
```

this command tells django to start a project called django_project.
we will now reorder our file structure to make it easier to use.

```bash
mv django_project/manage.py ./
mv django_project/django_project/* django_project
rm -r django_project/django_project/
```

we can now run the command to start the server:
```bash
python3 manage.py runserver
```

This is where you will use your prefered editor for your machine.
If you are using WSL (windows subsystem for linux) you can type ```code .``` to run VSCode

You can open http://localhost:8000/ to see if the server is now running!