import React from 'react'
import { userAtom } from '@/lib/recoil/atoms'
import { useRecoilValue } from 'recoil'
import GameResult from './GameResult';
import Welcome from './Welcome';

const SideBar = () => {
  const user = useRecoilValue(userAtom);
  return (
    <>
    {user.points ? <GameResult /> : <Welcome />}
    </>
  )
}

export default SideBar