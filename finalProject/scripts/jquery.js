$(function () {
    // room 이미지에 마우스 오버할 때 플러스 이미지 추가
    function addPlusImage(containerClassName) {
        $(containerClassName).on("mouseover", function () {
            var plusImage = $("<img src='images/png/plus.png' alt='Plus Image'>");

            plusImage.css({
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "50px",
                height: "50px",
                display: "none",
            });

            $(this).append(plusImage);

            plusImage.css("display", "block");
        });

        $(containerClassName).on("mouseleave", function () {
            $("img[alt='Plus Image']", this).remove();
        });
    }

    addPlusImage(".img1");
    addPlusImage(".img2");

    // room 이미지에 마우스 오버할 때 플러스 이미지 추가
    function addPlusImage(containerClassName) {
        $(containerClassName).on("mouseover", function () {
            var plusImage = $("<img src='images/png/plus.png' alt='Plus Image'>");

            plusImage.css({
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "50px",
                height: "50px",
                display: "none",
            });

            $(this).append(plusImage);

            plusImage.css("display", "block");
        });

        $(containerClassName).on("mouseleave", function () {
            $("img[alt='Plus Image']", this).remove();
        });
    }

    addPlusImage(".img1");
    addPlusImage(".img2");

    // 메인 이미지 리스트
    const mainImages = [
        'images/jpg/main_slider_img02.jpg',
        'images/jpg/main_slider_img19.jpg',
        'images/jpg/main_slider_img20.jpg',
        'images/jpg/main_slider_img22.jpg',
        'images/jpg/main_slider_img24.jpg',
        'images/jpg/main_slider_img25.jpg',
        'images/jpg/main_slider_img01.jpg',
        'images/jpg/main_slider_img04.jpg',
        'images/jpg/main_slider_img26.jpg'
    ];

    const bxslide = $('.bxslide');
    let currentInext = 0;

    function showImage(index) {
        const img = $('<img/>', {
            src: mainImages[index],
            class: 'imageList'
        });

        bxslide.empty().append(img);
        currentInext = index;

        const circleItems = $('.bx-circle-item');
        circleItems.css("background", "none");
        circleItems.eq(currentInext).css("background", "#fff");
    }
    showImage(currentInext);

    function changeImage() {
        currentInext = (currentInext + 1) % mainImages.length;
        showImage(currentInext);
    }
    $(".bx-circle-item").on("click", function () {
        const index = $(this).index();
        showImage(index);
    });
    setInterval(changeImage, 8000);

    //checkin checkout
    $(".startDate").datepicker({
        dateFormat: "yy-mm-dd",
        onSelect:function(selectedDate){
            const minDate = new Date(selectedDate);
            minDate.setDate(minDate.getDate()+1);
            $(".endDate").datepicker("option", "minDate", minDate);
        }
    })
    $(".endDate").datepicker({
        dateFormat:"yy-mm-dd",
        onSelect:function(selectedDate){
            const maxDate = new Date(selectedDate);
            maxDate.setDate(maxDate.getDate()-1);
            $(".startDate").datepicker("option", "maxDate", maxDate);
        }
    })
});