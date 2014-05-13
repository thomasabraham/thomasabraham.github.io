App = Ember.Application.create();

App.Router.map(function(){
	this.resource('home',{path:'/'});
	this.resource('projects',function(){
		this.resource('project',{path:':project_id'});
	});
});

App.projects = Ember.Object.create({
	myprojects:[]
});

$(function(){
	$.get('projects',function(data){
		App.projects.myprojects.setObjects(eval(data));
	});
});
