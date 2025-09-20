# Windows

First install python from [here](https://www.python.org/downloads/)
Click the python download button and follow the install process for the installer.
#TODO add Pictures and make sure path is here

Windows is a little bit more complicated to setup your virtual enviorment for. 
If you are using an IDE like pycharm, you shouldn't have to worry about this process.

I would recomend using a bash-like command line interface that would work well with windows or install
a WSL (windows subsystem for linux) Virtual Machine. Use [this link](https://learn.microsoft.com/en-us/windows/wsl/install)and
follow the instructions to install wsl. This will allow you to use The linux install instructions [here](Linux.md)

Doing this process on windows does require you to allow permissions for a script to opperate. if you are not comfortable with this
i would go through the instructions to install WSL and follow the linux install instructions linked above.

# Now the setup

First lets figure out how we want the project structured. Personally i would create a folder on our ``C:`` drive called School.
and in that folder we can create a folder for our class called CS1030. The directory should look like ``C:\School\CS1030\Projects``.
This is where we will create our projects for the class.

Now create a folder for our portfolio, name it as such as well.
This folder will be the place where all of our portfolio will be held.

now if you right click in the empty folder you can open in terminal, this just opens a terminal in that directory.

To create our Virtual Enviorment we run the command 

```powershell
py -m venv djvenv
```

This creates the virtual enviroment, it might take a second so let it run till we return to the termnial.
now is when we allow for scripts to be ran in this powershell. If you don't want to be forced to do this every time you run powershell,
you can run powershell as admin or use a bash interface, such as WSL.

you can run
```powershell
Set-ExecutionPolicy Unrestricted -Scope Process
.\\djvenv\Scripts\activate.ps1
```

This just runs a script for powershell that puts your powershell to use that virtual enviroment.

#TODO add picture of what this looks like

This is where we can now run python commands and starting installing python for our install:
```powershell
py -m pip install django


```

you will be prompted to upgrade pip so run the commany ``python.exe -m pip install --upgrade pip`` to update your pip.

now lets look into getting your python project setup. you can run ``django-admin startproject django_project`` to create your project, we will end up moving files so the project makes more sense.

You will move all contents in the django_project folder into our project folder. Your Project Directory will look like this:

#TODO Add old and new pictures of what it should look like.


Lets add the next we run ``django-admin startapp portfolio_app``
Portfolio app will be our project we create first. 

Now Run this command 
```powershell
py manage.py runserver
```

You can open [http://localhost:8000/](http://localhost:8000/)to see if the server is now running!