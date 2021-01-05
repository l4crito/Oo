export interface MessageModel {
    message: string;
    id: number;
    ok: number;
    cancel: number;
    final: boolean;
    blink?: boolean;
}

export const messages: MessageModel[] = [
    {
        id: 0,
        message: 'Pame, estás a full mañana ?',
        cancel: 1,
        ok: 1,
        final: false,
    },
    {
        id: 1,
        message: 'Quieres salir conmigo ?',
        cancel: 0,
        ok: 2,
        final: false,
        blink: true,
    },
    {
        id: 2,
        message: 'Te espero en el Caracol a las 10:00 am. ',
        cancel: 0,
        ok: 0,
        final: true,
    },
];
