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
		console.log(projects.myprojects.length);
		if(projects.myprojects.length === 0){
			$.ajax({
				method:'GET',
				url:'projects',
				success:function(data){
					App.projects.myprojects.setObjects(eval(data));
				},
				async:false
			});
		}
		console.log(projects.myprojects);
		return projects.myprojects.findBy('id',params.project_id);	
	},
});

App.projects = Ember.Object.create({
	myprojects:[]
});

 // $(function(){
 // 	$.get('projects',function(data){
 // 		App.projects.myprojects.setObjects(eval(data));
 // 	});
 // });
