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
        message: 'Pameeee, puedo hacerte una question ?',
        cancel: 0,
        ok: 1,
        blink: true
    },
    {
        id: 1,
        message: 'Quieres ser mi novia ?',
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
