const mainWrap = document.querySelector('.mainWrap'),
    pageBox = document.getElementsByClassName('pageBox'),
    leftBTN = document.querySelector('.left'),
    rightBTN = document.querySelector('.right');

let currentIndex = 0;

    function slide (ev){
        mainWrap.style.left = ev * 100 + 'vw';
        currentIndex = ev;
        button ();
    }

    slide(0);
    
    leftBTN.addEventListener( 'click', () => {
        slide ( currentIndex + 1 )
    })
    rightBTN.addEventListener( 'click', () => {
        slide ( currentIndex - 1 )
    })

    function button (){
        if ( currentIndex == 0 ){
            leftBTN.classList.add('visible');
        } else {
            leftBTN.classList.remove('visible');
        }
        if ( -currentIndex == pageBox.length-1 ){
            rightBTN.classList.add('visible');
        } else {
            rightBTN.classList.remove('visible');
        }
    }


