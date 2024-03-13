import { atom } from 'recoil';

type User = {
    username: string;
    points: number;
}

type Game = {
    players: {
        userId: string;
        point: number;
        multiplier: number;
    }[],
    chatId: string,
    winNumber: number;
}

const userAtom = atom<User>({
    key: 'username',
    default: {
        username: "",
        points: 0
    },
});

const gameAtom = atom<Game>({
    key: 'game',
    default: {
        players: [],
        chatId: "",
        winNumber: 0
    },
});

export { userAtom };