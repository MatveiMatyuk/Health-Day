const play_video = document.querySelector(".play-video-ferst");
const pause_video = document.querySelector(".pause-video-ferst");

let video;

video = document.querySelector(".video");

pause_video.addEventListener('click', function (){
    video.pause()
    play_video.style.display = 'block';
    pause_video.style.display = 'none';
    console.log('1')
});

play_video.addEventListener('click', function (){
    video.play()
    play_video.style.display = 'none';
    pause_video.style.display = 'block';
    console.log('2')
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


// change language

const langArr = {
    "day-this" : {
        "ru": "День здоровья",
        "en": "Health Day",
    },
    "title-box-what" : {
        "ru": "Что такое день здоровья?",
        "en": "What is Health DAY?",
    },
    "text-day" : {
        "ru": "День здоровья — это мероприятие, направленное на повышение ответственности каждого человека за сохранение своего здоровья, ведение здорового образа жизни, которые способствуют качеству жизнедеятельности и долголетию.",
        "en": "Health Day is an event aimed at increasing the responsibility of each person for maintaining their health, maintaining a healthy lifestyle, which contribute to the quality of life and longevity.",
    },
    "title-box-video" : {
        "ru": "Видео",
        "en": "Video",
    },
    "ferst-text-tiens" : {
        "ru": "Родиной рефлексотерапии считается Китай. В ее основе лежит представление, что организм — это целая, взаимосвязанная система и нарушение функционирования какой-то одной части тут же отзывается в другой. Каналы, расположенные на руках, связаны с внутренними органами в нашем теле. Изменения во внутренних органах отражается на руках. Стимулируя акупунктурные точки на ладони, можно понять о наличие или отсутствии заболевания или каких-либо изменений в органах. Акупунктурный прибор Тиенс-лайф помогает и облегчает нам задачу в определении состояния органов с большой точностью.",
        "en": "China is considered the birthplace of reflexology. It is based on the idea that the body is a single, interconnected system, and a malfunction of one part immediately responds to another. The channels located on the arms are connected to the internal organs of your body. Changes in internal organs are reflected in the hands. By stimulating the acupuncture points on the palm of your hand, you can understand about the presence or absence of a disease or any changes in the organs. The Tiens-life acupuncture device helps and facilitates our task of determining the state of organs with great accuracy.",
    },
    "second-text-tiens" : {
        "ru": "<b>Принцип действия Тиенс-лайф:</b> Благодаря воздействию электромагнитной терапии на акупунктурные точки на ладони, прибор выявляет состояние здоровья органов в теле человека. В зависимости от уровня болевых ощущений можно определить есть ли физиологические отклонения в органах.",
        "en": "<b>The principle of operation of Tiens-life:</b> Due to the effect of electromagnetic therapy on acupuncture points on the palm of the hand, the device detects the state of health of organs in the human body. Depending on the level of pain, it is possible to determine whether there are physiological abnormalities in the organs.",
    },
    "threeth-text-tiens" : {
        "ru": "<b>Преимущества:</b>",
        "en": "<b>Advantages:</b>",
    },
    "lang01" : {
        "ru": "Отличается высоким качеством и простотой использования.",
        "en": "It is characterized by high quality and ease of use.",
    },
    "lang02" : {
        "ru": "Точность прибора выше 90%.",
        "en": "The accuracy of the device is above 90%.",
    },
    "lang03" : {
        "ru": "Обладает режимами тестирования и восстановления зон в организме.",
        "en": "It has modes of testing and restoring zones in the body.",
    },
    "lang04" : {
        "ru": "Безопасен и надежен! Тестирование и восстановление проходит без нарушения кожного покрова.",
        "en": "Safe and reliable! Testing and recovery takes place without disturbing the skin.",
    },
    "fourth-text-tiens" : {
        "ru": "<b>Выгоды:</b>",
        "en": "<b>Benefits:</b>",
    },
    "lang05" : {
        "ru": "Вы экономите свое время посетив всего лишь одного специалиста!",
        "en": "You save your time by visiting just one specialist!",
    },
    "lang06" : {
        "ru": "Процедура тестирования проводится в ПОДАРОК при посещении мероприятия!",
        "en": "The testing procedure is carried out as a GIFT when attending the event!",
    },
    "lang07" : {
        "ru": "Вы узнаете все о своем организме комплексно, в том числе и ранние стадии изменений в организме.",
        "en": "You will learn everything about your body comprehensively, including the early stages of changes in the body.",
    },
    "lang08" : {
        "ru": "Поймете причинно-следственную связь изменений в организме.",
        "en": "You will understand the causal relationship of changes in the body.",
    },
    "lang09" : {
        "ru": "И что самое главное, получите рекомендации по улучшению состояния организма и самочувствия!",
        "en": "And most importantly, get recommendations for improving the state of the body and well-being!",
    },
}

const language = document.querySelector(".en");
const language01 = document.querySelector(".ru");
const allLang = ['en', 'ru'];


language.addEventListener('click', changeURLLanguage);
language01.addEventListener('click', changeURLLanguage01);

function changeURLLanguage(){
    location.href = window.location.pathname + '#' + 'en';
    location.reload();
    // language.style.color = gray;
}

function changeURLLanguage01(){
    location.href = window.location.pathname + '#'+ 'ru';
    location.reload();

}

function changeLanguage(){
    let hash = window.location.hash
    hash = hash.substr(1);
    console.log(hash)
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    language.value = hash;
    language01.value = hash;
    document.querySelector('.day-this').innerHTML = langArr['day-this'][hash];
    document.querySelector('.title-box-what').innerHTML = langArr['title-box-what'][hash];
    document.querySelector('.text-day').innerHTML = langArr['text-day'][hash];
    document.querySelector('.title-box-video').innerHTML = langArr['title-box-video'][hash];
    document.querySelector('.ferst-text-tiens').innerHTML = langArr['ferst-text-tiens'][hash];
    document.querySelector('.second-text-tiens').innerHTML = langArr['second-text-tiens'][hash];
    document.querySelector('.threeth-text-tiens').innerHTML = langArr['threeth-text-tiens'][hash];
    document.querySelector('.lang01').innerHTML = langArr['lang01'][hash];
    document.querySelector('.lang02').innerHTML = langArr['lang02'][hash];
    document.querySelector('.lang03').innerHTML = langArr['lang03'][hash];
    document.querySelector('.lang04').innerHTML = langArr['lang04'][hash];
    document.querySelector('.fourth-text-tiens').innerHTML = langArr['fourth-text-tiens'][hash];
    document.querySelector('.lang05').innerHTML = langArr['lang05'][hash];
    document.querySelector('.lang06').innerHTML = langArr['lang06'][hash];
    document.querySelector('.lang07').innerHTML = langArr['lang07'][hash];
    document.querySelector('.lang08').innerHTML = langArr['lang08'][hash];
    document.querySelector('.lang09').innerHTML = langArr['lang09'][hash];
}

changeLanguage();


// scroll video

const myvid = $('.video-visitka')[0];
$(window).scroll(function(){
  let scroll = $(this).scrollTop();
  scroll > 2112 ? myvid.pause() : myvid.play()
})
// $(window).scroll(function(){
//     let scroll01 = $(this).scrollBottom();
//     scroll01 > 1000 ? myvid.pause() : myvid.play()
//   })
// $(window).scroll(function(){
//   let scroll01 = $(this).scrollDown();
//   scroll01 < 1500 ? myvid.pause() : myvid.play()
// })