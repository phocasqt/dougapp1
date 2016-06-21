Template.MasterLayout.helpers({


	
});

Template.MasterLayout.events({
	'scroll .home': function() {
		var scrolls = $('.home').scrollTop();
		Session.set('scrollDistance', scrolls);
			console.log('active');

	},


	
	'click': function(e) {
			var target = $(e.currentTarget).attr('href');
		Session.set('clicks', target);
		clickAction = Session.get('clicks');
		console.log(clickAction); 
	}


});