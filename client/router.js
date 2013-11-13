Router.configure({
	layoutTemplate: 'main'
});

Router.map(function () {
	this.route('index',{
		path:'/'});
	
	this.route('article',{path:'/article'});
	
	this.route('article_item',{
		path:'/article/:_id',
		data: function () {
			var id = this.params._id;
			Session.set("id",id);
			return Article.findOne({_id: id});
			}
	});
	
	this.route('editor_article',{
		path:'/edit/:_id',
		data: function () {
			var id = this.params._id;
			Session.set("id",id);
			return Article.findOne({_id: id});
			}
	});
	
	this.route('editor',{
		path:'/edit'});
	
	this.route('account');
	
	this.route('about');
	
	this.route('author',{
		path:'/author/:_id',
		data: function () {
			var id = this.params._id;
			return Meteor.users.findOne({_id:id});
		}
	});
});
