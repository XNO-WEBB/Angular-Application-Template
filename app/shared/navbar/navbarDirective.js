app.directive("navbar", function(){
	return {
		restrict: 		'E',
		templateUrl: 	"app/shared/navbar/navbarView.html",
		controller: 	"navbarController",
		controllerAs: 	"navbar"
	};
});