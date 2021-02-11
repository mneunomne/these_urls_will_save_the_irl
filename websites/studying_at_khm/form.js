var debugForm = function(pMessage) {
	return;
	//console.log("form.js:" + pMessage);
	// return;
	// to get detail informations
	// console.log(arguments.callee.caller);
	// console.trace();
};
// debugForm("load");

(function($) {
	
	// debugForm("function($)");
	$.lib = $.lib || {};
	
	$.lib.basicForm =  $.lib.basicForm || {};
	
	$.lib.basicForm.serializeForm = function(pFormElement)
	{
		if(pFormElement.data == undefined) {
			pFormElement = $(pFormElement);
		}

		var basicForm = null;
		if (!pFormElement.data('basicForm')) {
			basicForm = pFormElement.basicForm();
		}
		basicForm = pFormElement.data('basicForm');
		
		return basicForm.serializeForm(pFormElement);
	}
	
	$.lib.form = $.lib.form || {};
	/**
	 * Function to init the placeholder text on the textfields. if value ==
	 * placeholder by focus field, value clear. if value is empty and textfield
	 * loses the focus, value set to placeholder text. only used for browser
	 * that does not support HTML 5 placeholder
	 */
	$.lib.form.initPlaceholder = function(pField) {
		if ($.support.placeholder === undefined) {
			$.support.placeholder = false;
			test = document.createElement('input');
			if ('placeholder' in test) {
				$.support.placeholder = true;
			}
		}
		if ($.support.placeholder) {
			return;
		}
		
		var placeholder = pField.attr('placeholder');
		
		if (placeholder != null) {
			if (pField.val() == "") {
				pField.addClass("input-placeholder");
				pField.val(placeholder);
			}
			
			pField.focus(function() {
				pField.removeClass("input-placeholder");
				
				if (this.value == placeholder) {
					pField.val("");
				}
			});
			
			pField.blur(function() {
				if (this.value == "") {
					pField.addClass("input-placeholder");
					pField.val(placeholder);
				}
			});
		}
	};
})(jQuery);

