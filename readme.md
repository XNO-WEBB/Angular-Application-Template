XNO - Angular Applications
==========================

##TODO: UPDATE ALL

Installation
------------

	> npm install -g grunt-cli
	> npm install


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
	assets/
	----- img/      // Images and icons for your app
	----- css/      // All styles and style related files (SCSS or LESS files)
	----- js/       // JavaScript files written for your app that are not for angular
	----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
	index.html



References
----------

> https://scotch.io/tutorials/angularjs-best-practices-directory-structure
