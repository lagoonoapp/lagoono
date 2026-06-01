# Python Web App
 
## Installation
### Python server

1. In the terminal, or command prompt, move to the root folder.
2. Run the following command: 

    ```
    python -m venv server/venv
    ```

3. When the installation finished, when use with VS Code, click *View -> Command Palette -> Python: Select Interpreter*. 
    
    In the prompt input, enter: 

    ```
    .\server\venv\Scripts\python.exe
    ```

4. Activate the virtual environment.
    
    For Windows, run:

    ```
    server\venv\Scripts\activate.bat
    ```

    For Mac/Linix, run:

    ```
    source server/venv/bin/activate
    ```

5. Install Python packages (currently, Python 3.8 is supported)
    
    Run the command:

    ```
    pip install -r requirements.txt
    ```

6. In the root folder, create a file called *.env* name. Add the following content to it:

    ```
    FLASK_APP=application
    DB_URL=postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName
    SECRET_KEY=SomeHardToGuessString
    JWT_SECRET_KEY=SomeHardToGuessString
    SECRET_SALT=SomeHardToGuessString
    ```
7. If you use VS Code, create a launch.json as described here https://code.visualstudio.com/docs/python/tutorial-flask#_run-the-app-in-the-debugger

    When prompted to enter the python file name, change *app.py* to *server/application.py*.

    Note. To support Python code hot reload, remove the "--no-reload" from launch.json, the "args" section.

8. Create database tables. Your database mentioned in DB_URL env variable, already should exist. Move to the *server* folder and run:

    ```
    flask dbcreate
    ```

### Front-end
In another terminal, move to the *webapp* forlder and run the following command to install the NPM packages: 

```
npm install
```

## Running
1. In one terminal, move to *server* folder and run the command:

    ```
    flask run
    ```
    
    or, if you use VS Code click *Run -> Start Debugging*.
2. In another terminal (for example, windows prompt), move to *webapp* folder and run the following command:

    ```
    npm install
    ```
    If there are not errors, run the following command:

    ```
    npm run dev
    ```
    This commain will run the webpack server with hot reloading. To compile the production code, please run the following command:

    ```
    npm run prod
    ```
3. In your favorite browser, navigate to http://127.0.0.1:5000/ 


## Extensions and services
### Sending emails
To enable sending emails (for confirmation during the registration) please add the following environment variables to your .env file:

- MAIL_SERVER
- MAIL_PORT
- MAIL_USE_SSL # True of False
- MAIL_USE_TLS # True of False
- MAIL_USERNAME
- MAIL_PASSWORD
- ADMIN_EMAIL
- MAIL_DEFAULT_SENDER

For example, for websites hosted with Namecheap hosting provider and using privateemail service, use the following settings:

- MAIL_SERVER = 'mail.privateemail.com'
- MAIL_PORT = 465
- MAIL_USE_SSL = True
- MAIL_USE_TLS = False
- MAIL_USERNAME = 'your_email'
- MAIL_PASSWORD = 'your_email_password'
- ADMIN_EMAIL = 'your_admin_email'
- MAIL_DEFAULT_SENDER = 'your_email'

If you use Mailgun, the following settings work:

- MAIL_SERVER = 'smtp.mailgun.org'
- MAIL_PORT = 587
- MAIL_USE_SSL = False
- MAIL_USE_TLS = False
- MAIL_USERNAME = 'your_email'
- MAIL_PASSWORD = 'your_email_password'
- ADMIN_EMAIL = 'your_admin_email'
- MAIL_DEFAULT_SENDER = 'your_email'

# Deployment to AWS
1. In Configuration --> Container options find WSGIPath The file that contains the WSGI application.
    set the value server.application
2. Do not set up env variable FLASK_APP=server.application, only do it for the local app.

# Running unit tests
## Python tests

Run the following command:
```
python -m pytest
```
To be able to see the output of print() function, run the command:
```
python -m pytest -s
```

To run a specific file with tests just add the file name relatively to the /server:

```
python -m pytest -s server/tests/test_services.py

for example
python -m pytest -s server/tests/test_ignore_filters.py
```
Add -v key for more information on output (output will not be truncated and will be easier to read).

To debug inside the tests code, add this configuration to the launch.json:
```
{
            "name": "Debug pytest",
            "type": "debugpy",
            "request": "launch",
            "module": "pytest",         // Specifies pytest as the entry point
            "args": ["tests"],          // Replace "tests" with the path to your test directory or file
            "justMyCode": false,        // Allows stepping into third-party libraries if needed
            "console": "integratedTerminal" // Debugging output in the integrated terminal
        }
```
then click the Run and debug on the left menu of VS code, select the corresponding configuration from the dropdown. You also should have your test code file open.
To run a specific file, set this setting, for example (check path to the file!):
"args": ["server/tests/test_check_schedule.py"], 