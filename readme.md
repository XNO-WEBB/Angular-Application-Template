XNO - Angular Applications
==========================

Installation
------------

	> npm install -g grunt-cli
	> npm install

	> grunt install


File structure
--------------

	app/
	----- shared/   // Acts as reusable components or partials of our site
	---------- sidebar/
	--------------- sidebarDirective.js
	--------------- sidebarView.html
	---------- article/
	--------------- articleDirective.js
	--------------- articleView.html
	----- components/   // Each component is treated as a mini Angular app
	---------- home/
	--------------- homeController.js
	--------------- homeService.js
	--------------- homeView.html
	---------- blog/
	--------------- blogController.js
	--------------- blogService.js
	--------------- blogView.html
	----- app.module.js
	----- app.routes.js
	config/
	-------- locationProvider.config.js // Our config files for angular
	public/
	-------- css/	// All assets that have been grunted is stored
	-------- js/	// inside a public folder for easier access
	-------- img/	//
	resources/
	----- img/      // Images and icons for your app
	----- less/     // All your less files
	----- js/       // JavaScript files written for your app that are not for angular
	index.html


References
----------

> https://scotch.io/tutorials/angularjs-best-practices-directory-structure
