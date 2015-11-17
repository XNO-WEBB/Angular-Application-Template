app.config(function($routeProvider)
{

	$routeProvider

	.when('/skills', 
	{
		templateUrl: 'app/components/skills/skillsView.html',
		controller: 'skillsController'
	})

	.when('/experience', 
	{
		templateUrl: 'app/components/experience/experienceView.html',
		controller: 'experienceController'
	})

	.when('/home',
	{
		templateUrl: 'app/components/home/homeView.html',
		controller: 'homeController'
	})

	.otherwise(
	{
		redirectTo: '/home'
	});

});
