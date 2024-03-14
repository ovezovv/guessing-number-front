import { atom } from 'recoil';

type User = {
    username: string;
    points: number;
}

type Game = {
    id: string;
    players: {
        username: string;
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
        id: "",
        players: [],
        chatId: "",
        winNumber: 0
    },
});

const gameStatusAtom = atom<boolean>({
    key: 'gameStatus',
    default: false
});

export { userAtom, gameAtom, gameStatusAtom };