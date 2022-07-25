import { FC } from 'react'
import { useStateContext } from '../context/StateProvider'
export const ContextB: FC = () => {
  const { setDark } = useStateContext()
  console.log('rendered ContextB')
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-3 font-bold">ContextB</p>
      <button
        className="rounded bg-green-600 py-2 px-3 text-sm text-white hover:bg-green-700"
        onClick={() => setDark(false)}
      >
        dark mode off
      </button>
    </div>
  )
}
