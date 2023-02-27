import p, { white } from '../index.js';

const app = document.getElementById('app');

function log(...data) {
    app.innerHTML += `<div>${data.join(' ')}</div>`;    
}

log(
    p.white(
        p.bold('bold'), 
        p.dim('dim'),
        p.italic('italic'),
        p.underline('underline'),  
        p.strikethrough('strikethrough'),  
    ),

    p.black('black'),
    p.red('red'),
    p.green('green'),
    p.yellow('yellow'),
    p.blue('blue'),
    p.magenta('magenta'),
    p.cyan('cyan'),
    p.white('white'),
    p.gray('gray'),

    p.bgBlack(white('bgBlack')),
    p.bgRed('bgRed'),
    p.bgGreen('bgGreen'),
    p.bgYellow('bgYellow'),
    p.bgBlue(white('bgBlue')),
    p.bgMagenta('bgMagenta'),
    p.bgCyan('bgCyan'),
    p.bgWhite('bgWhite'),
    p.bgGray('bgGray'),
);

log(
    p.bgBlack(p.magenta('Hey, ' + p.italic(p.cyan('Pen'), `is ${p.bold(p.green('awesome!!'))}`)))
);
