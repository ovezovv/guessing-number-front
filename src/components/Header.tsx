import { userAtom } from "@/lib/recoil/atoms"
import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

const Header = () => {
  const user = useRecoilValue(userAtom)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full flex flex-row justify-between">
      <div className="w-full bg-gradient-to-r from-dark to-secondary rounded-lg p-2 border border-gray-700 flex">
        🎖
        <p className="w-full text-white-300 text-center font-mono">
          {user.points}
        </p>
      </div>
      <div className="w-full bg-gradient-to-r from-dark to-secondary rounded-lg p-2 border border-gray-700 mx-4 flex">
        👨‍💻
        <p className="w-full text-white-300 text-center font-mono">
          {user.username}
        </p>
      </div>
      <div className="w-full bg-gradient-to-r from-dark to-secondary rounded-lg p-2 border border-gray-700 flex">
        🕔
        <p
          suppressHydrationWarning
          className="w-full text-white-300 text-center font-mono"
        >
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}

export default Header
