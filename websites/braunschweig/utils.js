var dom = document.getElementById?1:0;

function showDiv(container) {
	document.getElementById(container+"off").style.display = "none";
	document.getElementById(container).style.display = "block";
}

function hideDiv(container) {
	document.getElementById(container).style.display = "none";
	document.getElementById(container+"off").style.display = "block";
}

function hideTableRow(container) {
	document.getElementById('linkPlus'+container).style.display = "none";
    if (MSIE) {
	    document.getElementById('linkMinus'+container).style.display = "inline";
	    document.getElementById('info'+container).style.display = "inline";
    } else {
	    document.getElementById('linkMinus'+container).style.display = "table-row";
	    document.getElementById('info'+container).style.display = "table-row";
	}
}

function showTableRow(container) {
    if (MSIE) {
        document.getElementById('linkPlus'+container).style.display = "inline";
    } else {
        document.getElementById('linkPlus'+container).style.display = "table-row";
    }
	document.getElementById('linkMinus'+container).style.display = "none";
	document.getElementById('info'+container).style.display = "none";
}

function hiFormImg(btn) {
	if (!dom) return;
	var ns = document.getElementById(btn).src.replace(/_lo./,"_hi.");
	document.getElementById(btn).src = ns;
	return;
}

function loFormImg(btn) {
	if (!dom) return;
	var ns = document.getElementById(btn).src.replace(/_hi./,"_lo.");
	document.getElementById(btn).src = ns;
	return;
}

var Netscape, MSIE, Opera, Unknown;
var Win, Mac, Other;
var NetscapeVer, MSIEVer, OperaVer;

Netscape = navigator.appName == "Netscape";
MSIE = navigator.appName == "Microsoft Internet Explorer";
Opera = navigator.userAgent.indexOf("Opera") > -1;
Unknown = !(Netscape || MSIE || Opera);

Win = navigator.userAgent.indexOf("Win") > -1;
Mac = navigator.userAgent.indexOf("Mac") > -1;
Other = !(Win || Mac);

if(Netscape) NetscapeVer = parseFloat(navigator.appVersion);
else if(MSIE) {
	n = navigator.userAgent;
	MSIEVer = n.substr(n.indexOf("MSIE ")+("MSIE ").length, 4);
	MSIEVer = parseFloat(MSIEVer);
	if(Opera) {
		OperaVer = n.substr(n.indexOf("Opera ")+("Opera ").length, 4);
		OperaVer = parseFloat(OperaVer);
	}
}

//SWFPlayer
if(typeof deconcept=="undefined"){var deconcept=new Object();}if (typeof deconcept.util=="undefined") {deconcept.util=new Object();}if (typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

function makeLink(TARGET,TOPIC) {
	var url = "http://"+TARGET;
	var title = "HBK Hochschule für Bildende Künste Braunschweig - "+TOPIC;
  if(Opera) alert("Bitte benutzen Sie die Tastenkombination Ctrl+T um diese Seite zu bookmarken!");
  else if(Win && MSIE && MSIEVer >= 5) window.external.AddFavorite(url, title);
  else alert("Bitte benutzen Sie die Tastenkombination Ctrl+D um diese Seite zu bookmarken!");
}

function mail2friend(ID,TOPIC,DEVURL) {
	var query = DEVURL+"/mail2friend.php?id="+ID+"&topic="+TOPIC;
	upload_win = open('','mailtofriend','width=533,height=600,status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no')
	upload_win.location.href = query;
	upload_win.focus()
}

var moz = (navigator.userAgent.toLowerCase().indexOf("gecko") > -1 || window.sidebar)?1:0;
var ns = navigator.userAgent.toLowerCase().indexOf("netscape/") > -1?1:0;

function hideselects() {
	if (dom && !ns) {
		if (!moz) sels = document.getElementsByTagName("SELECT");
		else sels = document.getElementsByTagName("OBJECT");
		for (var i = 0; i < sels.length; i++) {
			if (sels[i].id.indexOf('hide_') > -1) if (sels[i].style.visibility != "hidden") sels[i].style.visibility='hidden';
		}
	}
}

function showselects() {
	if (dom && !ns) {
		var sels;
		if (!moz) sels = document.getElementsByTagName("SELECT");
		else sels = document.getElementsByTagName("OBJECT");
		for (var i = 0; i < sels.length; i++) {
			if (sels[i].id.indexOf('hide_') > -1) if (sels[i].style.visibility != "visible") sels[i].style.visibility='visible';
		}
	}
}
function submit(form) {
	document.forms[form].submit();
}
function popup(url,width,height,scroll) {
	if (scroll=='') scroll = '0';
	popWin = window.open(url,'popup','resizable=no,location=0,directories=0,status=0,menubar=0,scrollbars='+scroll+',toolbar=0,width='+width+',height='+height);
	popWin.focus();
}
function moveTo(destination) {
	window.location.href=destination;
}

var flashVersion = 0;
function getFlashVersion() {
	var maxFlashVersion = 25;
	var minFlashVersion = 6;
	var agent = navigator.userAgent.toLowerCase();

	// NS3 needs flashVersion to be a local variable
	if (((agent.indexOf("mozilla/3") != -1) && (agent.indexOf("msie") == -1)) || ((agent.indexOf("msie") != -1) && (agent.indexOf("mac") != -1))) {
		flashVersion = 0;
		return flashVersion;
	}

	// NS3+, Opera3+, IE5+ Mac (support plugin array):  check for Flash plugin in plugin array
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		var flashPlugin = navigator.plugins['Shockwave Flash'];
		if (typeof flashPlugin == 'object') {
			for (var i = maxFlashVersion; i >= minFlashVersion; i--) {
				if (flashPlugin.description.indexOf(i + '.') != -1) {
					flashVersion = i;
					break;
				}
			}
		}
	}
	// IE4+ Win32:  attempt to create an ActiveX object using VBScript
	else if ((agent.indexOf("msie") != -1) && (parseInt(navigator.appVersion) >= 4) && (agent.indexOf("win") != -1) && (agent.indexOf("16bit") == -1)) {
		var doc = '<scr' + 'ipt language="VBScript"> \n';
		doc += 'On Error Resume Next \n';
		doc += 'Dim obFlash \n';
		doc += 'For i = '+maxFlashVersion+' To '+minFlashVersion+' Step -1 \n';
		doc += '   Set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash." & i) \n';
		doc += '   If IsObject(obFlash) Then \n';
		doc += '      flashVersion = i \n';
		doc += '      Exit For \n';
		doc += '   End If \n';
		doc += 'Next \n';
		doc += '</scr' + 'ipt> \n';
		document.write(doc);
	} else flashVersion = -1;
	return flashVersion;
}


