'use strict';

describe('Graph API', function () {
	describe('Methods', function() {
		describe('getProfilePictureUrl', function () {

			var facebook;

			before(function () {
				facebook = new GraphAPI();

				// mock _call
				facebook._call = function (method, edge, params) {
					var edgePath = this._getEdgePath(edge);

					return new HTTPResponse(this.__response);
				}
			});

			it('returns a string', function() {
				var validUrl = 'https://www.facebook.com/profile-picture.jpg';

				facebook.__response = {
					statusCode: 200,
					data: {
						data: {
							url: validUrl
						}
					},
					headers: {

					}
				};

				expect(facebook.getProfilePictureUrl()).to.equal(validUrl);
			});
		});
	});
});
