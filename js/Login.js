$(document).ready(function(){
    $("#LoginUserForm").submit(function(e){
        e.preventDefault();

        let MensajeMostrar = "";
        let IsEntrar = false;
        var ContMayusUserName = 0;
        var ContNumerosUserName = 0;
        var ContGuionUserName = 0;
        var ContMayusUserPass = 0;
        var ContNumerosUserPass = 0;

        var UserType = $("#SelectUserType").val();
        var UserName = $("#UserName").val();
        var UserPass = $("#UserPass").val();

        for (var i = 0; i < UserName.length; i++){
            let Letra = UserName.charAt(i);
            if(esMayuscula(Letra) && !esNumero(Letra) && !esGuion(Letra)){
                ContMayusUserName++;
            }
            if(esNumero(Letra)){
                ContNumerosUserName++;
            }
            if(esGuion(Letra)){
                ContGuionUserName++;
            }
        }
        
        for (var i = 0; i < UserPass.length; i++){
            let Letra = UserPass.charAt(i);
            if (esMayuscula(Letra) && !esNumero(Letra) && !esGuion(Letra))
                ContMayusUserPass++;
            if(esNumero(Letra)){
                ContNumerosUserPass++;
            }
        }
        
                
        if (UserType != 1 && UserType != 2  && UserType != 3 ){
            MensajeMostrar += "Debe seleccionar su tipo de cuenta para poder ingresar a la página<br>";
            IsEntrar = true;
        }

        if (ContMayusUserName == 0 || ContNumerosUserName == 0 || ContGuionUserName == 0 || UserName.length < 6 || UserName.length > 16){
            MensajeMostrar += "Nombre de usuario no válido.<br>";
            IsEntrar = true;
        }

        if(ContMayusUserPass == 0 || ContNumerosUserPass == 0 || UserPass.length < 8 || UserPass.length > 16){
            MensajeMostrar += "Contraseña no válida<br>";
            IsEntrar = true;
        }

        if(IsEntrar){
            $("#Mensaje").html(MensajeMostrar);
        }

        else{
            $("#Mensaje").html();
            
            if (UserType == 1) {
                $(location).attr("href","indexLoggedAsNormal.html");
            }
            if (UserType == 2) {
                $(location).attr("href","indexLoggedAsCreator.html");
            }
            if (UserType == 3) {
                $(location).attr("href","indexLoggedAsAdmin.html");
            }
        }
    });

    function esMayuscula(letra){
        return letra == letra.toUpperCase();
    }

    function esNumero(letra){
        var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var IsNumero = false;

        if (numArray.includes(letra)){
            IsNumero = true;
        }
        return IsNumero;
    }

    function esGuion(letra){
        var guionArray = ["-","_"];
        var IsGuion = false;

        if (guionArray.includes(letra)){
            IsGuion = true;
        }
        return IsGuion;
    }

    // VALIDA INPUT A INPUT QUE EL NUMERO SEA:
    // alfa numérico, con guion bajo y guion alto
    // si no pertenece a ninguno, lo reemplaza con un valor inexistente


    $("#UserName").on("input",function(e){
        this.value = this.value.replace(/[^0-9a-zA-ZáéíñóúüÁÉÍÑÓÚÜ_-]/g, "");
        $("#Mensaje").html("Recuerde que su nombre no puede tener valores aparte de alfanuméricos, guion bajo y guion alto.<br>");
    });
});