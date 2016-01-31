# generator-ngmodule

This Yeoman generator creates a "module" in the sense of a collection of files needed to produce a state in your Angular app. This folder consist of a module-declaration file, a controller, a view, and a Jasmine test file.

## Getting Started

Make sure you have [Yeoman](http://yeoman.io/) installed globally.

    npm install -g yo

Now, install this generator.

    npm install -g generator-ngmodule
    
To generate a module, navigate to the folder in your Angular app where you wish to create a module and invoke the generator with the module name as a parameter.

    yo ngmodule widgets
    
The generator will list the files it creates.

    create widgets/widgets.app.js
    create widgets/widgets.controller.js
    create widgets/widgets.controller.spec.js
    create widgets/widgets.view.html

## Folder Structure

The ngmodule generator creates a folder structure similar to how the [MEAN.JS](http://meanjs.org/) project lays out their [module folders](http://meanjs.org/docs/0.3.x/#angularjs-modules). If you are used to a more Rails-like folder structure (all controllers in one folder, all services in another folder, all views in a third folder, etc.), this structure may seems strange at first, but it provides the benefit that files are grouped together by **what they do**, and NOT by what kind of file they are.

    |---widgets 
    |-----widgets.app.js 
    |-----widgets.controller.js
    |-----widgets.spec.js
    |-----widgets.view.html


## Controller

The ngmodule generator creates a controller that uses the controllerAs-vm syntax recommended by John Papa in his [Angular style guide](https://github.com/johnpapa/angular-styleguide#controlleras-with-vm).

For now, it also injects *$scope* as a dependency. I plan to make that option and add more DI options in the future.

## Routing

The ngmodule generator is routing-agnostic; so, you will have to add routing configuration to use the controller and template it generates based on the routing system you use.

Here is an example of adding a state for the module if you are using [ui-router](https://github.com/angular-ui/ui-router).

    $stateProvider
        .state('widgets', {
            url: '/widgets',
            controller: 'widgetsController',
            controllerAs: 'vm',
            templateUrl: 'widgets.view.html'
        })

## Testing

The ngmodule generator creates a scaffold [Jasmine](http://jasmine.github.io/) test file for the controller, which includes a *beforeEach()* block and some basic tests to get you started.

## Styling

The styling in the view file produced is very minimal. Unless you are just starting out, you will probably not use this generator as-is, but instead fork it and adapt it to your particular app.

## Roadmap

The ngmodule generator is meant to automate the process of creating new modules in an already-existing Angular app. It is not for generating a full app from scratch. It may be helpful if you don't want to be tied down to a full-blown app generator, like [angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack).

I hope to add more options for individual modules in the future.
