// breadcrumb script from Dawn


function setSlideShowTitle() {
	var titleText = document.title;
        var textArr = titleText.split('|');
	var slideshow_title = textArr[1];
}


function displayBreadcrumbs() {
        var urlText = document.location.href;
        var titleText = document.title;

        // enter title separator in line below, could be ':' or '|'
        var textArr = titleText.split('|');
        var bcArr = new Array();
        var i = 0;
        var x = 0;
        var n = 0;
        var bc = '';

        var cleanUrlText = urlText.replace('https://','');
        var urlArr = cleanUrlText.split('/');

        // set start to the number of title elements you want to ignore
        // setting start=1 ignores the first 2 elements: Bard College
        var start = 0;

        var buildLink = 'https://';
        var buildArr = new Array();

        for (i=0;i<start;i++) {
                buildArr[i] = urlArr[i];
        }

        var link = buildLink+buildArr.join('/')+'/';

        var newLink = link;

        for (i=start;i<textArr.length;i++) {

                var newLink = link;

                for (n=start;n<i;n++) {
                        newLink += urlArr[n]+'/';
                }

                var val = textArr[i];
                val = val.replace(/^\s+|\s+$/g, '') ;

                var linkVal = '';

                if (i >=1) {
                        linkVal = newLink+urlArr[i]+'/'+urlArr[i+1];
                }
                else {
                        linkVal = newLink+urlArr[i];
                }

                if (i<(textArr.length-1)) {
                        linkVal += '/';
                }
  	
		if (val == 'About') {
                        bcArr[x] = '<a href="'+linkVal+'">About Us</a>';
                }
                else if (val == 'Bard College') {
                        bcArr[x] = '<a href="'+linkVal+'">Bard College</a>';
                }
                else {
                        bcArr[x] = '<a href="'+linkVal+'">'+val+'</a>';
                }

                x++;
        }

        bc = bcArr.join(' : ');
        return bc;
}


//end breadcrumb script



var section;

browsver = navigator.appVersion.toLowerCase();
browsvernum = parseInt(navigator.appVersion);
browsname = navigator.appName;
browsagt = navigator.userAgent.toLowerCase();


function initpage() {
	if (section == "hp") {
		thebodyarea = document.getElementById("flash");
	}
	else {
		thebodyarea = document.getElementById("bodyshell");
	}
	
	if (thebodyarea.addEventListener) {
		thebodyarea.addEventListener("mouseover", hideall, true);
	}
	else if (thebodyarea.attachEvent) {
		thebodyarea.attachEvent("onmouseover", hideall);
	}
}

//onload = initpage;





function hideall() {
	showhide();
}


/*function showhide(thisid) {
//	if (browsagt.indexOf("safari") != -1 && section == "hp") {
	if (browsagt.indexOf("mac") != -1 && section == "hp") {
		return;
	}
	navnum = 7;
	mainsubnav = document.getElementById('mainsubnavigation');
	subnavvis = false;
	for (i=1; i<=navnum; i++) {
		thislink = document.getElementById('navlink'+i);
		thissubnav = document.getElementById('mainsubnav'+i);
		if (thislink && thissubnav) {
			if (thisid == i) {
				thislinktop = getpos('navlink'+i);
				thislink.style.borderBottomWidth = "1px";
				thislink.style.marginBottom = "8px";
				//thislink.style.borderBottomColor = "#666666";
				thissubnav.style.display = "block";
				mainsubnav.style.top = thislinktop + "px";
				subnavvis = true;
			}
			else {
				thislink.style.borderBottomWidth = "0px";
				thislink.style.marginBottom = "9px";
				//thislink.style.borderBottomColor = "transparent";
				thissubnav.style.display = "none";
			}

			if (subnavvis == true) {
				//mainsubnav.style.visibility = "visible";
				mainsubnav.style.display = "block";
			}
			else {
				//mainsubnav.style.visibility = "hidden";
				mainsubnav.style.display = "none";
			}
		}
	}

}*/

/*function getpos(id) {
	thenavlink = document.getElementById(id);

	navlinktop = thenavlink.offsetTop;

	if (thenavlink.offsetHeight) {
		navlinkheight = thenavlink.offsetHeight;
	}
	else {
		navlinkheight = 0;
	}

	navlinktop = 0;
	if (thenavlink.offsetParent) {
		while (thenavlink.offsetParent) {
			navlinktop += thenavlink.offsetTop
			thenavlink = thenavlink.offsetParent;
		}
	}
	else if (thenavlink.y) {
		navlinktop += thenavlink.y;
	}

	//navlinktop += navlinkheight;

	return navlinktop;
}*/




