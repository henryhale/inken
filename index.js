const format = function format(key, value) {
    return function () {
        const args = arguments;
        const argsLen = arguments.length;
        let data = arguments[0];

        if (argsLen === 0) {
            return '';
        }

        if (argsLen > 1) {
            for (let i = 1; i < argsLen; i++) {
                data += ' ' + args[i];     
            }
        }

        if (typeof data === 'object' && data !== null) {
            data[key] = value;
            return data;
        }
        
        const config = {
            toString() {
                const wrap = (this.bg || this.fg || this.dim); 
                return (wrap ? '<span style="' : '') +
                    (this.bg ? 'background-color:' + this.bg + ';' : '') +
                    (this.fg ? 'color:' + this.fg + ';' : '') + 
                    (this.dim ? 'opacity: 0.5;' : '') +
                    (wrap ? '">' : '') +
                    (this.bold ? '<b>' : '') +
                    (this.underline ? '<u>' : '') +
                    (this.strikethrough ? '<s>' : '') +
                    (this.italic ? '<i>' : '') +
                    (this.value || '') +
                    (this.italic ? '</i>' : '') +
                    (this.strikethrough ? '</s>' : '') +
                    (this.underline ? '</u>' : '') +
                    (this.bold ? '</b>' : '') +
                    (wrap ? '</span>' : '');
            },
            toJSON() {
                return this.toString();
            }
        };

        config[key] = value;
        config.value = data;

        return config;
    }
}

const colors = {
    black:  '#000000',
    red:    '#FA5E5E',
    green:  '#50FA7B',
    yellow: '#FEF08A',
    blue:   '#60A5FA',
    magenta: '#FF79C6',
    cyan:   '#67E8F9',
    white:  '#FFFFFF',
    gray:   '#71717A',
};

const pen = {};

pen.bold = format('bold', true);
pen.italic = format('italic', true);
pen.underline = format('underline', true);
pen.strikethrough = format('strikethrough', true);
pen.dim = format('dim', true);

for (const c in colors) {
    if (Object.hasOwnProperty.call(colors, c)) {
        pen[c] = format('fg', colors[c]);
        pen['bg'+c[0].toUpperCase()+c.slice(1)] = format('bg', colors[c]);
    }
}

export const {
    bold, italic, underline, strikethrough, dim,
    black, red, green, yellow, blue, magenta, cyan, white, gray,
    bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray,
} = pen;

export default pen;
