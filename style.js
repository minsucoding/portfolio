const more_BTN = document.getElementsByClassName('more'),
    animeJS_box = document.querySelector('.animeJS_box'),
    header = document.querySelector('.header'),
    footer = document.querySelector('.footer'),
    threeD_Box = document.querySelector('.threeD_Box');



    more_BTN[0].addEventListener( 'click', () => {
        animeJS_box.classList.add('visible');
    })
    more_BTN[1].addEventListener( 'click', () => {
        threeD_Box.classList.toggle('flex');
    })