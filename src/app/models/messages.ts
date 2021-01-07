export interface MessageModel {
    message?: string;
    id?: number;
    ok?: number;
    cancel?: number;
    final?: boolean;
    blink?: boolean;
}

export const messages: MessageModel[] = [
    {
        id: 0,
        message: 'Pame, estás a full el sábado ?',
        cancel: 4,
        ok: 3,
    },
    {
        id: 1,
        message: 'Quieres salir conmigo ?',
        ok: 2,
        blink: true,
    },
    {
        id: 2,
        message: ':3, Te espero en el Caracol a las 10:00 am ',
        final: true,
    },
    {
        id: 3,
        message: 'Puedo robarte un poco de tu tiempo? ',
        cancel: 5,
        ok: 4,
    },
    {
        id: 4,
        message: 'Quieres pasar un rato bien chido XD? ',
        ok: 1,
        cancel: 6,
    },
    {
        id: 5,
        message: 'Espero que tengas un bonito fin de semana.',
        final: true
    },
    {
        id: 6,
        message: 'Tu te lo pierdes :( ',
        final: true,
    },
];
