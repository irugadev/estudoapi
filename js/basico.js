// Executar quando o documento HTML estiver carregado
$(document).ready(function(){

    // O codigo abaixo, equivale ao "addEventListner"
    $("#btnIncluir").click(function(){
        const nome = $("#nome").val()   // Busca o texto digitado
        if (nome){
            $("#lista").append(`<li>${nome} <button class='remover'>X</button></li>`) // Append - para inclusao de informaçao
            $("#nome").val("").focus()  // Codigo para limpeza de texto e reset do cursor
        }
    })

    // Remover item da lista
    $("#lista").on("click", ".remover", function(){ // delegaçao de evento
        $(this).parent().remove()   // THIS - representa o botao / PARENT - é a classe pai, nesse caso a Lista / REMOVE é a açao que ocorre
        // this = button
        // .parent = <li>
        // .remove = Açao executada (remover)
    })
})