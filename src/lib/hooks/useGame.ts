import api from "../api";
import { useState } from "react";
import { AxiosError } from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/atoms";


const useGame = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useRecoilState(userAtom);

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
    register
  }
}

export default useGame;