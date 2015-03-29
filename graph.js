'use strict';

/* global GraphAPI: false */

GraphAPI.prototype.getProfilePictureUrl = function (userId) {
	var response = this.get([userId, 'picture'], {
		redirect: false
	});

	return response.ok() ? response.data.data.url : false;
};
