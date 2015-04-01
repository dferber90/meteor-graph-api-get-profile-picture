Package.describe({
	name: 'dferber:graph-api-get-profile-picture-url',
	version: '0.0.1',
	summary: 'Get a Facebook users profile picture URL on the server.',
	git: 'https://github.com/dferber90/meteor-graph-api-get-profile-picture-url',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	'use strict';
	
	api.versionsFrom('1.0.3.2');
	api.use(['dferber:graph-api', 'underscore', 'http'], 'server');
	api.addFiles(['graph.js'], 'server');
});



/*
	Run tests with
		meteor test-packages --driver-package respondly:test-reporter

	More information:
		https://blog.respond.ly/testing-meteor-packages-with-mocha/
 */
Package.onTest(function(api){
	api.use(['mike:mocha-package', 'practicalmeteor:chai']);

	api.use(['dferber:graph-api', 'underscore', 'http'], 'server');
	api.addFiles('tests/getProfilePictureUrl.js', ['server']);
});
