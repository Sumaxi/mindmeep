if (Meteor.isClient) {

	Template.comments.comment = function () {
		var id = Session.get("id");
		return Comments.find({"id":id},{sort: {date: -1}});
	};
	
	Template.comment.events ({
		"click input[name='submit_comment']" : function () {
			var username = $("input[name='username']").val();
			var content = $("textarea[name='content']").val();
			var id = Session.get("id");
			console.log("id"+id);
			if (content && username && id) {
				Comments.insert({"username":username, "content":content, "id" : id});
			}
		}
	});
}
