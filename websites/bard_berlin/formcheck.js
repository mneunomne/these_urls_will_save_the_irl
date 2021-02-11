<!--

function formcheck(form,loc,fm) {
	if (fm == 1) {
		form.action = "//" + loc + ".bard.edu" + "/cgi-bin/FormMail.cgi";
	}
	else {
		form.action = "//" + loc + ".bard.edu" + "/scripts/FormMail/FormMail.php";
	}
}

function formcheck2(form,req) {
	reqfield = document.createElement('input');
	reqfield.type = 'hidden';
	reqfield.id = 'checksubmit';
	reqfield.name = req;
	reqfield.value = true;
	form.appendChild(reqfield);
}

//-->
