const play_video = document.querySelector(".play-video-ferst");
const pause_video = document.querySelector(".pause-video-ferst");

let video;

video = document.querySelector(".video");

play_video.addEventListener('click', function (){
    video.play()
    play_video.style.display = 'none';
    pause_video.style.display = 'block';
    console.log('2')
});


pause_video.addEventListener('click', function (){
    video.pause()
    play_video.style.display = 'block';
    pause_video.style.display = 'none';
    console.log('1')
});



// Jquery

$(document).ready(function(){
    $('.slider-box').slick({
        arrows:true,
        slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    });
});