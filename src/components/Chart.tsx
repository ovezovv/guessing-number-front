import React, { useEffect } from 'react'
import AnimatedLine from './AnimatedLine'
import { useRecoilValue } from 'recoil'
import { gameAtom, gameStatusAtom } from '@/lib/recoil/atoms'

const Chart = () => {
  const game = useRecoilValue(gameAtom)
  const gameStatus = useRecoilValue(gameStatusAtom)

  useEffect(() => {}, [gameStatus, game])

  return (
    <>
      {gameStatus ? <AnimatedLine end={game.winNumber} speed={3} /> : <></>}
    </>
  )
}

export default Chart