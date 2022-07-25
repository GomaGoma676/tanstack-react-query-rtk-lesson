import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

export const ClassicalFetchB: FC = () => {
  const navigate = useNavigate()
  const { tasks } = useStateContext()
  console.log('rendered ClassicalFetchB')
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-3 text-center font-bold">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate('/fetch-a')}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
