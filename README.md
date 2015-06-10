## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages. Make sure you've installed Node.js and npm first, then install bower globally using npm:

```bash
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process. Make sure you've installed Node.js and npm first, then install grunt globally using npm:

```bash
$ npm install -g grunt-cli

## Running Application
After the install process is over, you'll be able to run this application:

```bash
./start.sh

This application should run on port 3000, so in your browser just go to [http://localhost:3000](http://localhost:3000)

## Directory Layout
    
    start.sh            --> start script
    server.js           --> app
    public/             --> all of the files to be used in on the client side
      application.js    --> AngularJS main application file
      config.js         --> AngularJS configuration module
      lib/              --> angular and 3rd party JavaScript libraries
      modules/          --> the modules folder for AngularJS application modules
        core/           --> main module
          config/       --> for routes
          css/          --> css files
          factories/    --> 2 main object placed here
          img/          --> images
          views/        --> views
            
    config/             --> The config folder contains the files to configure application.
      env/              --> The env folder contains the configuration files loaded by the config.js file according to the current environment
        development.js  --> Contains data of all messages
      config.js         --> The configuration loader that loads the right configuration from the env folder
      express.js        --> Express configuration file, it initializes & configures the Express application
      init.js           --> The initialization file that set up a few project related configuraiton
      logger.js         --> write log data
    app/                --> The server folder contains all the server files of this application
      controllers/      --> This is for backend business logic.
      routes/           --> The routes folder contains the Server routing configuration files
      views/            --> For backend views
