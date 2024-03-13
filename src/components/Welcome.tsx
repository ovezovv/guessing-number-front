"use client";

import React, { useCallback } from 'react'
import useGame from '@/lib/hooks/useGame';
import { userAtom } from '@/lib/recoil/atoms';
import { useRecoilState } from 'recoil';

const Welcome = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const {register, isLoading} = useGame();

  const handleSubmit = useCallback(async(e: any) => {
    e.preventDefault();
    await register();
  }, [register]);

  return (
    <div className="gap-1 bg-secondary w-2/6 border border-gray-700 shadow-lg  mr-4 p-8 rounded-lg">
      <h2 className="mt-8 text-gray-300 text-center font-mono">Welcome</h2>
      <p className="mt-16 text-xs text-gray-400 text-center font-mono">Please Insert Your Name</p>
      <form onSubmit={handleSubmit}>
        <input
          value={user.username}
          onChange={(e) => setUser({...user, 
            username: e.target.value
          })}
          type="text"
          className="w-full mt-4 p-2 text-white-300 rounded-lg focus:outline-none bg-dark border border-gray-700 font-mono"
        />
        <button 
          className={`w-full mt-2 p-2 rounded-lg font-mono ${user.username ? "bg-gradient-to-r from-blue-500 to-teal-500" : "bg-dark"}`}
          type='submit'
          disabled={
            user.username ? false : true
          }
        >
          Accept
        </button>
      </form>
    </div>
  )
}

export default Welcome