/*****************************************************************************/
/* Nav: Event Handlers */
/*****************************************************************************/
Template.Nav.events({


	
});

/*****************************************************************************/
/* Nav: Helpers */
/*****************************************************************************/
Template.Nav.helpers({
	helperName: function(param1) {
		var scrolls = Session.get('scrollDistance');	
		var about = $('.about').offset() && $('.about').offset().top;
		var services = $('.services').offset() && $('.services').offset().top;
		var pricing = $('.pricing').offset() && $('.pricing').offset().top;
		var contact = $('.contact').offset() && $('.contact').offset().top;
		var portfolio = $('.portfolio').offset() && $('.portfolio').offset().top;
		var customers = $('.customers').offset() && $('.customers').offset().top;
		var aboutHeight = $('.about').height();
		var servicesHeight = $('.services').height();
		var pricingHeight = $('.pricing').height();
		var contactHeight = $('.contact').height();
		var portfolioHeight = $('.portfolio').height();
		var customersHeight = $('.customers').height();

		if(about <= 130 && about >= -(aboutHeight) +100 && param1 === 'about') {
			return 'active'
		} else if (services <= 130 && services >= -(servicesHeight) + 130 && param1 === 'services') {
			return 'active'
		} else if (portfolio <= 130 && portfolio >= -(portfolioHeight) - 250 && param1 === 'portfolio') {
			return 'active'
		} else if (pricing <= 100 && pricing >= -(pricingHeight) +75 &&  param1 === 'pricing') {
			return 'active'
		} else {
			return 'inactive'
			}
		}

});

/*****************************************************************************/
/* Nav: Lifecycle Hooks */
/*****************************************************************************/
Template.Nav.onCreated(function () {
});

Template.Nav.onRendered(function () {
});

Template.Nav.onDestroyed(function () {
});