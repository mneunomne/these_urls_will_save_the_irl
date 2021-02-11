(function($) {
    /** jQuery.toJSON( json-serializble )
        Converts the given argument into a JSON respresentation.

        If an object has a "toJSON" function, that will be used to get the representation.
        Non-integer/string keys are skipped in the object, as are keys that point to a function.

        json-serializble:
            The *thing* to be converted.
     **/
    $.toJSON = function(o)
    {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);
        
        var type = typeof(o);
    
        if (o === null)
            return "null";
    
        if (type == "undefined")
            return undefined;
        
        if (type == "number" || type == "boolean")
            return o + "";
    
        if (type == "string")
            return $.quoteString(o);
    
        if (type == 'object')
        {
            if (typeof o.toJSON == "function") 
                return $.toJSON( o.toJSON() );
            
            if (o.constructor === Date)
            {
                var month = o.getUTCMonth() + 1;
                if (month < 10) month = '0' + month;

                var day = o.getUTCDate();
                if (day < 10) day = '0' + day;

                var year = o.getUTCFullYear();
                
                var hours = o.getUTCHours();
                if (hours < 10) hours = '0' + hours;
                
                var minutes = o.getUTCMinutes();
                if (minutes < 10) minutes = '0' + minutes;
                
                var seconds = o.getUTCSeconds();
                if (seconds < 10) seconds = '0' + seconds;
                
                var milli = o.getUTCMilliseconds();
                if (milli < 100) milli = '0' + milli;
                if (milli < 10) milli = '0' + milli;

                return '"' + year + '-' + month + '-' + day + 'T' +
                             hours + ':' + minutes + ':' + seconds + 
                             '.' + milli + 'Z"'; 
            }

            if (o.constructor === Array) 
            {
                var ret = [];
                for (var i = 0; i < o.length; i++)
                    ret.push( $.toJSON(o[i]) || "null" );

                return "[" + ret.join(",") + "]";
            }
        
            var pairs = [];
            for (var k in o) {
                var name;
                var type = typeof k;

                if (type == "number")
                    name = '"' + k + '"';
                else if (type == "string")
                    name = $.quoteString(k);
                else
                    continue;  //skip non-string or number keys
            
                if (typeof o[k] == "function") 
                    continue;  //skip pairs where the value is a function.
            
                var val = $.toJSON(o[k]);
            
                pairs.push(name + ":" + val);
            }

            return "{" + pairs.join(", ") + "}";
        }
    };
    $.quoteString = function(string)
    {
        if (string.match(_escapeable))
        {
            return '"' + string.replace(_escapeable, function (a) 
            {
                var c = _meta[a];
                if (typeof c === 'string') return c;
                c = a.charCodeAt();
                return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    };
})(jQuery);

(function($){
	jQuery.lib = jQuery.lib || {};
	
	jQuery.lib.Debug = {
		//Default Options
		m_oDefaults:{
			/**
			 * Aktuelle Zeit voransetzen
			 * @type boolean
			 */
			debugShowTime: false,
			/**
			 * Zu loggendes Element highlighten
			 * @type boolean
			 */
			highlightElement: false,
			/**
			 * Nicht erlaubte Log Levels
			 * @type Array
			 */
			disabledLogLevel: null,
			/**
			 * Zusätzliche Funktion ausführen nach dem Log
			 * @type function
			 */
			onOutput: null
		},	
		
		/**
		 * Default Options ändern
		 * 
		 * @param object options
		 */
		config : function(options)
		{
			$.extend(this.m_oDefaults, options);
		},
		
		/**
		 * Konsole leeren
		 */
		clearConsole : function()
		{
			if (console.clear)
			{
		        console.clear();
		    }
		},
		/**
		 * Status Log
		 * 
		 * @param * p_Message
		 */
		status : function(p_Message)
		{
			log("status", p_Message);
		},
		/**
		 * Error Log
		 * 
		 * @param * p_Message
		 */
		error : function(p_Message)
		{
			log("error", p_Message);
			
		},
		/**
		 * Warning Log
		 * 
		 * @param * p_Message
		 */
		warning : function(p_Message)
		{
			log("warning", p_Message);
		},
		/**
		 * Debug Log
		 * 
		 * @param * p_Message
		 */
		debug: function(p_Message)
		{
			log("debug", p_Message);
		},
		trace: function()
		{
			if(console.trace)
				console.trace();
			else
			{
				var trace = printStackTrace();
				//alert(trace.join('\n\n'))
				if(console.log)
					console.log(trace.join('\n\n'));
			}
		},
		/**
		 * Logs Gruppieren
		 * 
		 * @param function p_Function
		 * @param * p_Message
		 */
		group: function(p_Function, p_Message)
		{
			var strGroupName = "";
			//Default Gruppennamen
			if(!p_Message)
				strGroupName = "GROUP";
			else
				strGroupName = p_Message;
			
			//Gruppierung einleiten
			if(console.group)
				console.group(p_Message);
			else
				console.info("<------------[ "+p_Message+" ]------------>");
			//die einzelnen Logs durchführen
			p_Function();
			
			//Gruppierung beenden
			if(console.groupEnd)
				console.groupEnd(p_Message);
			else
				console.info("</------------[ "+p_Message+" ]------------>");
		}
	};
	jQuery.escdbg = jQuery.lib.Debug;//deprecated
	/**
	 * Schreibt einen Log eines beliebigen Log Levels
	 * 
	 * @param String p_strLogLevel
	 * @param * p_Message
	 */
	function log(p_strLogLevel, p_Message)
	{
		//Darf dieses LogLevel gerendert werden
		if(isEnabled(p_strLogLevel) == true)
		{
			//zu Loggendes Element Highlighten
			if($.escdbg.m_oDefaults.highlightElement == true && typeof(p_Message) == "object" && p_Message.tagName)
			{
				$(p_Message).css("border", "1px solid black");
			}
			//In die Konsole schreiben
			writeConsole(p_strLogLevel, p_Message);
			//onOutput Function ausführen, wenn gesetzt
			if(typeof($.escdbg.m_oDefaults.onOutput) == "function")
			{
				//var trace = printStackTrace();
				var outputMessage = getParamAsString(p_Message);
				var oReturn = {
						iTimestamp:getTimestamp(false),
						strFormattedTime: getTimeAsString(),
						strLogLevel: p_strLogLevel,
						strMessage: outputMessage
				};
				$.escdbg.m_oDefaults.onOutput(oReturn);
			}
		}
	}
	/**
	 * Schreibt eine Message in die Konsole
	 * 
	 * @param String p_strLogLevel
	 * @param * p_LogMessage
	 */
	function writeConsole(p_strLogLevel, p_LogMessage)
	{
		var logMessage = p_LogMessage;
		if($.escdbg.m_oDefaults.debugShowTime == true && typeof(logMessage) == "string")
		{
			logMessage = getTimeAsString() + " " + logMessage;
		}
		
		if(typeof(console) !== 'undefined' && console != null)
		{
			switch(p_strLogLevel)
			{
				case 'error':
					if(console.error)
						console.error(logMessage);
					else
						console.log("ERROR: "+logMessage);
					break;
				case 'warning':
					if(console.warn)
						console.warn(logMessage);
					else
						console.log("WARNING: "+logMessage);
					break;
				case 'status':
					if(console.info)
						console.info(logMessage);
					else
						console.log("STATUS: "+logMessage);
					break;
				case 'debug':
					if(console.log)
						console.log(logMessage);
					break;
			}
		}
	}
	
	/**
	 * Liefert den übergebenen Parameter als String zurück
	 * @param * p_Message
	 * @return String outputMessage
	 */
	function getParamAsString(p_Message)
	{
		var outputMessage = p_Message;
		//Wenn die Message ein Objekt ist, dann dieses in ein JSON String wandeln 
		if(typeof(outputMessage) == "object")
		{
			outputMessage = $.toJSON(outputMessage);
			return outputMessage;
		}
		else
			return String(outputMessage);
	}
	
	/**
	 * Liefert den aktuellen Timestamp in Millisekunden oder Sekunden
	 * 
	 * @param boolean p_bMilliseconds
	 * @return String timestamp
	 */
	function getTimestamp(p_bMilliseconds)
	{
		oDate = new Date();
		if(p_bMilliseconds == true)
			return String(oDate.getTime());
		else
			return (String(Math.round(oDate.getTime()/1000)));
	}
	
	/**
	 * Liefert die Aktuelle Uhrzeit formatiert zurück hh:mm:ss:f zurück
	 * 
	 * @return String time
	 */
	function getTimeAsString()
	{
		oDate = new Date();
		Hours = oDate.getHours();
		Minutes = oDate.getMinutes();
		Seconds = oDate.getSeconds();
		Milliseconds = oDate.getMilliseconds();
		if(Hours < 10){Hours="0"+Hours}
		if(Minutes < 10){Minutes="0"+Minutes}
		if(Seconds < 10){Seconds="0"+Seconds}
		if(Milliseconds < 100){Milliseconds="0"+Milliseconds}
		if(Milliseconds < 10){ Milliseconds="0"+Milliseconds}

		return Hours + ":" + Minutes + ":" + Seconds + ":" + Milliseconds;
	}
	
	/**
	 * Prüft ob ein Log ausgeführt werden darf oder ob diese Loglevel nicht erlaubt ist
	 * 
	 * @param String p_strLogLevel
	 * @return boolean
	 */
	function isEnabled(p_strLogLevel)
	{
		var oDisabledLogLevels = $.escdbg.m_oDefaults.disabledLogLevel;
		if(oDisabledLogLevels != null)
		{
			for(var i=0; i<oDisabledLogLevels.length; i++)
			{
				if(oDisabledLogLevels[i] == p_strLogLevel)
					return false;
			}
		}
		return true;
	}
	function printStackTrace(options) {
	    var ex = (options && options.e) ? options.e : null;
	    var guess = options ? !!options.guess : true;
	    
	    var p = new printStackTrace.implementation();
	    var result = p.run(ex);
	    return (guess) ? p.guessFunctions(result) : result;
	}

	printStackTrace.implementation = function() {};

	printStackTrace.implementation.prototype = {
	    run: function(ex) {
	        ex = ex ||
	            (function() {
	                try {
	                    var _err = __undef__ << 1;
	                } catch (e) {
	                    return e;
	                }
	            })();
	        // Use either the stored mode, or resolve it
	        var mode = this._mode || this.mode(ex);
	        if (mode === 'other') {
	            return this.other(arguments.callee);
	        } else {
	            return this[mode](ex);
	        }
	    },
	    
	    /**
	     * @return {String} mode of operation for the environment in question.
	     */
	    mode: function(e) {
	        if (e['arguments']) {
	            return (this._mode = 'chrome');
	        } else if (window.opera && e.stacktrace) {
	            return (this._mode = 'opera10');
	        } else if (e.stack) {
	            return (this._mode = 'firefox');
	        } else if (window.opera && !('stacktrace' in e)) { //Opera 9-
	            return (this._mode = 'opera');
	        }
	        return (this._mode = 'other');
	    },

	    /**
	     * Given a context, function name, and callback function, overwrite it so that it calls
	     * printStackTrace() first with a callback and then runs the rest of the body.
	     * 
	     * @param {Object} context of execution (e.g. window)
	     * @param {String} functionName to instrument
	     * @param {Function} function to call with a stack trace on invocation
	     */
	    instrumentFunction: function(context, functionName, callback) {
	        context = context || window;
	        context['_old' + functionName] = context[functionName];
	        context[functionName] = function() { 
	            callback.call(this, printStackTrace());
	            return context['_old' + functionName].apply(this, arguments);
	        };
	        context[functionName]._instrumented = true;
	    },
	    
	    /**
	     * Given a context and function name of a function that has been
	     * instrumented, revert the function to it's original (non-instrumented)
	     * state.
	     *
	     * @param {Object} context of execution (e.g. window)
	     * @param {String} functionName to de-instrument
	     */
	    deinstrumentFunction: function(context, functionName) {
	        if (context[functionName].constructor === Function &&
	                context[functionName]._instrumented &&
	                context['_old' + functionName].constructor === Function) {
	            context[functionName] = context['_old' + functionName];
	        }
	    },
	    
	    /**
	     * Given an Error object, return a formatted Array based on Chrome's stack string.
	     * 
	     * @param e - Error object to inspect
	     * @return Array<String> of function calls, files and line numbers
	     */
	    chrome: function(e) {
	        return e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@').split('\n');
	    },

	    /**
	     * Given an Error object, return a formatted Array based on Firefox's stack string.
	     * 
	     * @param e - Error object to inspect
	     * @return Array<String> of function calls, files and line numbers
	     */
	    firefox: function(e) {
	        return e.stack.replace(/(?:\n@:0)?\s+$/m, '').replace(/^\(/gm, '{anonymous}(').split('\n');
	    },

	    /**
	     * Given an Error object, return a formatted Array based on Opera 10's stacktrace string.
	     * 
	     * @param e - Error object to inspect
	     * @return Array<String> of function calls, files and line numbers
	     */
	    opera10: function(e) {
	        var stack = e.stacktrace;
	        var lines = stack.split('\n'), ANON = '{anonymous}',
	            lineRE = /.*line (\d+), column (\d+) in ((<anonymous function\:?\s*(\S+))|([^\(]+)\([^\)]*\))(?: in )?(.*)\s*$/i, i, j, len;
	        for (i = 2, j = 0, len = lines.length; i < len - 2; i++) {
	            if (lineRE.test(lines[i])) {
	                var location = RegExp.$6 + ':' + RegExp.$1 + ':' + RegExp.$2;
	                var fnName = RegExp.$3;
	                fnName = fnName.replace(/<anonymous function\:?\s?(\S+)?>/g, ANON);
	                lines[j++] = fnName + '@' + location;
	            }
	        }
	        
	        lines.splice(j, lines.length - j);
	        return lines;
	    },
	    
	    // Opera 7.x-9.x only!
	    opera: function(e) {
	        var lines = e.message.split('\n'), ANON = '{anonymous}', 
	            lineRE = /Line\s+(\d+).*script\s+(http\S+)(?:.*in\s+function\s+(\S+))?/i, 
	            i, j, len;
	        
	        for (i = 4, j = 0, len = lines.length; i < len; i += 2) {
	            //TODO: RegExp.exec() would probably be cleaner here
	            if (lineRE.test(lines[i])) {
	                lines[j++] = (RegExp.$3 ? RegExp.$3 + '()@' + RegExp.$2 + RegExp.$1 : ANON + '()@' + RegExp.$2 + ':' + RegExp.$1) + ' -- ' + lines[i + 1].replace(/^\s+/, '');
	            }
	        }
	        
	        lines.splice(j, lines.length - j);
	        return lines;
	    },
	    
	    // Safari, IE, and others
	    other: function(curr) {
	        var ANON = '{anonymous}', fnRE = /function\s*([\w\-$]+)?\s*\(/i,
	            stack = [], fn, args, maxStackSize = 10;
	        
	        while (curr && stack.length < maxStackSize) {
	            fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
	            args = Array.prototype.slice.call(curr['arguments']);
	            stack[stack.length] = fn + '(' + this.stringifyArguments(args) + ')';
	            curr = curr.caller;
	        }
	        return stack;
	    },
	    
	    /**
	     * Given arguments array as a String, subsituting type names for non-string types.
	     *
	     * @param {Arguments} object
	     * @return {Array} of Strings with stringified arguments
	     */
	    stringifyArguments: function(args) {
	        for (var i = 0; i < args.length; ++i) {
	            var arg = args[i];
	            if (arg === undefined) {
	                args[i] = 'undefined';
	            } else if (arg === null) {
	                args[i] = 'null';
	            } else if (arg.constructor) {
	                if (arg.constructor === Array) {
	                    if (arg.length < 3) {
	                        args[i] = '[' + this.stringifyArguments(arg) + ']';
	                    } else {
	                        args[i] = '[' + this.stringifyArguments(Array.prototype.slice.call(arg, 0, 1)) + '...' + this.stringifyArguments(Array.prototype.slice.call(arg, -1)) + ']';
	                    }
	                } else if (arg.constructor === Object) {
	                    args[i] = '#object';
	                } else if (arg.constructor === Function) {
	                    args[i] = '#function';
	                } else if (arg.constructor === String) {
	                    args[i] = '"' + arg + '"';
	                }
	            }
	        }
	        return args.join(',');
	    },
	    
	    sourceCache: {},
	    
	    /**
	     * @return the text from a given URL.
	     */
	    ajax: function(url) {
	        var req = this.createXMLHTTPObject();
	        if (!req) {
	            return;
	        }
	        req.open('GET', url, false);
	        req.setRequestHeader('User-Agent', 'XMLHTTP/1.0');
	        req.send('');
	        return req.responseText;
	    },
	    
	    /**
	     * Try XHR methods in order and store XHR factory.
	     *
	     * @return <Function> XHR function or equivalent
	     */
	    createXMLHTTPObject: function() {
	        var xmlhttp, XMLHttpFactories = [
	            function() {
	                return new XMLHttpRequest();
	            }, function() {
	                return new ActiveXObject('Msxml2.XMLHTTP');
	            }, function() {
	                return new ActiveXObject('Msxml3.XMLHTTP');
	            }, function() {
	                return new ActiveXObject('Microsoft.XMLHTTP');
	            }
	        ];
	        for (var i = 0; i < XMLHttpFactories.length; i++) {
	            try {
	                xmlhttp = XMLHttpFactories[i]();
	                // Use memoization to cache the factory
	                this.createXMLHTTPObject = XMLHttpFactories[i];
	                return xmlhttp;
	            } catch (e) {}
	        }
	    },

	    /**
	     * Given a URL, check if it is in the same domain (so we can get the source
	     * via Ajax).
	     *
	     * @param url <String> source url
	     * @return False if we need a cross-domain request
	     */
	    isSameDomain: function(url) {
	        return url.indexOf(location.hostname) !== -1;
	    },
	    
	    /**
	     * Get source code from given URL if in the same domain.
	     *
	     * @param url <String> JS source URL
	     * @return <Array> Array of source code lines
	     */
	    getSource: function(url) {
	        if (!(url in this.sourceCache)) {
	            this.sourceCache[url] = this.ajax(url).split('\n');
	        }
	        return this.sourceCache[url];
	    },
	    
	    guessFunctions: function(stack) {
	        for (var i = 0; i < stack.length; ++i) {
	            var reStack = /\{anonymous\}\(.*\)@(\w+:\/\/([\-\w\.]+)+(:\d+)?[^:]+):(\d+):?(\d+)?/;
	            var frame = stack[i], m = reStack.exec(frame);
	            if (m) {
	                var file = m[1], lineno = m[4]; //m[7] is character position in Chrome
	                if (file && this.isSameDomain(file) && lineno) {
	                    var functionName = this.guessFunctionName(file, lineno);
	                    stack[i] = frame.replace('{anonymous}', functionName);
	                }
	            }
	        }
	        return stack;
	    },
	    
	    guessFunctionName: function(url, lineNo) {
	        try {
	            return this.guessFunctionNameFromLines(lineNo, this.getSource(url));
	        } catch (e) {
	            return 'getSource failed with url: ' + url + ', exception: ' + e.toString();
	        }
	    },
	    
	    guessFunctionNameFromLines: function(lineNo, source) {
	        var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/;
	        var reGuessFunction = /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*(function|eval|new Function)/;
	        // Walk backwards from the first line in the function until we find the line which
	        // matches the pattern above, which is the function definition
	        var line = "", maxLines = 10;
	        for (var i = 0; i < maxLines; ++i) {
	            line = source[lineNo - i] + line;
	            if (line !== undefined) {
	                var m = reGuessFunction.exec(line);
	                if (m && m[1]) {
	                    return m[1];
	                } else {
	                    m = reFunctionArgNames.exec(line);
	                    if (m && m[1]) {
	                        return m[1];
	                    }
	                }
	            }
	        }
	        return '(?)';
	    }
	};
})(jQuery)