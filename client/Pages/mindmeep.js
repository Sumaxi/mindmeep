if (Meteor.isClient) {
	Template.navigation.authors = function () {
		return Meteor.users.find();
	};
	
	Template.navigation.events ({
		"click button[name='search_submit']" : function () {
			var search = $("input[name='search']");
			return Session.set("search-query", search);
		}
	});
	
};
