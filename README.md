# Insure-Landing-Page-with-Django

## Live Demo:

https://github.com/ChristelPeerisR/Insure-Landing-Page-with-Django/assets/83603996/5a2fa6cb-852d-4a01-b65c-34d60dfcbcb5

## Functions

### Admin
- Create Admin account and Login.
- Can add new Schemes.

### User
- Create user login (User will receive confirmation mail).
- Can read Schemes.

## HOW TO RUN THIS PROJECT

### Prerequisites
- Python 3.12.0 installed (Ensure to select "Add to Path" during installation)

### Steps
1. Download the project ZIP folder and extract it.
2. Open your terminal or command prompt.

3. Install project dependencies by executing the following command:
```
python -m pip install -r requirements.txt
```
```
cd path/to/project/folder
```
```
py manage.py makemigrations
```
```
py manage.py migrate
```
```
py manage.py runserver
```
Once the server is running, open your web browser and enter the following URL:
```
http://127.0.0.1:8000/
```

These instructions provide clearer steps, organize the commands logically, and include a section on prerequisites for better understanding.

### CHANGES REQUIRED FOR DATABASE MANAGEMENT
In settins.py file, You have to give your username and password<br>
DATABASES = {<br>
    'default': {<br>
        'ENGINE': 'django.db.backends.postgresql',<br>
        'NAME': 'DB Name',<br>
        'USER':'postgres',<br>
        'PASSWORD':'Ypur password',<br>
        'HOST':'localhost'<br>
    }<br>
}<br>

## Contact & Feedback
Email: christelpeeris@gmail.com

