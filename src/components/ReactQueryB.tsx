import { FC } from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Task } from '../../types/types'

export const ReactQueryB: FC = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')
  console.log('rendered ReactQueryB')
  return (
    <>
      <p className="my-3 font-bold">ReactQueryB</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate('/')}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