(function($) {
	
	$.lib = $.lib || {};
	
	/**
	 * Definition of the function's name, which will be called when initialising
	 * a DOM Element with the Form
	 */
	$.fn.basicForm = function(options) {
		// 'this' are the DOM Elements
		return this.each(function() {// for each dom element from selector
			// '$(this)' is the JQuery objec
			// debugForm(".basicForm()");
			if (!$(this).data('basicForm')) {
				// debugForm("new basicForm()");
				$(this).data('basicForm', new basicForm(this, options));
			}
		});
	};
	
	/**
	 * Constructor
	 */
	basicForm = function(domReference, pOptions) {
		this.options = {
			hideAfterSuccessFlag : 1,
			showMessageAfterSuccessFlag : 1,
			resetFormAfterSuccessFlag : 0,
			multiStepFlag :0
		};
		
		this.multiStepOptions = {
		};
		
		// IMPORTANT ! The domreference as to be defined as a member variable
		// in every of our jquery plugin, which need to call our custom
		// $.lib.ajax function
		this.domReference = domReference;
		this.submitted = false;
		this.formWrapper = $(this.domReference).parent();
		
		$.extend(this.options, pOptions);
		
		this.init();
	};
	
	/**
	 * Init function of the Form Binds the functions to the various html
	 * elements (form fields -> change, button -> click)
	 */
	basicForm.prototype.init = function() {
		var self = this; // self is the form element
		var formElement = self.domReference;
		var formName = $(self.domReference).attr('name') || "undefined";
		
		debugForm("init - name:" + formName);
		// binds the keydown event on the input text fields and textareas
		// - generic handling, and triggers the validation for the fields that
		// are already set
		var textFields = $(formElement).find(
				"input[data-form-element-id]:not([type=submit], [type=hidden], [type=checkbox]), textarea");
		// RLT : limit to elements with data-form-element-id, otherwise additiona inputs
		// like the select2 input is treated like one of our inputs.
		// !!! CW: checkbox dont works, because its value doesnt change
		textFields.each(function() {
			// bind fieldhandler
			self.initFieldHandler($(this), 300);
			
			// if browser not support html placeholder. init own placeholder
			// function for the fields
			$.lib.form.initPlaceholder($(this));
		});
		
		$(formElement).find(".checkselectbox").each(function()
		{
			$(this).find(".item").bind("click", function()
			{
				var clickElement = this;
				self.validateField(clickElement);
				
				setTimeout(function(){
					self.setDependancyMandatoryInputFielsPlaceholderText(clickElement, false);
				}, 1000);
			});
		});
		
		// see
		// http://stackoverflow.com/questions/2066162/how-can-i-get-the-button-that-caused-the-submit-from-the-form-submit-event
		// binds the click on the submit-button
		$(formElement).find(':submit').bind('click', function() {
			$(formElement).find(':submit').removeAttr("clicked");
			$(this).attr("clicked", "true");
		});
		$(formElement).bind('submit', function(event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			self.submitForm($(":submit[clicked=true]").attr('name'));
			return false;
		});
		
		$(formElement).bind('change', function(event){
			self.setDependancyMandatoryInputFielsPlaceholderText(event.srcElement, false);
		});
		
		if(self.options.multiStepFlag)
		{
			self.initMultiStep();
		}
		
		
		//initional mandatory dependancy 
		self.initDependancyMandatoryInputFieldsPlaceholderText();

		// remove required class, if element is only required for customerGroups different from current user customerGroup
		if ($(formElement).find("[data-required-customer-groups]").length)
		{
			$.lib.ajax("getCurrentCustomerGroupId", {
				data : {}
			}, "basic_form", {
				'_getCurrentCustomerGroupIdSuccess': function(response)
				{
					$(formElement).find(".wrapper.checkbox.agreement").each(function(index, element)
					{
						var inputElement = $(element).find("[data-required-customer-groups]");
						if (inputElement.length)
						{
							if ($.inArray(response.data, JSON.parse(inputElement.attr("data-required-customer-groups"))) == -1)
							{
								inputElement.removeClass("required");
								inputElement.closest('.wrapper.checkbox').removeClass("required");
							}
						}
					});
				},
				'_getCurrentCustomerGroupIdError' : function(response)
				{
				}
			});
		}
		if ($(formElement).find(".notRequiredIfAlreadyGranted").length)
		{
			$.lib.ajax("checkAlreadyGrantedAgreements", {
				data : {}
			}, "basic_form", {
				'_checkAlreadyGrantedAgreementsSuccess': function(response)
				{
					$(formElement).find(".wrapper.checkbox.agreement.notRequiredIfAlreadyGranted").each(function(index, element)
					{
						var inputElement = $(element).find("input");
						if (response.data.indexOf(parseInt(inputElement.val())) != -1)
						{
							inputElement.removeClass("required");
							inputElement.closest('.wrapper.checkbox').removeClass("required");
						}
					});
				},
				'_checkAlreadyGrantedAgreementsError' : function(response)
				{
				}
			});
		}
	};
	
	/**
	 * find dependancy mandatory fields in form on initional status and set placeholder text
	 */
		basicForm.prototype.initDependancyMandatoryInputFieldsPlaceholderText = function(){
			var self = this;
			var dependancyMandatoryFields = self.formWrapper.find("[data-dependancy-mandatory-fields]");
			
			//loop through all existing dependancy mandatory fields
			dependancyMandatoryFields.each(function(key, element){
				self.setDependancyMandatoryInputFielsPlaceholderText(element, false);
			});
		}
		
		/**
		 * set placeholder and label text for dependancy mandatory input fields
		 */
		basicForm.prototype.setDependancyMandatoryInputFielsPlaceholderText = function(pFormElement, pStopRecursion){
			var self = this;
			
			//edit non selected siblings
			if(pStopRecursion == false && $(pFormElement).is("input[type='radio']")){
				var inputID = $(pFormElement).attr("id");
				var fieldName = $(pFormElement).attr("name");
				var siblings = $("[name='"+fieldName+"']:not(#"+inputID+")");
				siblings.each(function(keySibling, valueSibling){
					self.setDependancyMandatoryInputFielsPlaceholderText(valueSibling, true);
				});
			}

			//edit salutation
			if(pStopRecursion == false && $(pFormElement).is("[data-type='radio']") && $(pFormElement).closest(".checkselectbox").length){
				var inputID = $(pFormElement).attr("id");
				var fieldName = $(pFormElement).attr("data-name");
				var siblings = $("[data-name='"+fieldName+"']:not(#"+inputID+")");
				siblings.each(function(keySibling, valueSibling){
					self.setDependancyMandatoryInputFielsPlaceholderText(valueSibling, true);
				});
			}
			
			var parentChecked = ($(pFormElement).attr("checked")=="checked") || ($(pFormElement).hasClass('selected'));
			var mandatoryFieldsObject = $(pFormElement).attr("data-dependancy-mandatory-fields");
			if(mandatoryFieldsObject != null){
				var mandatoryFieldsArray = mandatoryFieldsObject.split(',');
				
				// loop through all dependancy mandatory fields from parent element
				$(mandatoryFieldsArray).each(function(index, id){
					
					var mandatoryFieldSelector = "[data-form-element-id="+id+"]"; 
					var mandatoryField = self.formWrapper.find(mandatoryFieldSelector);
					var placeholderText = null;
					
					if(mandatoryField.is("input[type='text'], input[type='email'], input[type='password'], textarea")){
						//input (email passwort text) or textarea
						placeholderText = mandatoryField.attr("placeholder");
						
						if(parentChecked){
							//if parent is checked, set *if not included
							if(placeholderText != null && placeholderText.includes('*') == false){
								mandatoryField.attr("placeholder", placeholderText+"*");
							}
							var inputID = mandatoryField.attr("id");
							var label = $("[for='"+inputID+"']");
							label.find("span").text("*");
						}else{
							//if parent is not checked and * is included remove *
							if(placeholderText != null && placeholderText.includes('*') == true){
								mandatoryField.attr("placeholder", placeholderText.replace("*", ""));
							}
							var inputID = mandatoryField.attr("id");
							var label = $("[for='"+inputID+"']");
							label.find("span").text("");
						}
					}else if(mandatoryField.is("input[type='checkbox'], input[type='radio']")){
						//checkbox or radio
						var inputID = mandatoryField.attr("id");
						var label = $("[for='"+inputID+"']");
						placeholderText = label.find(".captionMandatory").text();
						
						if(parentChecked){
							//if parent is checked, set *if not included
							if(placeholderText != null && placeholderText.includes('*') == false){
								label.find(".captionMandatory").text("*");
								label.prev("input").addClass("required");
							}
						}else{
							//if parent is not checked and * is included remove *
							if(placeholderText != null && placeholderText.includes('*') == true){
								label.find(".captionMandatory").text("");
								label.prev("input").removeClass("required");
							}
						}
						
					}else if(mandatoryField.is("[data-type='chegroup'], [data-type='radgroup']") && mandatoryField.closest(".checkselectbox").length == 0){
						//chegroup or radgroup
						placeholderText = mandatoryField.text();
						if(parentChecked){
							//if parent is checked, set *if not included
							if(placeholderText != null && placeholderText.includes('*') == false){
								mandatoryField.text(placeholderText+"*");
							}
						}else{
							//if parent is not checked and * is included remove *
							if(placeholderText != null && placeholderText.includes('*') == true){
								mandatoryField.text(placeholderText.replace("*", ""));
							}
						}
					}else if(mandatoryField.is("[data-type='radio']") && mandatoryField.closest(".checkselectbox").length){
						//checkselect radio child
						placeholderText = mandatoryField.text();
						
						if(parentChecked){
							//if parent is checked, set *if not included
							if(placeholderText != null && placeholderText.includes('*') == false){
								mandatoryField.text(placeholderText+"*");
								mandatoryField.attr("data-caption", mandatoryField.attr("data-caption")+"*");
							}
						}else{
							//if parent is not checked and * is included remove *
							if(placeholderText != null && placeholderText.includes('*') == true){
								mandatoryField.text(placeholderText.replace("*", ""));
								mandatoryField.attr("data-caption", mandatoryField.attr("data-caption").replace("*", ""));
							}
						}
					}else if(mandatoryField.is("[data-type='radgroup']") && mandatoryField.closest(".checkselectbox").length){
						//checkselect radiogroup
						placeholderText = mandatoryField.find(".captionMandatory").text();
						
						if(parentChecked){
							//if parent is checked, set *if not included
							if(placeholderText != null && placeholderText.includes('*') == false){
								mandatoryField.find(".captionMandatory").text("*");
							}
						}else{
							//if parent is not checked and * is included remove *
							if(placeholderText != null && placeholderText.includes('*') == true){
								mandatoryField.find(".captionMandatory").text("");
							}
						}
					}
				});
			}
		}
	
	/**
	 * Function called after the event keydown has been triggered from an text
	 * field.
	 */
	basicForm.prototype.initFieldHandler = function(pField, pTimeout) {
		var self = this;
		
		if (pField.length == 0) {
			return null;
		}
		
		pField.timeout = null;
		pField.lastVal = null;
		
		function doUpdateField() {
			// debugForm("doUpdateField");
			if (pField.timeout != null) // if we had a setTimeout
			{
				clearTimeout(pField.timeout); // then cancel it
			}
			var newVal = pField.val();
			// debugForm("doUpdateField - newVal:" + newVal);
			if (pField.lastVal != newVal) {
				self.validateField(pField);
				pField.lastVal = newVal;
			}
		}
		
		pField.bind('blur paste change autocompletechange', function(e) {
			// debugForm("bind:" + e.type);
			doUpdateField();
		});
		
		pField.bind('keydown input', function(e) {
			// debugForm("bind:" + e.type);
			if (pField.timeout != null) // if we had a setTimeout
			{
				clearTimeout(pField.timeout); // then cancel it
			}
			// now create a time out. The given function will be executed
			// after the given interval of time
			pField.timeout = setTimeout(function() {
				var newVal = pField.val();
				// debugForm("tiemout - newVal:" + newVal);
				// no need to execute the code if the value is still the same
				if (pField.lastVal != newVal) {
					// execute code
					self.validateField(pField);
					pField.lastVal = newVal;
				}
			}, pTimeout);
		});
	};
	
	/**
	 * Function to check the field value
	 */
	basicForm.prototype.validateField = function(pField) {
		var self = this;
		// debugForm("validateField - newVal:" + $(pField).val());
		
		var value = $(pField).val();
		if ($(pField).attr("data-type") == "radgroup" || $(pField).attr("data-type") == "radio")
		{
			value = $(pField).attr("data-value");
		}
		$.lib.ajax("validateField",// used to put the function names
		// _validateFieldSuccess
		{
			data : {
				"formName" : $(self.domReference).attr('name'),
				"fieldId" : $(pField).attr('data-form-element-id'),
				"fieldValue" : value,
				"fieldPlaceholder" : $(pField).attr('placeholder')
			}
		}, "basic_Form", self);
	};
	
	basicForm.prototype._validateFieldSuccess = function(response, ajaxOptions) {
		var field = $(this.domReference).find(
				"[data-form-element-id='" + response['validation']['fieldId'] + "']");
		
		// handle selectboxes and radiogroups and find its parent
		if ($(field).attr("data-type") == "radio" ){
			if (parentField = $(this.domReference).find("[data-element-name='"+$(field).attr("data-name")+"']")){
				field = parentField;
			}
		} else if( $(field).attr("type") == "radio"){
			field = field.parent();
		}
			
		var messageDiv = field.parent().find('.validationMessage');
		messageDiv.html(response['validation']['message']);
		if (response['validation']['valid']) {
			field.parent().removeClass('invalid');
		} else {
			field.parent().addClass('invalid');
		}
	};
	
	basicForm.prototype._validateFieldError = function(response) {
		debugForm("_validateFieldError:" + response.message);
	};
	
	/**
	 * Serialize all form values
	 * 
	 * @param jquery
	 *            formElement
	 */
	basicForm.prototype.serializeForm = function(pFormElement) {
		var data = [];
		// create array structure for ajax call with fieldId, name and value of
		// all form fields
		
		var obj = {};
		obj['name'] = "pageUri";
		obj['value'] = window.location.href;
		data.push(obj);
		var obj = {};
		obj['name'] = "pageTitle";
		obj['value'] = $("title").text();
		data.push(obj);
		
		// serialization for input type text and textarea.
		// with additional attribute placeholder to validate the entry value is
		// not placeholder text.
		// important in browsers where we set the placeholder text as value of
		// the field
		$(pFormElement).find("input:not(:submit, :checkbox, :radio), textarea").each(
				function(index) {
					var obj = {};
					obj['id'] = $(this).attr('data-form-element-id');
					obj['name'] = $(this).attr('name');
					obj['value'] = $(this).val();
					obj['placeholder'] = $(this).attr('placeholder');
					data.push(obj);
				});
		
		// special checkbox serialization, to return all checkbox values with
		// their checked values
		$(pFormElement).find("input[type='checkbox']").each(function() {
			var checked = "";
			if (this.checked) {
				checked = '1';
			} else {
				checked = '0';
			}
			var obj = {};
			obj['id'] = $(this).attr('data-form-element-id');
			obj['name'] = $(this).attr('name'); // name of the select field
			// (parent)
			obj['value'] = $(this).val();
			obj['selected'] = checked;
			data.push(obj);
		});
		
		// special checkboxgroup serialization, return checked = 1,
		// if minimum one checkbox is selected. use value to set data-type
		// chegroup for check
		// in formAjaxController validateField()
		$(pFormElement).find("span[data-type='chegroup'].required").each(function() {
			var checked = "";
			if ($(this).parent().find('input:checkbox:checked').length > 0) {
				checked = '1';
			} else {
				checked = '0';
			}
			var obj = {};
			obj['id'] = $(this).attr('data-form-element-id');
			obj['value'] = $(this).attr('data-type'); // set type to
			// difference from a
			// textfield in
			// ajaxcontroller
			obj['name'] = "";
			obj['selected'] = checked;
			data.push(obj);
		});
		
		$(pFormElement).find("span[data-type='radgroup']").each(function() {
			var value = "";
			if ($(this).parent().find('input:radio:checked').length > 0) {
				value = $(this).parent().find('input:radio:checked').val();
			}
			
			var obj = {};
			obj['id'] = $(this).attr('data-form-element-id');
			obj['value'] = value;
			obj['name'] = $(this).parent().find('input:radio:first').attr('name');
			data.push(obj);
		});
		
		// selectbox view (currently only for radiogroups)
		$(pFormElement).find(".checkselectbox div[data-type='radgroup']").each(function() {
			var value = "";
			var selectedItem = $(this).find('.item.selected');
			if (selectedItem.length > 0) {
				value = selectedItem.attr('data-value');
			}
			
			var obj = {};
			obj['id'] = $(this).attr('data-form-element-id');
			obj['name'] = $(this).attr('data-element-name'); // name of the
			// select field
			obj['value'] = value;
			data.push(obj);
		});
		
		// serialization of select groups
		$(pFormElement).find("select option:selected").each(function() {
			var obj = {};
			obj['id'] = $(this).attr('data-form-element-id');
			obj['name'] = $(this).parent().attr('name'); // name of the
			// select field
			// (parent)
			obj['value'] = $(this).val();
			data.push(obj);
		});
		

		// data ordering
		var dataRightOrder = [];
		
		// now order the result in the same order as given in the form:
		$(pFormElement).find("[data-form-element-id]").each(function(index, elt){
			$.each(data, function(myIndex, myElt){
				if(myElt != undefined)
				{
					if(myElt['id'] ==  $(elt).attr('data-form-element-id'))
					{
						dataRightOrder.push(myElt);
						data.splice(myIndex, 1);
					}
				}
			});
		});
		
		// concat the remaining datas that had no form-element-id to the end of the result array.
		data = dataRightOrder.concat(data);
		
		return data;
	};

	
	/**
	 * checks if value text = placeholder text
	 * prevent to save placeholder text in old browser
	 */
	basicForm.prototype.checkValuePlaceholderText = function(formElement){
	
		var $inputs = $(formElement).find('input:not(:submit, :checkbox, :radio), textarea');
		if ($.support.placeholder == false && $inputs != null) {
			
			$inputs.each(function() {
				var inputPlaceholder = $(this).attr("placeholder");
				if(inputPlaceholder != null){
					var inputValue = $(this).val();
					
					if(inputValue == inputPlaceholder){
						$(this).val("");
					}
				}
			});
			
		}
	};
	
	
	/**
	 * Function to trigger the validation of the form
	 */
	basicForm.prototype.submitForm = function(pTargetName) {
		// var self = this;
		if (this.submitted === true) {
			debugForm("preventMultiSubmit");
			return;
		}
		$("body").addClass("wait");
		this.submitted = true;
		
		var formElement = this.domReference;
		pTargetName = pTargetName || "undefined";
		var formName = $(formElement).attr('name') || "undefined";
		
		debugForm("submitForm:" + formName + ", target:" + pTargetName);
		
		basicForm.prototype.checkValuePlaceholderText(formElement);
		
		var values = this.serializeForm(formElement);
		$.lib.ajax("submitForm", // used to put the function names
		// _submitFormSuccess
		{
			async : true,
			type : $(formElement).attr('method'),
			data : {
				"form_name" : formName,
				"target_name" : pTargetName,
				"values" : values
			}
		}, "basic_Form", this);
	};
	
	/**
	 * reset and empty all fields of the formular
	 */
	basicForm.prototype.resetForm =  function() {
		
		var formElement = this.domReference;
		// 	empty inputs 
		$(formElement).find('input').val('');
		
		// radio groups
		$(formElement).find('.radgroup .captionTitle').each(function(i,el){
			$(el).html( $(el).parent().attr('title'));
		});
		$(formElement).find('.radgroup .selected').removeClass('selected');
		// checkboxes
		$(formElement).find('input[type=checkbox]').prop('checked', false); 
		
		// validation messages
		$(formElement).find('.invalid').removeClass('invalid');
		$(formElement).find('.validationMessage').html('');
		
		// TODO : if we need the reset function to work for a multistep formular, this function
		// needs to be updated
		
	};
	
	/**
	 * Callback of a successful ajax call 'submitForm'
	 */
	basicForm.prototype._submitFormSuccess = function(response, ajaxOptions) {
		this.submitted = false;
		$("body").removeClass("wait");
		try {
			debugForm("_submitFormSuccess - form:" + ajaxOptions.data.form_name + ", target:"
					+ ajaxOptions.data.target_name);
			
			var formElement = this.domReference;
			var submitMessage = $(formElement).parent().find("#submitMessage");
			var additionalParms = response.additionalParms;
			var validationDisplayed = false;
			
			if (response['valid']) {
				
				var formSubmitInfo = {
					formName : ajaxOptions.data.form_name
				};
				if (additionalParms.shortClassName != undefined) {
					formSubmitInfo['shortClassName'] = additionalParms.shortClassName;
				}
				formSubmitInfo['response'] = response;
				formSubmitInfo['ajaxOptions'] = ajaxOptions;
				$(window).trigger('formSubmit', formSubmitInfo);
				
				if (additionalParms.reloadFlag) {
					$("body").addClass("wait");
					if (typeof additionalParms.pageToLoad != 'undefined'
							&& additionalParms.pageToLoad != null) {
						location.assign(additionalParms.pageToLoad);
					} else {
						location.reload(true);
					}
					// HJW:20150319:good to scroll to top after reload
					// checkout billing, mantis bugs where top position was at
					// bottom after reload
					// browser behaviour somteimes between pages/sites
					$('html, body').scrollTop(0);
				}
				
				if (additionalParms.message) {
					submitMessage.html(additionalParms.message);
				}
				if (this.options.showMessageAfterSuccessFlag)
				{
					submitMessage.removeClass("error").show();
				}
				else
				{
					submitMessage.removeClass("error").hide();
				}
				
				if (additionalParms.hideInputs) {
						
					if(this.options.hideAfterSuccessFlag)
					{
						$(formElement).hide();
						
						if(this.options.multiStepFlag)
						{
							this.formWrapper.find('.multiStepControls, .multiStepNav').hide();
						}
						
						
						$('html,body').animate(
							{
								scrollTop : submitMessage
								.offset().top
								+ (submitMessage
										.height() / 2) - ($(window).height() / 2)
							}, 'slow');
					}
				} else {
					// do not hide inputs and load new page
					if (additionalParms.pageToLoad) {
						validationDisplayed = true;
					}
				}
			
				if (this.options.resetFormAfterSuccessFlag){
					this.resetForm();
				}
				
			} else // form entrys not valid, show error message of the fields
			{
				for ( var i = 0; i < response['validation'].length; i++) {
					var validation = response['validation'][i];
					var field = $("*[data-form-element-id='" + validation['fieldId'] + "']");
					var messageDiv = field.parent().find('> .validationMessage');
					var message = validation['message'];
					
					messageDiv.html(message);
					if (message) {
						validationDisplayed = true;
					}
					if (validation.valid == false) {
						field.parent().addClass("invalid");
					} else {
						field.parent().removeClass("invalid");
					}
				}
				
				var firstInvalid = $(formElement).find(".wrapper.invalid:first");
				if (firstInvalid.length) {
					$('html,body').animate(
							{
								scrollTop : firstInvalid.offset().top
										+ (firstInvalid.height() / 2)
										- ($(window).height() / 2)
							}, 'slow');
				}
			}
			// validations/form errors are displayed under the last
			// input/checkbox
			// if the form was empty or there were no form erorrs
			// submitMessage is used for error display
			if (!validationDisplayed && additionalParms.message) {
				submitMessage.html(additionalParms.message);
				if (response['valid']) {
					if (this.options.showMessageAfterSuccessFlag)
					{
						submitMessage.removeClass("error").show();
					}
					else
					{
						submitMessage.removeClass("error").hide();
					}
				} else {
					submitMessage.addClass("error").show();
				}
				
				var firstInvalid = $(formElement).find(".wrapper.invalid:first");
				if (!firstInvalid.length && this.options.showMessageAfterSuccessFlag) {
					$('html,body').animate(
							{
								scrollTop : submitMessage
										.offset().top
										+ (submitMessage
												.height() / 2) - ($(window).height() / 2)
							}, 'slow');
				}
			}
			
			$('body').trigger("form_submitted", [ arguments ]);
		} catch (e) {
			$.lib.Debug.error("form exception");
			$.lib.Debug.error(e);
		}
		$(window).trigger("form_result", [ response, ajaxOptions ]);
	};
	
	/**
	 * Callback of an unsuccessful ajax call 'submitForm'
	 */
	basicForm.prototype._submitFormError = function(response, ajaxOptions) {
		this.submitted = false;
		$("body").removeClass("wait");
		var formElement = this.domReference;
		$(formElement).parent().find("#submitMessage").html(response.message);
		$(formElement).parent().find("#submitMessage").addClass("error").show();
		
		debugForm("_submitFormError - form:" + ajaxOptions.data.form_name + ", target:"
				+ ajaxOptions.data.target_name);
		// debugForm("_submitFormError:" + response.message);
		$(window).trigger("form_result", [ response, ajaxOptions ]);
	};
	
	
	
	
	/********************************** Multistep Formular ***********************************/
	
	/**
	 * Initialises the behaviour of a multistep Formular
	 */
	basicForm.prototype.initMultiStep = function() {
		var self = this;
		
		this.multiStepSetCurrentStep(1);
		
		this.formWrapper.on("click", ".multiStepNav .navElt.valid, .multiStepNav .navElt.valid + .navElt:not(.valid)", function(){
			if(!$(this).hasClass('active'))
			{
				var stepIndex = parseInt(self.formWrapper.attr('data-current-index'));
				var stepIndexToLoadIfValid = $(this).attr('data-index');
				
				self.multiStepValidateStep(stepIndex, stepIndexToLoadIfValid); 
			}
		});
		
		this.formWrapper.on("click", ".multiStepControls .next", function(){
			if(!self.formWrapper.hasClass('lastStep'))
			{
				var stepIndex = parseInt(self.formWrapper.attr('data-current-index'));
				var stepIndexToLoadIfValid = parseInt(self.formWrapper.attr('data-current-index'))+1;
				
				self.multiStepValidateStep(stepIndex, stepIndexToLoadIfValid); 
			}
		});
		
		this.formWrapper.on("click", ".multiStepControls .previous", function(){
			if(!self.formWrapper.hasClass('firstStep'))
			{
				var stepIndex = parseInt(self.formWrapper.attr('data-current-index'));
				var stepIndexToLoadIfValid = parseInt(self.formWrapper.attr('data-current-index'))-1;
				
				self.multiStepValidateStep(stepIndex, stepIndexToLoadIfValid); 
			}
		});
		
		this.formWrapper.on("click", ".multiStepControls .submit", function(){
			self.formWrapper.find("form .submit button").click();
		});
	}
	
	/**
	 * validate the step of given index
	 */
	basicForm.prototype.multiStepValidateStep = function(index, indexToLoadIfValid)
	{
		var navElt = this.formWrapper.find('.navElt[data-index="'+index+'"]');
		
		if(navElt.length != 0)
		{
			var containerId = parseInt(navElt.attr('data-container-id'));
			var container = this.formWrapper.find('.container[data-container-id="'+containerId+'"]');
			
			var serializedValues = this.serializeForm(container[0]);
			$.lib.ajax("validateContainer", // used to put the function names
					// _submitFormSuccess
			{
				async : true,
				type : $(this.domReference).attr('method'),
				data : {
					"container_id" : containerId,
					"index_to_load_if_valid" : indexToLoadIfValid,
					"values" : serializedValues
				}
			}, "basic_Form", this);
		}
		
		this.formWrapper.find(".multiStepControls button").blur();
	}
	
	
	/**
	 * Sets the formular to the given step
	 */
	basicForm.prototype.multiStepSetCurrentStep = function(index)
	{
		var navElt = this.formWrapper.find('.navElt[data-index="'+index+'"]');
		
		if(navElt.length != 0)
		{
			var containerId = navElt.attr('data-container-id');
			
			this.formWrapper.find('[data-container-id]').removeClass('active');
			this.formWrapper.find('[data-container-id="'+containerId+'"]').addClass('active');
			
			this.formWrapper.attr("data-current-index",index);
			
			if(index == 1)
			{
				this.formWrapper.addClass('firstStep');
				this.formWrapper.removeClass('lastStep');
			} else if(index == this.formWrapper.find(".navElt[data-index]").length)
			{
				this.formWrapper.removeClass('firstStep');
				this.formWrapper.addClass('lastStep');
			}
			else
			{
				this.formWrapper.removeClass('firstStep');
				this.formWrapper.removeClass('lastStep');
			}
		}
	}
	

	
	
	/**
	 * Callback of a successful ajax call 'validateContainer'
	 */
	basicForm.prototype._validateContainerSuccess = function(response, ajaxOptions) {
		var containerId = ajaxOptions.data.container_id;
		
		var navElt = this.formWrapper.find('.navElt[data-container-id="'+containerId+'"]');
		var container = this.formWrapper.find('.container[data-container-id="'+containerId+'"]');
		
		var indexToLoadIfValid =  ajaxOptions.data.index_to_load_if_valid;
		
		
		if (response['valid']) {
			navElt.addClass('valid');
			container.addClass('valid');
			
			if(indexToLoadIfValid != undefined)
			{
				this.multiStepSetCurrentStep(indexToLoadIfValid);
			}
			// Remove the errors messages
			for ( var i = 0; i < response['validation'].length; i++) {
				var validation = response['validation'][i];
				var field = $("*[data-form-element-id='" + validation['fieldId'] + "']");
				var messageDiv = field.parent().find('> .validationMessage');
				var message = validation['message'];
				
				messageDiv.html(message);
				field.parent().removeClass("invalid");
			}
		}
		else
		{
			// Show the messages.
			for ( var i = 0; i < response['validation'].length; i++) {
				var validation = response['validation'][i];
				var field = $("*[data-form-element-id='" + validation['fieldId'] + "']");
				var messageDiv = field.parent().find('> .validationMessage');
				var message = validation['message'];
				
				messageDiv.html(message);
				if (message) {
					validationDisplayed = true;
				}
				if (validation.valid == false) {
					field.parent().addClass("invalid");
				} else {
					field.parent().removeClass("invalid");
				}
			}
			
			navElt.removeClass('valid');
			container.removeClass('valid');
		}
	};
	
	
	/**
	 * Callback of a unsuccessful ajax call 'validateContainer
	 */
	basicForm.prototype._validateContainerError = function(response, ajaxOptions) {
		console.debug("something when wrong while validating the container of id " + ajaxOptions.data.container_id);
	}
		
	
	/**
	 * Function to center an element on the screen
	 */
	jQuery.fn.centerElement = function() {
		this.css("position", "absolute");
		this.css("top", (($(window).height() - this.outerHeight()) / 2)
				+ $(window).scrollTop() + "px");
		this.css("left", (($(window).width() - this.outerWidth()) / 2)
				+ $(window).scrollLeft() + "px");
		return this;
	}
})(jQuery);
