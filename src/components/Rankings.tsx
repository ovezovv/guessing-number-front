import React from 'react'

const Rankings = () => {
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
  )
}

export default Rankings