// MODULE
var angularApp = angular.module('angularApp', ['webcam','ngRoute','ngResource']);

//Routes
angularApp.config(function ($routeProvider){

	$routeProvider

	.when('/',{
		templateUrl: '/views/home.html',
        controller: 'homeController'
	})

	.when('/settings',{
		templateUrl: '/views/settings.html',
        controller: 'settingsController'
	})

	.when('/hostgame',{
		templateUrl: '/views/hostGame.html',
        controller: 'hostGameController'
	})
	.when('/gamepage',{
		templateUrl: '/views/gamePage.html',
        controller: 'mainController'
	})
	.when('/leaderboard',{
		templateUrl: '/views/leaderboard.html',
        controller: 'leaderBoardController'
	})	

});



// CONTROLLERS

angularApp.controller('mainController', ['$scope','$location', function($scope, $location){
    $scope.goNext = function (hash) { 
    $location.path(hash);
   }
}]);

angularApp.controller('homeController', ['$scope','$location', function($scope, $location){
    	$scope.goNext = function (hash) { 
        $location.path(hash);
}

}]);

angularApp.controller('settingsController', ['$scope', '$location', function($scope, $location){
    	$scope.goNext = function (hash) { 
        $location.path(hash);
    }

}]);

angularApp.controller('leaderBoardController', ['$scope', function($scope){


}]);

angularApp.controller('hostGameController', ['$scope','$location', function($scope, $location){
	$scope.goNext = function (hash) { 
    $location.path(hash);
}
}]);


/*
var Animal = function(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
};

function logPerson(personoranimalorwhatever){
    console.log(personoranimalorwhatever);
}

var pratik = new Animal("Pratik", "Koirala", 3);
logPerson(pratik);
*/