# Graph API

This package allows you to get a users profile picture url.


## Quickstart

See [the core package](https://github.com/dferber90/meteor-graph-api).


## Extending the GraphAPI

This package is written in a way that lets you easily extend its funcitonality.
Simply extend the GraphAPI prototype with your desired capability.

The `getProfilePictureUrl` is implemented like this:

```js

GraphAPI.prototype.getProfilePictureUrl = function (userId) {
	var response = this.get([userId, 'picture'], {
		redirect: false
	});

	return response.ok() ? response.data.data.url : false;
};

```

Here, `this.get` starts a new HTTP GET request to the Graph API.
The first parameter is an array which will be transformed into the Graph API edge.
For example `[userId, 'picture']` will be transforemd to `/<userId>/picture`, so
the request will be made to `https://graph.facebook.com/v2.2/<userId>/picture`.