function insertFlashObject_bak(id,src,width,height,name,bgcolor,imgsrc) {
	if (bgcolor.length == 0) bgcolor = '#ffffff';
	var canDo=0;
	if (getFlashVersion() >= 6) canDo = 1;
	if (canDo!=1) {
		if (imgsrc && imgsrc.length > 0) {
			document.write('<img src="'+imgsrc+'" border="0" alt="" /><br class="all" />');
		}
	} else {
    	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+width+'" height="'+height+'" align=""');
    	if (id.length > 0) document.write(' id="'+id+'"');
    	if (name.length > 0) document.write(' name="'+name+'"');
    	document.write('>\n');
    	document.writeln('<param name="movie" value="'+src+'" />');
    	document.writeln('<param name="menu" value="false" />');
    	document.writeln('<param name="quality" value="high" />');
    	document.writeln('<param name="scale" value="noborder" />');
    	document.writeln('<param name="bgcolor" value="'+bgcolor+'" />');
    	if ((id.length == 0) && (name.length > 0)) id = name;
    	document.writeln('<embed src="'+src+'" menu="false" quality="high" scale="noborder" bgcolor="'+bgcolor+'" width="'+width+'" height="'+height+'" name="'+id+'" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
    	document.writeln('</object>');
    }
}

function insertFlashObject(id,src,width,height,name,bgcolor,imgsrc,fl) {
	if (bgcolor.length == 0) bgcolor = '#ffffff';
	var canDo=0;
	var output ='';
	if (fl >= 6) canDo = 1;
	if (canDo!=1) {
		if (imgsrc && imgsrc.length > 0) {
			output +='<img src="'+imgsrc+'" border="0" alt="" /><br class="clear" />';
		}
	} else {
    	output += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+width+'" height="'+height+'" align=""';
    	if (id.length > 0) output = output + ' id="'+id+'"';
    	if (name.length > 0) output = output + ' name="'+name+'"';
    	output += '>\n';
    	output += '<param name="movie" value="'+src+'" />';
    	output += '<param name="menu" value="false" />';
    	output += '<param name="quality" value="high" />';
    	output += '<param name="scale" value="noborder" />';
    	output += '<param name="bgcolor" value="'+bgcolor+'" />';
    	if ((id.length == 0) && (name.length > 0)) id = name;
    	output += '<embed src="'+src+'" menu="false" quality="high" scale="noborder" bgcolor="'+bgcolor+'" width="'+width+'" height="'+height+'" name="'+id+'" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
    	output += '</object>';
    	document.getElementById('div_'+id).innerHTML = output;
    }
}



function insertQuicktimeObject(id,src,width,height,name) {
  document.write('<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="'+width+'" height="'+height+'" align=""');
  if (id.length > 0) document.write(' id="'+id+'"');
  if (name.length > 0) document.write(' name="'+name+'"');
  document.write('>\n');
  document.writeln('<param name="src" value="'+src+'" />');
  document.writeln('<param name="autoplay" value="true" />');
  document.writeln('<param name="controller" value="true" />');
  if ((id.length == 0) && (name.length > 0)) id = name;
  document.writeln('<embed src="'+src+'" width="'+width+'" height="'+height+'" name="'+id+'" autoplay="true" type="video/quicktime" pluginspage="http://www.apple.com/de/quicktime/download/" controller="true"></embed>');
  document.writeln('</object>');
}

function insertWMVObject(id,src,width,height,name) {
  document.write ('<embed src="'+src+'" width="'+width+'" height="'+height+'" autostart="true"></embed>');
  return;
}

function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1) end = dc.length;
	return unescape(dc.substring(begin + prefix.length, end));
}


function changeStyle(sheet,devurl) {
	setCookie("sheet",sheet);
	setCookie("devurl",devurl);
	document.location.reload();
}

	
