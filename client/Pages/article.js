if (Meteor.isClient) {

	Template.comments.comment = function () {
		var id = Session.get("id");
		return Comments.find({"id":id},{sort:{thread:-1,date: 1}});
	};
	
	Template.comment.events ({
		"click input[name='submit_comment']" : function () {
			var username = $("input[name='username']").val();
			var content = $("textarea[name='content']").val();
			var id = Session.get("id");
			console.log("id"+id);
			if (content && username && id) {
				var thread = content.substr(0,content.search(":"));
				console.log("thread option!");
				if (thread) {
					Comments.insert({"username":username, "content":content, "id" : id, "thread" : thread});
					console.log("thread is this"+thread);
				}
				else {
					console.log("thread failed");
					Comments.insert({"username":username, "content":content, "id" : id, "thread":username});
				}
			}
		}
	});
}
