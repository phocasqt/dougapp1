/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	 'scroll .home': function() {
		var scrolls = $('.home').scrollTop();
		Session.set('scrollDistance', scrolls);
		console.log('active');
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

	
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {

});

Template.Home.onDestroyed(function () {
});
