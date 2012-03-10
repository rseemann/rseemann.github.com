App.Models.Guerrometro = Backbone.Model.extend({
	url : '/guerrometro',
	pollingInterval : 10000,
	
	defaults : {
		orc : 50,
		human : 50
	},
	
	startPolling : function(){
		var self = this;
		
		setInterval(function(){
			self.simulateFetch();
		}, this.pollingInterval);
	},
	
	simulateFetch : function(){
		var orc = Math.round(Math.random()*100);
		
		this.set({orc : orc, human : 100-orc});
	},
	
	orc : function(){
		return this.get('orc');
	},
	
	human : function(){
		return this.get('human');
	}
});
