
$(document).ready(function(){

    $("#btnMostrar").click(function(){
        $("#box").show()
    })
    $("#btnEsconder").click(function(){
        $("#box").hide()
    })
    $("#btnAlternar").click(function(){
        $("#box").toggle()
    })
    $("#btnFade").click(function(){
        $("#box").fadeToggle(1000)
    })
    $("#btnSlide").click(function(){
        $("#box").slideToggle(800)
    })

    $("#btnAnimar").click(function(){
        $("#box").animate({
            width: "300px",
            height: "300px",
            opacity: 0.5,
            borderRadius: "50%"
        }, 3000).delay(800).animate({
            width: "150px",
            height: "150px",
            opacity: 1,
            borderRadius: "10%"
        }, 3000)
    })
})