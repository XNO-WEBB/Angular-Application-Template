app.controller("homeController", function(mainService, $scope){
	var vm = this;

	mainService.obj.mainLocation = 'regular';

	vm.languages = [
		'php',
		'angular',
		'jquery',
		'gulp',
		'laravel',
		'grunt',
		'javascript',
		'vagrant',
		'cisco',
		'servers',
	];
});