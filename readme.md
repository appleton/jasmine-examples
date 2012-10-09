# Running tests with Jasmine and Grunt

This repo contains two simple examples of executing [Jamsine](http://pivotal.github.com/jasmine/) specs in [PhantomJS](http://phantomjs.org/) via [Grunt](http://gruntjs.com/) with the [grunt-jasmine-runner](https://npmjs.org/package/grunt-jasmine-runner) task.

The `flat/` directory shows a simple example, and the `requirejs/` directory also includes [RequireJS](http://requirejs.org/).

## Usage
This depends on [Node.js](http://nodejs.org/) so install that plus [NPM](https://npmjs.org/) if you don't already have them -- instructions are available on their respective websites.

Install [PhantomJS](http://phantomjs.org/), again instructions are available on the website.

Clone the repo and cd into the folder you're interested in, e.g:

    git clone git@github.com:mrappleton/jasmine-examples.git
    cd jasmine-examples/flat

Install Grunt globally:

    npm install -g grunt

Install NPM dependencies:

    npm install

Run the specs on the command line:

    grunt jasmine

![Jasmine specs on the command line](http://f.cl.ly/items/2d3S2X0K3Y152M391j38/Screen%20Shot%202012-10-09%20at%2011.31.29.png)

Run the specs in a browser:

    grunt jasmine-server

![Jasmine specs in a browser](http://f.cl.ly/items/3W2H2K1u2v2a01271T1v/Screen%20Shot%202012-10-09%20at%2011.28.29.png)

## Additional tasks

Also included are the default `lint` and `watch` tasks which will run on spec and source files:

    grunt lint

![Grunt lint task](http://f.cl.ly/items/3h0f0O0m0H381K0I2N0l/Screen%20Shot%202012-10-09%20at%2011.33.01.png)

    grunt watch

![Grunt watch task](http://f.cl.ly/items/11322M0Q18043p383P3k/Screen%20Shot%202012-10-09%20at%2011.33.55.png)
