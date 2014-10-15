#angular-code-mirror &nbsp; [![Build Status](https://travis-ci.org/a8m/angular-code-mirror.svg?branch=master)](https://travis-ci.org/a8m/angular-code-mirror) [![Coverage Status](https://coveralls.io/repos/a8m/angular-code-mirror/badge.png?branch=master)](https://coveralls.io/r/a8m/angular-code-mirror?branch=master)
>2 way binding code mirror for AngularJS based on google-prettify,  **v0.0.3**

##Table of contents:
- [Get Started](#get-started)
- [Example](#example)
- [TODO](#todo)
- [Development](#development)

#Get Started
**(1)** Get angular-code-mirror in one of 2 ways:
  - clone & [build](#developing) this repository
  - via **[Bower](http://bower.io/)**: by running `$ bower install angular-code-mirror` from your console

**(2)** Include `angular-code-mirror.js` (or `angular-code-mirror.min.js`) in your `index.html`, after including Angular itself.

**(3)** Include `angular-code-mirror.css` in the `<head>` tag

**(4)** Add `'ng-code-mirror'` to your main module's list of dependencies.

When you're done, your setup should look similar to the following:

```html
<!doctype html>
<html ng-app="myApp">
<head>
    <!--style-->
    <link rel="stylesheet" href="vendor/angular-code-mirror/css/angular-code-mirror.css"/>
    <!--scripts-->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min.js"></script>
    <script src="vendor/angular-code-mirror.min.js"></script>
    <script>
        var myApp = angular.module('myApp', ['ng-code-mirror']);

    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```
#Example
Example:
```html
<body>
 ...
  <!-- add ng-model to your input/textarea -->
  <textarea  class="form-control" rows="20" ng-model="code">
  
  <!--select language and bind the model to the code-mirror directive-->
  <code-mirror lang="js" model="code"></code-mirror>
  
    <!--codemirror with line numbers-->
  <code-mirror lang="js" model="code" line-numbers="true"></code-mirror>
 ...
</body>
```

#TODO
* Add presets/theme(Darcula, phpstorm, sublime, etc..)

#Development
Clone the project: <br/>
```sh
$ git clone 
$ npm install
$ bower install
```
Run the tests:
```sh
$ grunt test
```
**Deploy:**<br/>
Run the build task, update version before(bower,package)
```sh
$ grunt build
$ git tag v0.*.*
$ git push origin master --tags
