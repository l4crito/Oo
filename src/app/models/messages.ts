export interface MessageModel {
    message?: string;
    id?: number;
    ok?: number;
    cancel?: number;
    final?: boolean;
    blink?: boolean;
    maybe?: boolean;
}

export const messages: MessageModel[] = [
    {
        id: 0,
        message: 'Amoyoo, puedo hacerte una question ?',
        cancel: 0,
        ok: 1,
        blink: true
    },
    {
        id: 1,
        message: 'Quieres ser mi novia , pero en verdad?',
        ok: 2,
        cancel: 0,
        blink: true,
        maybe: true,
    },
    {
        id: 2,
        message: ':o em em no creí llegar tan lejos , sera muy bonito  :3 !!',
        ok: 2,
        blink: true,
        final: true,
    },
];


export const warns: string[] = [
    'estas jugando conmigo??',
    'hieres mis sentimientos :.c',
    'omg par favar!!',
    'paraaa!! :C',
    'ya we yaaaa',
    'oe oe oe csm yaaaa',
    'Si le das que si prometo dejarme crecer el rabo XD',
    'dale a SI y te doy una pizza :3 no como esa cosa que comimos',
    'ya dale SI!! ',
    'esto me has hecho :c !! ',
    'SI!! es el que tiene color morado ',
    'por favor ',
    'Lizz pls pls ',
    'Lix Rivera puedes darle al boton que es',
    'Tal vez en inglés, wanna be my girlfriend?? ',
    'Al morado plis ',
    'Ese no es ',
    'Nop te volviste a equivocar ',
    'Pls  dale al que es ',
];
