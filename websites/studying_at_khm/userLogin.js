(function($) {
	/**
	 * Definition of the namespace
	 */

	$.fn.lib = $.fn.lib || {};

	/**
	 * Definition of the function's name, which will be called when initialising
	 * a DOM Element with the UserLogin
	 */
	$.fn.UserLogin = function(options) {
		// 'this' are the DOM Elements
		return this.each(function() {// for each dom element from selector
			// '$(this)' is the JQuery object
			if (!$(this).data('UserLogin')) {
				$(this).data(new UserLogin(this, options));
			}
		});
	};

	/**
	 * Constructor
	 */
	UserLogin = function(domReference, pOptions) {

		this.options = {};

		// IMPORTANT ! The domreference as to be defined as a member variable
		// in every of our jquery plugin, which need to call our custom
		// $.lib.ajax function
		this.domReference = domReference;

		$.extend(this.options, pOptions);

		this.init();
	};

	/**
	 * debug function of the UserLogin
	 * 
	 * @param string
	 *            text
	 * @todo better use /Lib/Ressource/Js/jquery.Debug.js
	 */
	UserLogin.prototype.debug = function(text) {
		return;
		if (typeof (console) !== 'undefined' && console != null) {
			console.log(text);
		}
	};

	/**
	 * Init function of the UserLogin
	 */
	UserLogin.prototype.init = function() {
		// var userLogin = $('div[data-widget-type="custom_userLogin"]');
		if ($(this.domReference).find('form#userLogin').length > 0) {
			this.initLogin();
		}
		if ($(this.domReference).find('.logout').length > 0) {
			this.initLogout();
		}
	};

	UserLogin.prototype.initLogin = function() {
		var self = this;
		$(this.domReference).find('form#userLogin').submit(function(event) {
			self.login();
			return false;// avoid the submiting
		});
	};

	UserLogin.prototype.initLogout = function() {
		var self = this;
		$(this.domReference).delegate('.logout', "click", function(event) {
			//self.debug("logout");
			//self.debug($(self.domReference).find('.logout'));
			self.logout();                                                                      
			return false;
		});
	};

	/**
	 * Handling the login
	 */
	UserLogin.prototype.login = function() {
		var userLoginForm = $(this.domReference).find('form#userLogin');
		this.debug(userLoginForm);

		// call our custom ajax function to perform the login
		var loginnameValue = userLoginForm.find('input#loginName:first').val();
		var passwordValue = userLoginForm.find('input#password:first').val();

		var pageToLoad = "";
		if(this.options.pageToLoad != undefined)
		{
			pageToLoad = this.options.pageToLoad;
		}
		
		$.lib.ajax("login",// used to put the function names _loginSucess
		// and _loginError together
		{
			data : {
				"loginname" : loginnameValue,
				"password" : passwordValue,
				"pageToLoad" : pageToLoad
			}
		}, 'custom_userLogin', this);
	};

	/**
	 * Callback when the ajax call triggered by 'login' is a succes
	 */
	UserLogin.prototype._loginSuccess = function(response) {
		$.lib.Debug.debug('_loginSuccess');
		$.lib.Debug.debug(response);
		
		$(window).trigger("userLogin", response.data.userId);
		
		if (response.pageToLoad != undefined) {
			location.assign(response.pageToLoad);
		} else {
			//location.reload(true);
			location.reload();
		}
	};

	/**
	 * Callback when the ajax call triggered by 'login' is a failure
	 */
	UserLogin.prototype._loginError = function(response) {
		$.lib.Debug.debug('_loginError');

		$(this.domReference).find('#userLoginMessage').addClass('wrong').html(
				response['message']);
	};

	/**
	 * Handling the logout
	 */
	UserLogin.prototype.logout = function() {
		// this.debug("ajax logout");
		$.lib.ajax("logout", {
			data : {}
		}, 'custom_userLogin', this);
	};

	UserLogin.prototype._logoutSuccess = function(response) {
		$.lib.Debug.debug('_logoutSuccess');

		if (typeof response.pageToLoad != 'undefined') {
			location.assign(response.pageToLoad);
		} else {
			//location.reload(true);
			location.reload();
		}
	};

	UserLogin.prototype._logoutError = function(response) {
		$.lib.Debug.debug('_logoutError');
		$.lib.Debug.debug(response);
	};
})(jQuery);
