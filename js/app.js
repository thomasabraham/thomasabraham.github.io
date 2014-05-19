App = Ember.Application.create();

App.Router.map(function(){
	this.resource('home',{path:'/'});
	this.resource('projects',function(){
		this.resource('project',{path:':project_id'});
	});
	this.resource('project', { path: '/project/:project_id' });
});

App.ProjectRoute=Ember.Route.extend({
	model:function(params, transition){
		var projects = App.get('projects');
		console.log(projects[params.project_id]);
		return projects[params.project_id];	
	},
});

App.projects = Ember.Object.create({
	myprojects:[]
});

$(function(){
	$.get('projects',function(data){
		App.projects.myprojects.setObjects(eval(data));
	});
});
