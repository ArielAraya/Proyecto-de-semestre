$(document).ready(function(){
    $.get("https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON", function (data){
        $.each(data,function(i,item){
            $("#Juegos").append(
                "<div class='col-12 textAlignCenter backgroundColorListaGame'>" +
                    "<h3 class='titleListaGames h3'>Titulo De Juego: </h3><p class='listaGames'>" + item.title +
                "</p><h3 class='titleListaGames h3'>URL de Steam: </h1><p class='listaGames'><a href='" + item.steamUrl + "'>" + item.steamUrl + "</a>" +
                "</p><h3 class='titleListaGames h3'>Editor: </h1><p class='listaGames'>" + item.publisher +
                "</p><h3 class='titleListaGames h3'>Género(s): </h1><p class='listaGames'>" + item.genres +
                "</p></div><div class='padding10'></div>"
            );
        });
    });
});