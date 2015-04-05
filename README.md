# Graph API

This package allows you to get a users profile picture from Facebook.

See [the core package](https://github.com/dferber90/meteor-graph-api).


## Quickstart

```js

facebook = new GraphAPI();
var profilePicture = facebook.getProfilePicture(fbUserId);

if (profilePicture)
	console.log(profilePicture.url);

```

## Extending the GraphAPI

The `getProfilePicture` is implemented like [this](https://github.com/dferber90/meteor-graph-api-get-profile-picture/blob/master/graph.js):

```js

GraphAPI.prototype.getProfilePictur = function (userId) {
	var response = this.get([userId, 'picture'], {
		redirect: false
	});

	return response.ok() ? response.data.data : false;
};

```

Here, `this.get` starts a new HTTP GET request to the Graph API.
The first parameter is an array which will be transformed into the Graph API edge.
For example `[userId, 'picture']` will be transformed to `/<userId>/picture`, so
the request will be made to `https://graph.facebook.com/v2.2/<userId>/picture`.



# License
The MIT License (MIT)

Copyright (c) 2015 Dominik Ferber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


