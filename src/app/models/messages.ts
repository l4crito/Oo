export interface MessageModel {
    message?: string;
    id?: number;
    ok?: number;
    maybe?: number;
    cancel?: number;
    final?: boolean;
    blink?: boolean;
}

export const messages: MessageModel[] = [
    {
        id: 0,
        message: 'Señorita pildorita, puedo hacerte una question ?',
        cancel: 0,
        ok: 1,
        blink: true
    },
    {
        id: 1,
        message: 'Quieres ser mi GIRLFRIEND?????? notese la version 2.0 de la propuesta, mucho mas elaborada que la anterior',
        ok: 2,
        cancel: 0,
        blink: true,
        maybe: 1,
    },
    {
        id: 2,
        message: 'la verdad es que no soy muy romantico pero mis sentimientos son sinceros, y si le gustan las cosas a las malas pues así sera XD, mas lo que me hace sufrir para responder a una preguntaa!!!!! XD, hope this time i was able to fit your standards,i promise you wont regret this. ',
        ok: 2,
        blink: true,
        final: true,
    },
];


export const warns: string[] = [
    'estas jugando conmigo??',
    'hieres mis sentimientos :.c',
    'omg pildorita favar!!',
    'paraaa!! :C',
    'ya srita  yaaaa',
    'oe oe oe oe o aceptas o a escondidas te doy cosas con leche!! :3',
    'ya dale SI!! ',
    'esto me has hecho :c !! ',
    'SI!! es el que tiene color morado ',
    'Por cierto mi color favorito es el morado!, yo se que no viene al caso pero forma parte de esta propuesta XD ',
    'por favor ',
    'Dorito pls pls ',
    'Anali puedes darle al boton que es',
    'Tal vez en español, quieres ser mi novia?? ',
    'ruso??, ты хочешь быть моей девушкой  XD XD',
    'Al morado plis ',
    'Ese no es ',
    'Nop te volviste a equivocar ',
    'Pls  dale al que es ',
];
