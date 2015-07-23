app.config(function($routeProvider)
{

	$routeProvider

		.when('/',
	{
		templateUrl: 'app/components/home/homeView.html',
		controller: 'homeController'
	})

	.when('/posts',
	{
		templateUrl: 'app/components/posts/postsView.html',
		controller: 'postsController',
		controllerAs: 'posts'
	})

	.otherwise(
	{
		redirectTo: '/'
	});

});
