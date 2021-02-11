/**
 * webEdition CMS
 *
 * webEdition CMS
 * $Rev: 12372 $
 * $Author: mokraemer $
 * $Date: 2016-06-29 10:28:50 +0200 (Wed, 29 Jun 2016) $
 *
 * This source is part of webEdition CMS. webEdition CMS is
 * free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * any later version.
 *
 * The GNU General Public License can be found at
 * http://www.gnu.org/copyleft/gpl.html.
 * A copy is found in the textfile
 * webEdition/licenses/webEditionCMS/License.txt
 *
 * @category   webEdition
 * @package    webEdition_base
 * @license    http://www.gnu.org/copyleft/gpl.html  GPL
 */

function weCheckFormEvent() {
}

weCheckFormEvent.addEvent = function (e, name, f) {
	if (e.addEventListener) {
		e.addEventListener(name, f, true);
	}
};

weCheckFormEvent.stopEvent = function (ev) {
	if (ev.stopPropagation) {
		ev.preventDefault();
		ev.stopPropagation();
	} else {
		ev.cancelBubble = true;
		ev.returnValue = false;
	}
};


function initWeCheckForm_by_name(func, name) {
	forms = document.getElementsByTagName("form");
	for (i = 0; i < forms.length; i++) {
		if (forms[i].name == name) {
			weCheckFormEvent.addEvent(forms[i], "submit", func);
			break;
		}
	}
}

function initWeCheckForm_by_id(func, id) {
	formular = document.getElementById(id);
	weCheckFormEvent.addEvent(formular, "submit", func);
}

/*return name of not set mandatory fields
 */
function weCheckFormMandatory(form, reqFields) {
	//  check required fields
	var missingFields = [];
	var formname = form.name;
	var elemType = '';
	var ok;

	for (i = 0; i < reqFields.length; i++) {
		elem = form[reqFields[i]];
		//test if userinput fields are used, format: we_ui_FORM[elemname]
		if (elem === undefined) {
			elem = form["we_ui_" + formname + "[" + reqFields[i] + "]"];
		}

		elemType = elem && elem.type ? elem.type : 'none';
		switch (elemType) {
			case "checkbox":
				if (!elem.checked) {
					missingFields.push(reqFields[i]);
				}
				break;
			case "select-one":
			case "select-multi":
				if (elem.selectedIndex === undefined || elem.options[elem.selectedIndex].value === "") { // select
					missingFields.push(reqFields[i]);
				}
				break;
			default:
				if (!elem || !elem.value) {        //  text, password, select
					ok = false;
					//  perhaps it is a radio-button
					if (elem && elem.length) {
						for (j = 0; j < elem.length; j++) {
							if (elem[j].checked) {
								ok = true;
							}
						}

					}
					if (!ok) {
						missingFields.push(reqFields[i]);
					}
				}
		}

	}
	return missingFields;
}

function weCheckFormEmail(form, emailFields) {    //  return names of invalid email fields
	invalidEmails = [];

	if (emailFields.length > 0) {
		pattern = "^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9\-_\\.]+)\\.([a-zA-Z0-9]{2,4})";
		for (i = 0; i < emailFields.length; i++) {

			elem = formular[emailFields[i]];
			if (elem && elem.value) {
				if (!elem.value.match(pattern)) {
					invalidEmails.push(emailFields[i]);
				}
			}
		}
	}
	return invalidEmails;
}

function weCheckFormPassword(form, pwFields) {   //  return true in case of error

	if (form[pwFields[0]] && form[pwFields[1]] && pwFields[2]) {

		f1 = form[pwFields[0]].value;
		f2 = form[pwFields[1]].value;
		f3 = pwFields[2];

		return ((f1 == f2) && (f1.length >= f3) ? false : true);
	}
	return true;

}
