angular.module("myApp",["ngRoute"]).config(function(a){a.when("/",{templateUrl:"views/main.html",controller:"Admin2Ctrl"}).otherwise({redirectTo:"/"})});