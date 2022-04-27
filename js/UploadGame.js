$(document).ready(function(){
    $("#UploadGame").submit(function(e){
        e.preventDefault();

        let Mensaje = "";
        let IsEntrar = false;

        var UserType = $("#UserType").val();
        var GameName = $("#GameName").val();
        var GameDescription = $("#GameDescription").val();
        var GameUpload = $("#GameUpload").val();
        var GameImage = $("#GameImage").val();

        if (GameName.length < 8 || GameName.length > 20){
            IsEntrar = true;
            Mensaje += "El nombre de su juego debe tener entre 8 y 20 caracteres<br>";
        }
        if (GameDescription.length < 50 || GameDescription.length > 250){
            IsEntrar = true;
            Mensaje += "La descripción de su juego debe tener entre 50 y 250 caracteres<br>";
        }

        if(IsEntrar){
            $("#Mensaje").html(Mensaje);
        }
        else{
            $("#Mensaje").html();
            if (UserType == 1) {
                $(location).attr("href","UploadedGameNormal.html");
            }
            if (UserType == 2) {
                $(location).attr("href","UploadedGameCreator.html");
            }
            if (UserType == 3) {
                $(location).attr("href","UploadedGameAdmin.html");
            }
        }
    });

    $(document).on("change","input[name = 'GameArchive']", function(){
        var fileName = this.files[0].name;
	    var fileSize = this.files[0].size;

	    if(fileSize > 500000000){
	    	alert('El archivo del juego no debe superar los 500MB');
	    	this.value = '';
	    	this.files[0].name = '';
	    }else{
	    	// recuperamos la extensión del archivo
	    	var ext = fileName.split('.').pop();
        
	    	// Convertimos en minúscula porque 
	    	// la extensión del archivo puede estar en mayúscula
	    	ext = ext.toLowerCase();
        
	    	switch (ext) {
	    		case 'zip':
	    		case 'rar':
	    		case '7zip':
	    		case 'exe': break;
	    		default:
	    			alert('El archivo no tiene la extensión adecuada');
	    			this.value = ''; // reset del valor
	    			this.files[0].name = '';
	    	}
	    }
    });

    $(document).on("change","input[name = 'GameImage']", function(){
        var fileName = this.files[0].name;
	    var fileSize = this.files[0].size;

	    if(fileSize > 50000000){
	    	alert('La imagen del juego no debe superar los 50MB');
	    	this.value = '';
	    	this.files[0].name = '';
	    }else{
	    	// recuperamos la extensión del archivo
	    	var ext = fileName.split('.').pop();
        
	    	// Convertimos en minúscula porque 
	    	// la extensión del archivo puede estar en mayúscula
	    	ext = ext.toLowerCase();
        
	    	// console.log(ext);
	    	switch (ext) {
                case 'jpg':
                case 'jpeg':
                case 'png':
                case 'pdf':
                case 'gif':
                case 'tiff':
                case 'psd':
                case 'bmp': break;
                default:
                    alert('El archivo no tiene la extensión adecuada');
                    this.value = ''; // reset del valor
                    this.files[0].name = '';
            }
	    }
    });
});