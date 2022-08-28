import '/src/scss/style.scss';
import Iconify from '@iconify/iconify';
import Konami from 'konami';
import anime from 'animejs';

document.querySelector<HTMLElement>('#app')!.innerHTML = `
  <div class="content content--intro">
    <div class="content__inner">
      <h1>Hayden Lin</h1>
      <p>Front-end developer</p>
      <span class="hint" data-touch-content="Swipe the konami code">Enter the konami code</span>
      <span class="hint--second" data-touch-content="up, up, down, down, left, right, left, right, tap, tap, tap">up, up, down, down, left, right, left, right, b ,a</span>
    </div>
    <div class="shape-wrap">
      <svg class="shape" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800">
        <path d="M -30.45,-43.86 -30.45,0 53.8,0 53.8,0 179.5,0 179.5,0 193.3,0 193.3,0 253.1,0 253.1,0 276.1,0 276.1,0 320.6,0 320.6,0 406.5,0 406.5,0 435.6,0 435.6,0 477,0 477,0 527.6,0 527.6,0 553.7,0 553.7,0 592,0 592,0 742.3,0 742.3,0 762.2,0 762.2,0 776,0 776,0 791.3,0 791.3,0 852.7,0 852.7,0 871.1,0 871.1,0 878.7,0 878.7,0 891,0 891,0 923.2,0 923.2,0 940.1,0 940.1,0 976.9,0 976.9,0 1031,0 1031,0 1041,0 1041,0 1176,0 1176,0 1192,0 1192,0 1210,0 1210,0 1225,0 1225,0 1236,0 1236,0 1248,0 1248,0 1273,0 1273,0 1291,0 1291,0 1316,0 1316,0 1337,0 1337,0 1356,0 1356,0 1414,0 1414,0 1432,0 1432,0 1486,0 1486,-43.86 Z" pathdata:id="M -30.45,-57.86 -30.45,442.6 53.8,443.8 53.8,396.3 179.5,396.3 179.5,654.7 193.3,654.7 193.3,589.1 253.1,589.1 253.1,561.6 276.1,561.6 276.1,531.2 320.6,531.2 320.6,238.6 406.5,238.6 406.5,213.9 435.6,213.9 435.6,246.2 477,246.2 477,289.9 527.6,289.9 527.6,263.3 553.7,263.3 553.7,280.4 592,280.4 592,189.2 742.3,189.2 742.3,259.5 762.2,259.5 762.2,103.7 776,103.7 776,77.11 791.3,77.11 791.3,18.21 852.7,18.21 852.7,86.61 871.1,86.61 871.1,231 878.7,240.5 878.7,320.3 891,320.3 891,434.3 923.2,434.3 923.2,145.5 940.1,145.5 940.1,117 976.9,117 976.9,139.8 1031,139.8 1031,284.2 1041,284.2 1041,242.4 1176,242.4 1176,282.3 1192,282.3 1192,641.4 1210,641.4 1210,692.7 1225,692.7 1225,599.6 1236,599.6 1236,527.4 1248,527.4 1248,500.8 1273,500.8 1273,523.6 1291,523.6 1291,652.8 1316,652.8 1316,533.1 1337,533.1 1337,502.7 1356,502.7 1356,523.6 1414,523.6 1414,491.3 1432,491.3 1432,523.6 1486,523.6 1486,-57.86 Z"></path>
      </svg>
    </div>
  </div>

  <div class="content content--fixed">
    <div class="content__inner">
      <p>My name is Hayden Lin, and I'm a Front-end developer living in 's-Hertogenbosch, the Netherlands.
        I do my work on a MacBook Pro with a 4k monitor using tools like PHPStorm, Photoshop, Zeplin.io(Sketch &
        XD), Bitbucket and others. If you need someone to turn your design into code, I'm your man.
      </p>
      <p>I can do things with HTML5, Javascript (Vue.js, TypeScript, ES6), PHP, Sass, Less, Webpack, Vite, WordPress
        (only the decent way with <a href="https://roots.io/bedrock/" target="_blank" rel="nofollow">Roots
          Bedrock</a> and <a href="https://upstatement.com/timber/" target="_blank" rel="nofollow">Timber</a>),
        GIT and more... (I forgot)</p>
      <h2>Some of my work</h2>
      <ul>
        <li><a href="https://project-fast.nl/">Project FAST</a> (my own front-end framework)</li>
        <li><a href="https://bigmachinery.nl/" target="_blank" rel="nofollow">BIG Machinery</a></li>
        <li><a href="https://polsmotoren.nl/" target="_blank" rel="nofollow">Pols Motoren</a></li>
        <li><a href="https://www.jumborapportage.com/" target="_blank" rel="nofollow">Jumbo Jaarverslag 2021</a></li>
        <li><a href="https://missieverslag.ah.nl" target="_blank" rel="nofollow">AH Missieverslag 2021</a>/</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <span class="title">Application developer</span> at Koning Willem I College, <span class="years">2007 - 2010</span>
        </li>
        <li>
          <span class="title">B Informatica</span> at Hogeschool van Arnhem en Nijmegen, <span class="years">2011 - 2012</span>
          <small>dropped out :(</small>
        </li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>
          <span class="title">Front-end developer</span> at divtag, <span class="years">2010 - now</span>
        </li>
        <li>
          <span class="title">Front-end developer (worked on secondment)</span> at F19 Digital Reporting,
          <span class="years">2017 - now</span>
        </li>
      </ul>
      <p><small>(PS, this website is running on an Odroid H2 single-board computer from home. Plz don't DoS
        me...)</small></p>
      <footer class="contact">
        <a href="mailto:hi@haydenlin.nl" class="contact__btn">Contact me!</a>
        <div>
          <a href="https://github.com/OverflowHayden" class="contact__icon" target="_blank" rel="nofollow"><span class="iconify" data-icon="fa-brands:github"></span></a>
          <a href="https://www.linkedin.com/in/hayden-lin-7207a6a4/" class="contact__icon" target="_blank" rel="nofollow"><span class="iconify" data-icon="fa-brands:linkedin"></span></a>
        </div>
      </footer>
    </div>
  </div>
`;

