export interface FormatResult {
    bg: string | never,
    fg: string | never,
    dim: boolean,
    bold: boolean,
    italic: boolean,
    underline: boolean,
    strikethrough: boolean,
    value: string,
    toString(): string,
    toJSON(): string,
}

export type Format = (...string: string[]) => FormatResult;

export const bold: Format;
export const italic: Format;
export const underline: Format;
export const strikethrough: Format;
export const dim: Format;

export const black: Format;
export const red: Format;
export const green: Format;
export const yellow: Format;
export const blue: Format;
export const magenta: Format;
export const cyan: Format;
export const white: Format;
export const gray: Format;

export const bgBlack: Format;
export const bgRed: Format;
export const bgGreen: Format;
export const bgYellow: Format;
export const bgBlue: Format;
export const bgMagenta: Format;
export const bgCyan: Format;
export const bgWhite: Format;
export const bgGray: Format;
