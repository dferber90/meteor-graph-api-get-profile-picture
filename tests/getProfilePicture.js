'use strict';

describe('Graph API', function () {
	describe('Methods', function() {
		describe('getProfilePicture', function () {

			var facebook;

			before(function () {
				facebook = new GraphAPI();

				// mock _call
				facebook._call = function (method, edge, params) {
					var edgePath = this._getEdgePath(edge);

					return new HTTPResponse(this.__response);
				}
			});

			it('returns the url', function() {
				var validUrl = 'https://www.facebook.com/profile-picture.jpg';

				var data = {
					is_silhouette: false,
					url: validUrl
				};

				facebook.__response = {
					statusCode: 200,
					data: {
						data: data
					},
					headers: {

					}
				};

				expect(facebook.getProfilePicture()).to.equal(data);
			});
		});
	});
});
