import api from "../api";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRecoilState } from "recoil";
import { gameAtom, userAtom } from "../recoil/atoms";


const useGame = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useRecoilState(userAtom);
  const [game, setGame] = useRecoilState(gameAtom);

  const register = async () => {
    try {
      setLoading(true);
      const response = await api.post('/users/create', {
        username: user.username
      });
    
      if (response.data) {
        setUser({
          username: response.data.username,
          points: response.data.points
        });

        const gameRespone = await api.post('/game/create', {
          userId: response.data._id
        })

        setGame({
          id: gameRespone.data.game._id,
          players: gameRespone.data.game.players,
          winNumber: gameRespone.data.game.winNumber,
          chatId: gameRespone.data.chat._id
        })

        setLoading(false);
      }

      return true;      
    } catch (error: any) {
      const err = error as AxiosError;
      setLoading(false);
    }
  };

  const startGame = async ({gameId, username, point, multiplier}: {
    gameId: string,
    username: string,
    point: number,
    multiplier: number
  }) => {
    try {
      setLoading(true);
      const response = await api.put('/game/update', {
        gameId,
        username,
        point,
        multiplier
      });
    
      if (response.data) {

        console.log(response.data.players)
        setGame({
          id: response.data.game._id,
          players: response.data.game.players,
          winNumber: response.data.game.winNumber,
          chatId: response.data.chat._id
        })
        setLoading(false);
      }

      return true;      
    } catch (error: any) {
      const err = error as AxiosError;
      setLoading(false);
    }
  };

  return {
    isLoading,
    register,
    startGame
  }
}

export default useGame;