App = Ember.Application.create();

App.Router.map(function(){
	this.resource('home',{path:'/'});
});

App.projects = Ember.Object.create({
	myprojects:[]
});

$(function(){
	$.get('projects',function(data){
		App.projects.myprojects.setObjects(eval(data));
	});
});
