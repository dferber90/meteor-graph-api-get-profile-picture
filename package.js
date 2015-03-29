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
