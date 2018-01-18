## Grunt example

Basic project setup with grunt. 

### Features

* Applies JShint, concatenates and minifies JavaScript
* Compiles Sass with development and production options
* Watches for changes in sass/js files
* Cleans `dist` folder

### Getting started

If you haven't used [Grunt](https://gruntjs.com/) before, be sure to check out the [Getting Started guide](https://gruntjs.com/getting-started) to install Grunt's command line interface (CLI) globally.

You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```
npm install -g grunt-cli
```

This task requires you to have [Ruby](http://www.ruby-lang.org/en/downloads/) and [Sass](http://sass-lang.com/install) installed. 

Clone repo and run

```
npm install 
```

to install dependencies.


###  Grunt tasks

`grunt`

Watches for changes in sass files inside `src/scss` folder and produces an expanded `dist/style.css` file. 
Watches for changes in js files inside `src` folder, checks their validity with JSHint and concatenates the result in `dist/<packgage-name>.js`.

`grunt develop`

Clears `dist` folder,  compiles sass files inside `src/scss` folder to `dist/style.css` file, and concatenates all js files inside `src` folder in `dist/<packgage-name>.js`.

`grunt production`

Clears `dist` folder,  compiles sass files inside `src/scss` folder to compressed `dist/style.css` file, and concatenates and minifies all js files inside `src` folder in `dist/<packgage-name>.min.js`.

`grunt clean`

Clears `dist` folder.