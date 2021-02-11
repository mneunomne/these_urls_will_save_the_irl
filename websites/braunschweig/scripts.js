var activeCalDetail = "";
var aktiv="";

function showCalDetail(obj) {
	window.clearTimeout(aktiv);
	if (activeCalDetail != "" && activeCalDetail != obj) hideCalDetail(activeCalDetail);
	activeCalDetail = obj;
	if (document.getElementById("link"+activeCalDetail)) {
		document.getElementById("link"+activeCalDetail).className = "dayActive";
		document.getElementById("detail"+activeCalDetail).className = "calDetail";
	}
}

function checkCalDetail(obj) {
	aktiv = window.setTimeout("hideCalDetail('"+obj+"')",250);
}

function hideCalDetail(obj) {
	if (document.getElementById("link"+obj)) {
		document.getElementById("link"+obj).className = "day";
	}
	if (document.getElementById("detail"+obj)) {
		document.getElementById("detail"+obj).className = "calDetailHide";
	}
}

function clearField (thisfield, placeholder) {
    if (thisfield.value == placeholder) { thisfield.value = ''}
}

function setCookie(name, value) {
	var expiration = new Date();
	var sevenDays = expiration.getTime() + (7 * 24 * 60 * 60 * 1000);
	expiration.setTime(sevenDays);
	var curCookie = name + "=" + escape(value) + ";expires=" + escape(expiration.toGMTString()) + ";path=/;";
	document.cookie = curCookie;
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

function increaseFontsize() {
	value = 0.7;
	setCookie("fontsize",value);
	document.getElementsByTagName("body")[0].style.fontSize = value + "em";
}

function decreaseFontsize() {
	value = 0.55;
	setCookie("fontsize",value);
	document.getElementsByTagName("body")[0].style.fontSize = value + "em";
}

function normalFontsize() {
	value = 0.625;
	setCookie("fontsize",value);
	document.getElementsByTagName("body")[0].style.fontSize = value + "em";
}
function initFontsize() {
	value = getCookie("fontsize");
	if (!value) {
		value = "0.625";
	}
	document.getElementsByTagName("body")[0].style.fontSize = value + "em";
}

function makeHTMLElement(obj,text,eType,ostyle) {
	var myElement = document.createElement(eType);
	var myElementSub = document.createTextNode(text);
	myElement.appendChild(myElementSub);
	if (ostyle != "") {
		myElement.setAttribute("style",ostyle);
	}
	obj.appendChild(myElement);
}
function makeAttribute(obj,title,value) {
	var attTitle = document.createAttribute(title);
	attTitle.nodeValue = value;
	obj.setAttributeNode(attTitle);
}

function switchDivs(showDiv,hideDiv) {
	if (showDiv != "") {
		document.getElementById(showDiv).style.display = "block";
	}
	if (hideDiv != "") {
		document.getElementById(hideDiv).style.display = "none";
	}
}

function getCalendar(id,calCat,calMonth,calYear,calLang,devurl,idevurl) {
    new Ajax.Updater(id, '/_inc/app/dbcalendar.php?calCat='+calCat+'&month='+calMonth+'&year='+calYear+'&lang='+calLang+'&devurl='+devurl+'&idevurl='+idevurl, { method: 'get' });
}

function createSearchNavigation(ul, group, query, text, classname, spanId) {
   
  var span = document.createElement('span');
  span.id = spanId;
  
  var link = document.createElement('a');
  link.href = '?make=find&localsearch=1&group='+group+'&query='+query;
  link.className = classname;  
  link.appendChild(document.createTextNode(text));
  link.appendChild(span);
  
  var li = document.createElement('li');
  li.appendChild(link);
  
  ul.appendChild(li);
}
