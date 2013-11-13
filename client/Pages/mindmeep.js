if (Meteor.isClient) {
	Template.navigation.authors = function () {
		return Meteor.users.find();
	};
};
