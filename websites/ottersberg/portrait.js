jQuery(document).ready(function($) {
	$("#portList").accordion({
		collapsible: true,
		active: 0,
		highlight: false, 
		header: '.portBlockHead',
		autoHeight: false
	});
	
	
	$("#bibList").accordion({
		collapsible: true,
		active: 0,
		highlight: false, 
		header: '.bibBlockHead',
		autoHeight: false
	});
	
	$("#foldBlock").accordion({
		collapsible: true,
		active: false,
		highlight: false, 
		header: '.foldBlock__head',
		autoHeight: false
	});
});