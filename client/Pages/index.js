if (Meteor.isClient) {
	Template.index.article = function() {
		return Article.find({},{sort: {date: 1}});
	}
}
