$(document).ready(function()
{
	var uploadObj = $("#fileuploader").uploadFile({
		url:"system/modules/_uploader/upload.php",
		fileName:"myfile",
		autoSubmit:false,
		showDelete: false,
		fileCounterStyle:". Datei: ",
		dragDropStr: "<span>PDF, JPG, ZIP, max. 50MB</span>",
        uploadStr:"Datei auswählen",
        abortStr:"abbrechen",
		cancelStr:"Auswahl entfernen",
		doneStr:"fertig",
		allowedTypes:"jpg,pdf,zip",
		extErrorStr:"ist keine zugelassene Datei. Zulässige Dateiformate sind: ",
		maxFileSize: 1024*1024*100, //1024 = 1kb, 1048576 = 1024*1024= 1MB
		maxFileCount: 1,
		sizeErrorStr:"überschreitet die max. zulässige Dateigröße von ",
		// hier die restlichen gewünschten Parameter rein -> Am Ende immer ein Komma ,

		onSuccess:function(files,data,xhr) {
			var inputfilenames = '#dataform .filenames'; // ID,classname of input collecting filenames
			if ( $(inputfilenames).val() == '' ) {
				$(inputfilenames).val(data+',');
			} else {
				if ( $(inputfilenames).val().indexOf(data) === -1 ) {
					$(inputfilenames).val( $(inputfilenames).val() + ',' + data);
				}
			}			
		},
		afterUploadAll:function(obj)
		{	
			var inputfilenames = '#dataform .filenames'; // ID,classname of input collecting filenames
			$(inputfilenames).val( $(inputfilenames).val().replace(',', '') );
			$(inputfilenames).val( $(inputfilenames).val().replace(/,/g,", ") );
			// Kleiner Timeout und automatisches Absenden nach erfolgtem Upload
			window.setTimeout('document.forms["dataform"].submit();', 1000);
		}
	})
	$('#dataform').on('submit', function(e) {	
		e.preventDefault();
        	uploadObj.startUpload();
	});
});