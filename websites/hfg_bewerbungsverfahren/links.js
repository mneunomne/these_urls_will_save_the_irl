var elem = document.querySelectorAll('.article__text p a');
for(var i=0;i<elem.length;i++){
	var el = elem[i];
	var attr = el.getAttribute("href");
	if(attr.indexOf(".pdf")>-1){
		el.innerHTML += " (PDF)";
	}
}
var elem = document.querySelectorAll('.publication__text p a');
for(var i=0;i<elem.length;i++){
	var el = elem[i];
	var attr = el.getAttribute("href");
	if(attr.indexOf(".pdf")>-1){
		el.innerHTML += " (PDF)";
	}
}
var elem = document.querySelectorAll('.wysiwyg__list-item a');
for(var i=0;i<elem.length;i++){
	var el = elem[i];
	var attr = el.getAttribute("href");
	if(attr.indexOf(".pdf")>-1){
		el.innerHTML += " (PDF)";
	}
}