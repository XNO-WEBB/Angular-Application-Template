app.controller("appController", function(mainService, $scope){
	var vm = this;

	vm.data = mainService.obj;
});