(function($) {

	$.lib = $.lib || {};

	/**
	 * Own ajax function makes an ajax call and in case of success calls the
	 * function of type _[ajaxControllerMethodName]Success
	 * 
	 * @param String
	 *            ajaxControllerMethodName | used to call a method on the server
	 *            and handles the ajax callback usally the method name in the
	 * @param Object
	 *            ajaxOptions | additional ajax options to use in the call, also
	 *            used to give the callback function some parameters
	 * @param String
	 *            dataWidgetType | the short class name of the widget to be
	 *            called
	 */
	$.lib.ajax = function(ajaxControllerMethodName, ajaxOptions, dataWidgetType, callingObject) {
		if (callingObject == undefined) {
			callingObject = this;
		}

		// callingObject -> instance of the plugin calling the ajax function
		// callingObject.domReference -> dom object corresponding to the object
		// calling
		// $(callingObject.domReference) -> jquery of the dom object

		var url = "";
		if (ajaxOptions.url) {
			// if url given in the ajax options
			url = ajaxOptions.url;
		} else {
			// if the calling object has a data-widget-type attribut
			if (dataWidgetType != undefined) {
				url = 'ajax_' + dataWidgetType;
			} else if (callingObject.attr('data-widget-type') != undefined) {
				url = 'ajax_' + this.attr('data-widget-type');
			} else {
				//console.debug('break ajax call');
				return;
			}
			
			if(window.location.pathname == "/admin")
			{
				// when calling "https://domain/admin" when not logged in, because the last
				// slash (/) is missing, instead of /admin/ajax_..., we have /ajax_... 
				// because of this, the isAdminRequest = false instead of true on the php side
				// of the ajax call! so we force the admin to be added:
				url = "/admin/" + url;
			}
			
		}
		
		function addEvent(obj, type, fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj["e" + type + fn] = fn;
				obj[type + fn] = function() {
					obj["e" + type + fn](window.event);
				}
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		}
		
		function onScriptLoad(pEvent)
		{
			//$.escdbg.debug("script loaded:" + pEvent.target.src);
			removeLoadScript(pEvent.target);
		}
		
		function onScriptError(pEvent)
		{
			//$.escdbg.debug("script load error:" + pEvent.target.src);
			removeLoadScript(pEvent.target);
		}
		
		function removeLoadScript(pScript)
		{
			for (var i = 0; i < callingObject.loadScripts.length; i++) {
				if (callingObject.loadScripts[i] == pScript.src)
				{
					//$.escdbg.debug("script removed:" + pScript.src );
					callingObject.loadScripts.splice(i, 1);
					checkLoadScriptsReady();
					return;
				}
			}
			//$.escdbg.debug("script not removed:" + pScript.src );
		}
		
		function checkLoadScriptsReady()
		{
			if (callingObject.loadScripts.length == 0)
			{
				execScriptInitSupplement();
				return true;
			}
		}
		
		/**
		 * 
		 */
		function appendHead(supplements)
		{
			var head = $("head");
			
			var scripts = [];
			
			$.each(supplements, function(myIndex, supplement)
			{
				if ($(supplement)[0].localName == "script")
				{
					var src = $(supplement).attr("src");
					if (src.match(/^\/[^\?]*\?v=.*/g))
					{
						src = src.replace(/^(\/[^\?]*)\?v=.*/g, "$1");
					}
					
					if (head.find('[src^="' + src + '"]').size() == 0 && $('body').find('[src^="' + src + '"]').size() == 0)
					{
						//$.escdbg.debug("appendHead:" + supplement);
						
						// hier kann jquery nicht eingesetzt werden, da das script
						// sonst per ajax
						// geladen und nicht im head eingefügt werden würde
						var oScript = document.createElement('script');
						oScript.type = 'text/javascript';
						oScript.charset = 'utf-8';
						oScript.src = $(supplement).attr("src");
						
						scripts.push(oScript);
						
	//					$.escdbg.debug("loadScripts.push:" + oScript.src);
						callingObject.loadScripts.push(oScript.src);
						
						addEvent(oScript, 'load', onScriptLoad);
						addEvent(oScript, 'error', onScriptError);
					}
					else
					{
	//					$.escdbg.debug("loadScripts already loaded:" + $(supplement).attr("src"));
					}
				}
				else
				{
					var href = $(supplement).attr("href");
					if (href.match(/^\/.*\?v=.*/g))
					{
						href = href.replace(/^(\/.*)\?v=.*/g, "$1");
					}
					
					if (head.find('[href^="' + href + '"]').size() == 0)
					{
						//$.escdbg.debug("appendHead:" + supplement);
						head.append(supplement);
					}
				}
			});
			
			// we want to set the scripts in the head AFTER having put them all in callingObject.loadScripts.
			// Otherwise it might happen (for instance in ie10 because of the case) that the onload
			// is fired right after that the script has been put in head and so in the end call
			// execScriptInitSupplement before all script were actually put in head.
			
			var oHead = document.getElementsByTagName('head')[0];
			$.each(scripts, function(myIndex, oScript) {
				// append to dom starts loading/execution of script
				oHead.appendChild(oScript);
			});
		}
		
		/**
		 * 
		 */
		function success(response)
		{
			callingObject.loadScripts = new Array();
			callingObject.response = response;
			callingObject.scriptInitSupplementExecuted = false;
			
			var headSupplementCount = handleSupplements(response.thirdPartyTopSupplement,
					response.thirdPartyBottomSupplement, response.topSupplement,
					response.bottomSupplement, null);
			
//			$(document).ready(function() {
//					$.escdbg.debug("success:document ready");
//			});
			if (headSupplementCount == 0)
			{
				execScriptInitSupplement();
			}
		}
		
		function execScriptInitSupplement()
		{
//			$.escdbg.debug("execScriptInitSupplement" + callingObject.scriptInitSupplementExecuted);
			if (callingObject.scriptInitSupplementExecuted)
			{
				return;
			}
			callingObject.scriptInitSupplementExecuted = true;
			var successFunctionName = '_' + ajaxControllerMethodName	+ 'Success';
//			$.escdbg.debug("execute success Function");
			if ($.isFunction(callingObject[successFunctionName]))
			{
				// display an infoBox message
				if (callingObject.response.infoBox != undefined)
				{
					if ($.isArray(callingObject.response.infoBox))
					{
						$.each(callingObject.response.infoBox, function(index, item)
						{
							if ($.lib.infoBox != undefined)
							{
								$.lib.infoBox(item);
							}
							else
							{
								$('body').trigger('infoBox', item);
							}
						});
					}
					else
					{
						if ($.lib.infoBox != undefined)
						{
							$.lib.infoBox(callingObject.response.infoBox);
						}
						else
						{
							$('body').trigger('infoBox',callingObject.response.infoBox);
						}
					}
				}
				
				// call the success function
				callingObject[successFunctionName](callingObject.response, ajaxOptions);
			}
			else
			{
				$.lib.Debug.error("$.lib.ajax: Function '" 
						+ successFunctionName
						+ "' does not exist.");
			}
			
//			$.escdbg.debug("executescriptInitSupplement");
			handleSupplements(null, null, null, null,
					callingObject.response.scriptInitSupplement);
		}
		
		/**
		 * @return number of head modifications
		 */
		function handleSupplements(pThirdPartyTopSupplement, pThirdPartyBottomSupplement,
				pTopSupplement, pBottomSupplement, pScriptInitSupplement) {

			var handleSupplementCount = 0;

			if (!pThirdPartyTopSupplement)
				pThirdPartyTopSupplement = {};
			if (!pThirdPartyBottomSupplement)
				pThirdPartyBottomSupplement = {};

			if (!pTopSupplement)
				pTopSupplement = {};
			if (!pBottomSupplement)
				pBottomSupplement = {};

			if (!pScriptInitSupplement)
				pScriptInitSupplement = {};

			var supplements = [];
			
			// TO BE HANDELED :
			$.each(pThirdPartyTopSupplement, function(index, value) {
				$.each(value, function(myIndex, supplement) {
					supplements.push(supplement);
					handleSupplementCount++;
				});
			});

			$.each(pThirdPartyBottomSupplement, function(index, value) {
				$.each(value, function(myIndex, supplement) {
					supplements.push(supplement);
					handleSupplementCount++;
				});
			});

			$.each(pTopSupplement, function(index, value) {
				$.each(value, function(myIndex, supplement) {
					supplements.push(supplement);
					handleSupplementCount++;
				});
			});

			$.each(pBottomSupplement, function(index, value) {
				$.each(value, function(myIndex, supplement) {
					supplements.push(supplement);
					handleSupplementCount++;
				});
			});

			appendHead(supplements);
			
			var scriptString = '';
			$.each(pScriptInitSupplement, function(index, value) {
				$.each(value, function(myIndex, supplement) {
					//$.escdbg.debug('I evaled ' + supplement);
					scriptString = 'try {\n';
					scriptString += supplement;
					scriptString += '\n}catch(e){\n';
//					scriptString += '$.lib.Debug.error("scriptInitSupplement failed");\n';
					scriptString += '$.lib.Debug.error(e);\n}';
					
					eval(scriptString);
					handleSupplementCount++;
				});
			});
			
			checkLoadScriptsReady();
			
			return handleSupplementCount;
		}
		
		function handleAjaxErrorResponse(pResponse)
		{
			if(ajaxOptions.data.ajax == "ajaxErrorResponse") {
				return;
			}
			
			var errorMessage = "";
			if (pResponse) {
				if (pResponse.status) {
					errorMessage += pResponse.status;
				}
				if (pResponse.statusText) {
					errorMessage += " " + pResponse.statusText;
				}
				if (pResponse.message) {
					errorMessage += " - " + pResponse.message;
				}
				if (pResponse.hint) {
					errorMessage += " - " + pResponse.hint;
				}
				if (pResponse == "") {
					errorMessage = "ajax call error";
				}
			}
			
			$.lib.ajax('ajaxErrorResponse', {
				"url" : url,
				data : {
					"errorMessage" : errorMessage,
					"errorResponse" : JSON.stringify(pResponse),
					"originalAjaxData" : ajaxOptions.data,
					"ajaxUrl" : url,
					"href" : window.location.href
				}
			}, "ajax", {
				'_ajaxErrorResponseSuccess' : function (){},
				'_ajaxErrorResponseError' : function (){}
			});
		}
		
		var pageId = $(".Page[data-role=page]").attr("data-page-id");
		if (ajaxOptions.data != "undefined" && ajaxOptions.data != null && pageId != "undefined" && pageId != null)
		{
			ajaxOptions.data.pageId = pageId;
		}
		
		// skip ajax cache
		if (window.location.href.indexOf('skipCache=1') != -1) 
		{
			ajaxOptions.data.skipCache = 1;
		}
		
		// create the calling options in order to perform
		var parms = {
			url : url,
			type : 'POST',
			data : ajaxOptions.data || {},
			dataType : 'json',
			complete : function(jqXHR) {
//				$.lib.Debug.debug("complete:"+url);
			},
			success : function(response) {
//				$.lib.Debug.debug("success:"+url);
				// ajax call successfull
				if (!response)
				{
					response = {status:3, message:"server error", hint:"no response object"};
				}

				if (response.status == 0) // no error occured on the server
				// side while processing the ajax call
				{
					if ($.isFunction(callingObject['_' + ajaxControllerMethodName + 'BeforeSuccessCallback'])) {
						callingObject['_' + ajaxControllerMethodName + 'BeforeSuccessCallback'].call(this, response, ajaxOptions, function() {
							success(response);
						});
					} else {						
						success(response);
					}
					
				} else // some error(S) occured on the server side while
				// processing the ajax call
				{
					$("body").removeClass("wait");
					$.lib.Debug.warning("Ajax call failed:" + ajaxControllerMethodName
							+ ", message: " + response.message);
					if (response.status == 10)
					{
						$("body").addClass("wait");
						alert(response.message||'no user');
						window.location.reload();
						return;
						
					}
					
					// log ajax error, because of 504 Gateway Timeout
					handleAjaxErrorResponse(response);
					
					if ($.isFunction(callingObject['_' + ajaxControllerMethodName + 'Error'])) {
						// call the error function
						callingObject['_' + ajaxControllerMethodName + 'Error'](response,
								ajaxOptions);
					} else {
						$.lib.Debug.error("$.lib.ajax: Function'" + '_'
								+ ajaxControllerMethodName + 'Error()' + "' does not exist.");
						
						alert("$.lib.ajax: Function'" + '_'
								+ ajaxControllerMethodName + 'Error()' + "' does not exist.");
					}
				}
			},
			error : function(response) {
				handleAjaxErrorResponse(response);
				
				$("body").removeClass("wait");
				//alert("response error");
				$.lib.Debug.error("Ajax call failed:" + ajaxControllerMethodName
						+ ", response: " + response.responseText);
				if ($.isFunction(callingObject['_' + ajaxControllerMethodName + 'Error'])) {
					// call the error function
					callingObject['_' + ajaxControllerMethodName + 'Error'](response,
							ajaxOptions);
				} else {
					$.lib.Debug.error("$.lib.ajax: Function'" + '_'
							+ ajaxControllerMethodName + 'Error()' + "' does not exist.");
				}
			}
		};
		$.extend(parms, ajaxOptions);
		parms.data.ajax = ajaxControllerMethodName;

		if (parms.data.ajaxCallCount)
		{
			// make a copy of the data - it is necessary, else ajaxOptions.data is changed (reference)
			parms.data = $.extend({}, parms.data);
			//remove the data
			delete parms.data.ajaxCallCount;
		}
				
		$.ajax(parms);
	};

})(jQuery);