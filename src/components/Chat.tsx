import React from 'react'

const Chat = () => {
  return (
    <div className="flex w-1/2 ml-4 flex-col">
      <div className="flex">
        💬
        <p className="ml-2 w-full text-white-300 font-mono">Chat</p>
      </div>
      <div className="flex flex-col font-mono border border-gray-700 rounded-lg bg-secondary mt-2">
        {/* This is chat block */}
        <div className="flex flex-col p-4">
          <div className="flex flex-row">
            <h4 className="text-primary">CPU 1:</h4>
            <p className="text-gray-300 bg-gray-700 ml-2 px-1 rounded">hi guys</p>
          </div>
          <div className="flex flex-row mt-2">
            <h2 className="text-primary">CPU 2:</h2>
            <p className="text-gray-300 bg-gray-700 ml-2 px-1 rounded">I guess I will bit this time</p>
          </div>
          <div className="flex flex-row mt-2">
            <h2 className="text-primary">CPU 3:</h2>
            <p className="text-gray-300 bg-gray-700 ml-2 px-1 rounded">hi guys</p>
          </div>
        </div>
        <div className="bg-gray-800 w-full p-4 flex flex-row">
          <input
            type="text"
            className="w-full p-2 text-white-300 rounded-lg focus:outline-none bg-dark border border-gray-700 font-mono"
          />
          <button className="ml-2 p-1 px-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-mono">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Chat