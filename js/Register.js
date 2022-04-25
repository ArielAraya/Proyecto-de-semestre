$(document).ready(function(){
    $("#CreateUserForm").submit(function(e){
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
        var UserPassRep = $("#UserPassRep").val();

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
        
                
        if (UserType != 1 && UserType != 2){
            MensajeMostrar += "Debe seleccionar su tipo de cuenta<br>";
            IsEntrar = true;
        }

        if (ContMayusUserName == 0){
            MensajeMostrar += "Nombre de usuario debe tener al menos 1 mayúscula<br>";
            IsEntrar = true;
        }
        if (ContNumerosUserName == 0){
            MensajeMostrar += "Nombre de usuario debe tener al menos 1 número<br>";
            IsEntrar = true;
        }
        if (ContGuionUserName == 0){
            MensajeMostrar += "Nombre de usuario debe tener al menos 1 guión (-) o guión bajo (_)<br>";
            IsEntrar = true;
        }

        if(UserName.length < 6 || UserName.length > 16){
            MensajeMostrar += "Nombre de usuario debe tener entre 6 y 16 dígitos<br>";
            IsEntrar = true;
        }

        if(ContMayusUserPass == 0){
            MensajeMostrar += "Contraseña debe tener al menos una mayúscula<br>";
            IsEntrar = true;
        }

        if(ContNumerosUserPass == 0){
            MensajeMostrar += "Contraseña debe tener al menos un número<br>";
            IsEntrar = true;
        }

        if(UserPass.length < 8 || UserPass.length > 16){
            MensajeMostrar += "Contraseña debe tener entre 8 y 16 digitos<br>"
            IsEntrar = true;
        }

        if(UserPassRep != UserPass){
            alert("Las contraseñas deben coincidir");
        }

        if(IsEntrar){
            $("#Mensaje").html(MensajeMostrar);
        }

        else{
            $("#Mensaje").html();
            $(location).attr("href","Created.html");
        }
    });
    
    /*$("#UserName").on("input",function(e){
        if(!/^(?=[a-zA-Z0-9._]{8,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/i.test(this.value)){
            console.log("Error");
            this.value = this.value.replace(/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/ig,"");
        }
        else{
            console.log("correcto");
        }
    });*/
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

    // CAMBIA DE COLOR SI NO COINCIDEN LAS CONTRASEÑAS

    $("#UserPassRep").on("input",function(e){
        if(this.value != $("#UserPass").val()){
            $("#UserPassRep").css({"backgroundColor" : "#FFAC33"});
        }
        else{
            $("#UserPassRep").css({"backgroundColor" : "#FFFFFF"});
        }
    });

    // VALIDA INPUT A INPUT QUE EL NUMERO SEA:
    // alfa numérico, con guion bajo y guion alto
    // si no pertenece a ninguno, lo reemplaza con un valor inexistente


    $("#UserName").on("input",function(e){
        this.value = this.value.replace(/[^0-9a-zA-ZáéíñóúüÁÉÍÑÓÚÜ_-]/g, "");
    });
});