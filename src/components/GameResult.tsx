import { userAtom } from '@/lib/recoil/atoms';
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';

const GameResult = () => {
  const user = useRecoilValue(userAtom);
  const [point, setPoint] = useState<number>(50);
  const [multiplier, setMultiplier] = useState<number>(1.00);

  const handlePointIncrease = () => {
    if(point < user.points) {
      setPoint(point+1)
    }
  }

  const handlePointDecrease = () => {
    if(point < user.points && point > 0) {
      setPoint(point-1)
    }
  }

  const handleMultiplierIncrease = () => {
    if(Number(multiplier) < 10.00) {
      setMultiplier(multiplier + 0.01)
    }
  }

  const handleMultiplierDecrease = () => {
    if(Number(multiplier) > 0) {
      setMultiplier(multiplier - 0.01)
    }
  }

  return (
    <div className="gap-1 w-2/6 shadow-lg  mr-4 rounded-lg">
      <div className='flex flex-row'>
        <div className='flex flex-col rounded-lg p-1 px-2 border border-gray-700 bg-gradient-to-r from-dark to-secondary mr-2'>
          <p className='text-xs text-center font-mono text-gray-700'>Points</p>
          <div className='flex flex-row'>
            <button
              className='border border-gray-700 p-1 px-2 rounded-lg'
              onClick={handlePointDecrease}
            >🔽</button>
            <input
              value={point}
              onChange={(e) => setPoint(Number(e.target.value))}
              type="text"
              className="w-full mx-2 p-1 text-white-300 rounded-lg focus:outline-none bg-dark font-mono"
            />
            <button
              className='border border-gray-700 p-1 px-2 rounded-lg'
              onClick={handlePointIncrease}
            >🔼</button>
          </div>
        </div>
        <div className='flex flex-col rounded-lg p-1 px-2 border border-gray-700 bg-gradient-to-r from-dark to-secondary ml-2'>
          <p className='text-xs text-center font-mono text-gray-700'>Multiplier</p>
          <div className='flex flex-row'>
            <button className='border border-gray-700 p-1 px-2 rounded-lg' onClick={handleMultiplierDecrease}>🔽</button>
            <input
              value={Number(multiplier.toFixed(2))}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              type="number"
              step={0.01}
              className="w-full mx-2 p-1 text-white-300 rounded-lg focus:outline-none bg-dark font-mono"
            />
            <button className='border border-gray-700 p-1 px-2 rounded-lg' onClick={handleMultiplierIncrease}>🔼</button>
          </div>
        </div>
      </div>

      <button 
        className={`w-full mt-4 p-2 rounded-lg font-mono bg-gradient-to-r from-blue-500 to-teal-500`}
        type='submit'
      >
        Start
      </button>

    <div className="flex full flex-col mt-4">
      <div className="flex">
        🏆
        <p className="ml-2 w-full text-white-300 font-mono">Current Round</p>
      </div>
      <div className="w-full border border-gray-700 rounded-lg mt-2">
      <table className="min-w-full text-left text-sm font-mono text-surface dark:text-white">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr>
            <th scope="col" className="px-6 py-2">Name</th>
            <th scope="col" className="px-6 py-2">Point</th>
            <th scope="col" className="px-6 py-2">Multiplier</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-200 dark:border-white/10 bg-secondary">
            <td className="whitespace-nowrap px-6 py-2 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-2">Mark</td>
            <td className="whitespace-nowrap px-6 py-2">123</td>
          </tr>
          <tr className="border-b border-neutral-200 dark:border-white/10">
            <td className="whitespace-nowrap px-6 py-2 font-medium">2</td>
            <td className="whitespace-nowrap px-6 py-2">Jacob</td>
            <td className="whitespace-nowrap px-6 py-2">123</td>
          </tr>
          <tr className="border-b border-neutral-200 dark:border-white/10 bg-secondary">
            <td className="whitespace-nowrap px-6 py-2 font-medium">3</td>
            <td className="whitespace-nowrap px-6 py-2">Larry</td>
            <td className="whitespace-nowrap px-6 py-2">123</td>
          </tr>
          <tr className="border-b border-neutral-200 dark:border-white/10">
            <td className="whitespace-nowrap px-6 py-2 font-medium">4</td>
            <td className="whitespace-nowrap px-6 py-2">Meret</td>
            <td className="whitespace-nowrap px-6 py-2">123</td>
          </tr>
          <tr className="border-b border-neutral-200 dark:border-white/10 bg-secondary">
            <td className="whitespace-nowrap px-6 py-2 font-medium">5</td>
            <td className="whitespace-nowrap px-6 py-2">Myrat</td>
            <td className="whitespace-nowrap px-6 py-2">123</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
  )
}

export default GameResult