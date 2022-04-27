$(document).ready(function(){
    $("#ReviewUser").submit(function(e){
        e.preventDefault();

        let Mensaje = "";
        let IsEntrar = false;

        var UserType = $("#UserType").val();
        var NombreReview = $("#ReviewName").val();
        var Review = $("#GameReview").val();

        if (NombreReview.length < 8 || NombreReview.length > 50){
            IsEntrar = true;
            Mensaje += "El nombre de su review debe tener 8 o más caracteres y menos de 50 caracteres<br>";
        }
        if (Review.length < 200 || Review.length > 2000){
            IsEntrar = true;
            Mensaje += "La review debe tener por lo menos 200 caracteres y menos de 2000 caracteres<br>";
        }

        if(IsEntrar){
            $("#Mensaje").html(Mensaje);
        }
        else{
            $("#Mensaje").html();
            if (UserType == 1) {
                $(location).attr("href","UploadedReviewNormal.html");
            }
            if (UserType == 2) {
                $(location).attr("href","UploadedReviewCreator.html");
            }
            if (UserType == 3) {
                $(location).attr("href","UploadedReviewAdmin.html");
            }
        }
    });
});