let _nyan: number = 0;
let __nyan: any = [[
    '+      o     +              o      ',
    '    +             o     +       +  ',
    'o          +                       ',
    '    o  +           +        +      ',
    '+        o     o       +        o  ',
    '-_-_-_-_-_-_-_,------,      o      ',
    '_-_-_-_-_-_-_-|   /\\_/\\            ',
    '-_-_-_-_-_-_-~|__( ^ .^)  +     +  ',
    '_-_-_-_-_-_-_-""  ""               ',
    '+      o         o   +       o     ',
    '    +         +                    ',
    'o        o         o      o     +  ',
    '    o           +                  ',
    '+      +     o        o      +     '],
    [
        '+      o     +              +      ',
        '    o             o     o       +  ',
        'o          +                       ',
        '    +  o           +        o      ',
        'o        o     o       +        o  ',
        '_-_-_-_-_-_-_-,------,      +      ',
        '-_-_-_-_-_-_-_|   /\\_/\\            ',
        '_-_-_-_-_-_-_-|__( ^ .^)  o     +  ',
        '-_-_-_-_-_-_-_ ""  ""              ',
        '+      +         o   +       o     ',
        '    o         +                    ',
        '+        +         +      +     o  ',
        '    +           o                  ',
        '+      o     o        o      +     '
    ]];

function nyan(): void {
    console.clear();
    console.log(__nyan[_nyan].join('\n'));
    if (_nyan == 0) {
        _nyan = 1;
    } else {
        _nyan = 0;
    }
}

window.setInterval(nyan, 300);

{
    const DOM: any = {};
    DOM.intro = document.querySelector<HTMLDivElement>('.content--intro');
    DOM.shape = DOM.intro.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');

    new Konami(() => {
        DOM.canvas = document.querySelector<HTMLCanvasElement>('canvas');

        anime({
            targets: DOM.canvas,
            opacity: 0
        });

        anime({
            targets: DOM.intro,
            translateY: {
                value: '-200vh',
                delay: 500,
                duration: 2000,
                easing: 'easeInOutQuad'
            }
        });

        anime({
            targets: DOM.path,
            delay: 700,
            duration: 1200,
            easing: 'linear',
            d: DOM.path.getAttribute('pathdata:id')
        });
    });
}

// new Shift('.content--intro .content__inner');