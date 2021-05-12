const more_BTN = document.getElementsByClassName('more'),
    animeJS_box = document.querySelector('.animeJS_box'),
    header = document.querySelector('.header'),
    footer = document.querySelector('.footer'),
    threeD_Box = document.querySelector('.threeD_Box'),
    screenFront = document.getElementsByClassName('screenFront'),
    screenMid = document.getElementsByClassName('screenMid'),
    screenBack = document.getElementsByClassName('screenBack');


// more 버튼
    more_BTN[0].addEventListener( 'click', () => {
        animeJS_box.classList.add('visible');
    })
    more_BTN[1].addEventListener( 'click', () => {
        threeD_Box.classList.toggle('flex');
    })

// 폰 화면 클릭시 회전
    screenFront[0].addEventListener('click', () => {
        for( z=0; z<screenMid.length; z++){
            screenMid[0].classList.toggle('rotate');
        }    
    })
    screenBack[0].addEventListener('click', () => {
        for( z=0; z<screenMid.length; z++){
            screenMid[0].classList.toggle('rotate');
        }    
    })
    screenFront[1].addEventListener('click', () => {
        for( z=0; z<screenMid.length; z++){
            screenMid[1].classList.toggle('rotate');
        }    
    })
    screenBack[1].addEventListener('click', () => {
        for( z=0; z<screenMid.length; z++){
            screenMid[1].classList.toggle('rotate');
        }    
    })
    screenFront[2].addEventListener('click', () => {
        for( z=0; z<screenMid.length; z++){
            screenMid[2].classList.toggle('rotate');
        }    
    })
    screenBack[2].addEventListener('click', () => {
        for( z=0; z<screenMid.length; z++){
            screenMid[2].classList.toggle('rotate');
        }    
    })
