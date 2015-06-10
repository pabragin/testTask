## Prerequisites
Make sure you have installed all of the following prerequisites on your development machine:
* Node.js 
* Bower

```bash
$ npm install -g bower
```

* Grunt

```bash
$ npm install -g grunt-cli
```

## Running Application
After the install process is over, you'll be able to run this application:

```bash
./start.sh
```

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

## Live example

[http://45.55.252.125:3000](http://45.55.252.125:3000)