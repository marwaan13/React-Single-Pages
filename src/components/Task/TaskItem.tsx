import { ITask } from '@/types/task'


const TaskItem = ({task} : {task : ITask}) => {
  return (
    <div className='border my-3 p-3 rounded-xl'>
        <h1 className="font-bold">
            {task.task}
        </h1>

        <p className='text-gray-600 mb-3'>
            {task.description}
        </p>
    </div>
  )
}

export default TaskItem