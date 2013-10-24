if (Meteor.isClient) {
	Template.account.account = function () {
		return Meteor.userId();
	};
	
	Template.sign_in.events ({
		"click input[name='submit_in']" : function () {
			console.log("oh shit");
			var username = $("input[name='username']").val();
			var pass = $("input[name='pass']").val();
			Meteor.loginWithPassword(username,pass, function (err) {
				if (err) {
					console.log("Error: Your username and password are incorrect."+username+"  "+pass);
				}
			});
		}
	});
	
	Template.sign_out.events ({
		"click input[name='submit_out']" : function () {
			Meteor.logout();
		}
	});
	Template.sign_up.events ({
		"click input[name='submit_up']" : function () {
			
			var username = $("input[name='username_sign']").val();
			var pass = $("input[name='pass_sign']").val();
			var pass_confirm = $("input[name='pass_confirm']").val();
			var email = $("input[name='email']").val();
			console.log("Test Works username "+username+" pass "+pass+" passconfirm "+pass_confirm+" email "+email);
			if (pass == pass_confirm && username && pass && pass_confirm && email) {
				Accounts.createUser({"username":username, "password" : pass, "email" : email}, function (err) {
					if (err) {
						console.log("Error username "+username+" pass "+pass+"passconfirm"+pass_confirm+" email "+email);
					}
					else {
						console.log("Works username "+username+" pass "+pass+"passconfirm"+pass_confirm+" email "+email);
					}
				});
			}
			
		}
	});
	
	Template.blog.events ({
		"click input[name='submit_article']" : function () {
			
			var title = $("input[name='title_blog']").val();
			var content = $("textarea[name='content_blog']").val();
			function pre(content) { return content.substring(1,200); };
			var pre_content=pre(content);
			var author = Meteor.user().username;
			
			console.log("Clicked to submit a blog article post. Title = "+title+" content "+content+" pre_content "+pre_content+" author "+author);
			if (title && content) {
				Article.insert({"title" : title, "content" : content, "pre_content" : pre_content, "author" : author});
			}
		}
	});
	
	Template.editor.Article = function() {
		return Article.find({}, {sort: {date: -1}});
	};
	
	Template.editor.events ({
		"click button[name='delete_article']" : function () {
			Article.remove({_id: this._id});
		}
	});
	
	Template.editor_article.events ({
		"click input[name='submit_article_edit']" : function () {
			var title = $("input[name='title_blog']").val();
			var content = $("textarea[name='content_blog']").val();
			function pre(content) { return content.substring(1,200); };
			var pre_content=pre(content);
			var author = Meteor.user().username;
			var id = Session.get("id");
			Article.update({_id:id},{"title" : title, "content" : content, "pre_content" : pre_content, "author" : author});
		},
		"click button[name='delete_article']" : function () {
			var id = Session.get("id");
			Article.remove({_id:id});
		}
	});
};
