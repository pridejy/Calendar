document.addEventListener('DOMContentLoaded', () => {
    // 비디오가 종료될 때 다른 요소들을 표시하는 코드
    const videoContainer = document.getElementById('video');
    const header = document.querySelector('header'); // 수정
    const main = document.getElementById('main'); // 수정
    const container = document.getElementById('container');
    const hr = document.getElementById('hr');
    const videolist = document.getElementById('movie-relation-video-list');

    videoContainer.addEventListener('ended', () => {
        videoContainer.style.display = 'none';
        main.style.display = 'block'; // 수정
        header.style.display = 'block';
        container.style.display = 'block';
        hr.style.display = 'block';
        videolist.style.display = 'block';
    });



    //더보기 버튼
    const detailsBtn = document.getElementById('movie-details-Button');
    const hiddenDetails = document.getElementById('movie-hidden-details');


    //더보기 버튼
    detailsBtn.addEventListener('click', showDetails);

    function showDetails() {
        if (hiddenDetails.style.display === 'none' || hiddenDetails.style.display === '') {
            hiddenDetails.style.display = 'block';
            detailsBtn.innerText = '접기';
        } else {
            hiddenDetails.style.display = 'none';
            detailsBtn.innerText = '더보기';
        }
    }
    //영화 포토
    const images = document.querySelectorAll('#movie-photo-slide img'); // 이미지 요소들을 선택
    const previousButton = document.querySelector('#prev-images');
    const nextButton = document.querySelector('#next-images');

    const numImagesToShow = 4; // 한 번에 표시할 이미지 수
    let currentImageIndex = 0; // 현재 표시 중인 이미지 인덱스

    function updateImageDisplay() {
        for (let i = 0; i < images.length; i++) {
            if (i >= currentImageIndex && i < currentImageIndex + numImagesToShow) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }
        }
    }

    previousButton.addEventListener('click', showPreviousImages);
    nextButton.addEventListener('click', showNextImage);

    function showPreviousImages() {
        if (currentImageIndex > 0) {
            currentImageIndex -= numImagesToShow;
            updateImageDisplay();
        }
    }

    function showNextImage() {
        if (currentImageIndex + numImagesToShow < images.length) {
            currentImageIndex += numImagesToShow;
            updateImageDisplay();
        }
    }

    // 초기에 처음 4개 이미지만 표시
    updateImageDisplay();
});