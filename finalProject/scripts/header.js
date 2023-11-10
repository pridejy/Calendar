$(function(){
    //menu부분
    $("#gnbMenu>ul> li > a").each(function(e){
        $(this).on("focus mouseover", function(){
            $("#gnbMenu .subMenu").slideDown(300);
            $("#header").css({'height':'335px', 'background':'#454545'});
        });
    });
    $("#gnbMenu").on("mouseleave", function(){
        $(".subMenu").hide();
        $(".subMenu").css({'display':'none'});
        $("#header").css({'height':'75px', 'background':''});
    });
    //시간마다 이미지바뀌기
    function timeImage(){
        const today = new Date();
        const hours = today.getHours();

        const timeImages= document.querySelector(".timeImages");

        let newImg = document.createElement("img");
        if (hours < 12) {
            newImg.src = "../images/png/morning.png";
        } else if (hours === 12) {
            newImg.src = "../images/png/daytime.png";
        } else {
            newImg.src = "../images/png/night.png";
        }
        timeImages.appendChild(newImg);
        newImg.style.width="45px";
        newImg.style.height="40px";
    }
    timeImage();

    //언어 
    $('.select_len_show').on("mouseenter", function(){
        $('.select_len').css("display", "flex");
    })
    $('.select_len').on("mouseleave", function(){
        $('.select_len').css("display", "none");
    })
});