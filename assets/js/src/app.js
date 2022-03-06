import Iconify from '@iconify/iconify';
import Konami from 'konami';
import anime from 'animejs';
import Shift from './shift';

let _nyan = 0;
let __nyan = [[
    "+      o     +              o      ",
    "    +             o     +       +  ",
    "o          +                       ",
    "    o  +           +        +      ",
    "+        o     o       +        o  ",
    "-_-_-_-_-_-_-_,------,      o      ",
    "_-_-_-_-_-_-_-|   /\\_/\\            ",
    "-_-_-_-_-_-_-~|__( ^ .^)  +     +  ",
    "_-_-_-_-_-_-_-\"\"  \"\"               ",
    "+      o         o   +       o     ",
    "    +         +                    ",
    "o        o         o      o     +  ",
    "    o           +                  ",
    "+      +     o        o      +     "],
    [
        "+      o     +              +      ",
        "    o             o     o       +  ",
        "o          +                       ",
        "    +  o           +        o      ",
        "o        o     o       +        o  ",
        "_-_-_-_-_-_-_-,------,      +      ",
        "-_-_-_-_-_-_-_|   /\\_/\\            ",
        "_-_-_-_-_-_-_-|__( ^ .^)  o     +  ",
        "-_-_-_-_-_-_-_ \"\"  \"\"              ",
        "+      +         o   +       o     ",
        "    o         +                    ",
        "+        +         +      +     o  ",
        "    +           o                  ",
        "+      o     o        o      +     "
    ]]

function nyan() {
    console.clear();
    console.log(__nyan[_nyan].join("\n"));
    if (_nyan == 0) {
        _nyan = 1;
    } else {
        _nyan = 0;
    }
}

//window.setInterval(nyan, 300);

{
    const DOM = {};
    DOM.intro = document.querySelector('.content--intro');
    DOM.shape = DOM.intro.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');

    new Konami(() => {
        anime({
            targets: DOM.intro,
            translateY: {
                value: '-200vh',
                delay: 100,
                duration: 2000,
                easing: 'easeInOutQuad'
            }
        });

        anime({
            targets: DOM.path,
            duration: 1200,
            easing: 'linear',
            d: DOM.path.getAttribute('pathdata:id')
        });
    });
}

// new Shift('.content--intro .content__inner');