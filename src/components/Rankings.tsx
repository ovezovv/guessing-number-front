import { gameAtom, gameStatusAtom } from '@/lib/recoil/atoms'
import React from 'react'
import { useRecoilValue } from 'recoil'

const Rankings = () => {
  const game = useRecoilValue(gameAtom);
  const gameStatus = useRecoilValue(gameStatusAtom);
  return (
    <div className="flex w-1/2 flex-col">
      <div className="flex">
        📊
        <p className="ml-2 w-full text-white-300 font-mono">Ranking</p>
      </div>
      <div className="w-full border border-gray-700 rounded-lg mt-2">
      <table className="min-w-full text-left text-sm font-mono text-surface dark:text-white">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr>
            <th scope="col" className="px-6 py-2">No.</th>
            <th scope="col" className="px-6 py-2">Name</th>
            <th scope="col" className="px-6 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {
            game.players.length ? game.players.map((player, index) => (
              <tr className="border-b border-neutral-200 dark:border-white/10 bg-secondary" key={player.username}>
                <td className="whitespace-nowrap px-6 py-2 font-medium">{index+1}</td>
                <td className="whitespace-nowrap px-6 py-2">{player.username}</td>
                <td className="whitespace-nowrap px-6 py-2">{gameStatus ? player.point*player.multiplier : 0}</td>
              </tr>    
            )) : <></>
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Rankings