/*function newnav(nav) {
	var thisnav = document.getElementById("nav_" + nav);
	var thissubnav = thisnav.getElementsByTagName("ul");

	for (var i=0; i<thissubnav.length; i++) {
		if (thissubnav[i].className.indexOf("sidesubnav") >= 0) {
			if (thissubnav[i].currentStyle) { // IE, Opera
				var thisdisplay = thissubnav[i].currentStyle.display;
			}
			else { // Firefox, Safari
				var thisdisplay = getComputedStyle(thissubnav[i],null).getPropertyValue('display');
			}

			if (thisdisplay == "none") {
				thissubnav[i].style.display = "block";
			}
			else {
				thissubnav[i].style.display = "none";
			}
		}
	}
}*/


function viewtext(id,action) {
	thisel = document.getElementById("view_" + id);
	thismorelink = document.getElementById("viewmore_" + id);
	thislesslink = document.getElementById("viewless_" + id);

	if (action == "more") {
		thisel.style.display = "block";
		thismorelink.style.display = "none";
		thislesslink.style.display = "inline";
	}
	else if (action == "less") {
		thisel.style.display = "none";
		thislesslink.style.display = "none";
		thismorelink.style.display = "inline";
	}
}


/*******************  For academic event calendars ******************/
function faqeventsview(id1,id2,id3) {
	thisicon = document.getElementById(id1);
	viewthis1 = document.getElementById(id2);
	if (id3) {
		viewthis2 = document.getElementById(id3);
	}

	if (viewthis1.style.display == "none") {
		viewthis1.style.display = "block";
		if (id3) {
			viewthis2.style.display = "none";
		}
		thisicon.src = "https://www.bard.edu/lib/calendar/images/icon_more.jpg";
	}
	else {
		viewthis1.style.display = "none";
		if (id3) {
			viewthis2.style.display = "block";
		}
		thisicon.src = "https://www.bard.edu/lib/calendar/images/icon_less.jpg";
	}
}


function newseventsview(id1,id2,id3) {
	thisicon = document.getElementById(id1);
	viewthis1 = document.getElementById(id2);
	if (id3) {
		viewthis2 = document.getElementById(id3);
	}

	if (viewthis1.style.display == "none") {
		viewthis1.style.display = "block";
		if (id3) {
			viewthis2.style.display = "none";
		}
		thisicon.src = "https://tools.bard.edu/images/icon_less.jpg";
	}
	else {
		viewthis1.style.display = "none";
		if (id3) {
			viewthis2.style.display = "block";
		}
		thisicon.src = "https://tools.bard.edu/images/icon_more.jpg";
	}
}
/* ------------------------------------------------------------- */

/* ------------------------------------------------------------- */


function add_javascript(file,tag) {
	var thistag = document.getElementsByTagName(tag)[0];
	var thisnew = document.createElement("script");
	thisnew.setAttribute("type","text/javascript");
	thisnew.setAttribute("src",file);
	thistag.appendChild(thisnew);
}
/* EXAMPLE
add_javascript("../lib/script.js","head");
*/



/* ------------------- expand text script ------------------------------- */
function textview(id) {
	var viewthis = document.getElementById(id);

	if (viewthis.style.display == "none") {
		viewthis.style.display = "block";
	}
	else {
		viewthis.style.display = "none";
	}
}

// expand menu js
function display (category) {
	var whichcategory = document.getElementById(category);
	if (whichcategory.className=="show") {
		whichcategory.className="hide";
	} else {
		whichcategory.className="show";
	}
}


// expand menu for PR tools js
function newsView(id) {
	viewthis1 = document.getElementById(id);
	
	if (viewthis1.style.display == "none") {
		viewthis1.style.display = "block";
	}
	else {
		viewthis1.style.display = "none";
	}
}
/* ------------------- add calendar script ------------------------------- */


//add_javascript("https://www.bard.edu/lib/calendar/lib/calendar.js","head");


/* --------- popup ----------*/

function popup(url) {
  remote = open(url, "remote", "resizable,scrollbars,width=650,height=550");
}
