import TaskItem from '@/components/Task/TaskItem'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { addTodo } from '@/redux/slices/taskSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { ITask } from '@/types/task'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import * as uuid from 'uuid'


const TodoApp = () => {

    const taskState = useSelector((state : RootState) => state.task)
    const dispatch = useDispatch<AppDispatch>()
    const formik = useFormik({
        initialValues : {
            task : "",
            description : ""
        },
        validationSchema : yup.object({
            task : yup.string().required().min(12, "Task must be atleast 12 chars long."),
            description : yup.string()
        }),
        onSubmit(values) {
            const id = uuid.v6()
            const newTask : ITask = {
                id,
                task : values.task,
                description : values.description
            }

            dispatch(addTodo(newTask))
        }
    })

  return (
    <div className='w-[40%] mx-auto'>
        <div className="header text-center">
            <h1 className="font-bold text-4xl">
                My Task Manager
            </h1>
        </div>

        <div className="form border p-3">
            <form onSubmit={formik.handleSubmit}>
                <div className="inputContainer flex flex-col gap-2">
                    <label  htmlFor="">Task</label>
                    <Input name='task' onChange={formik.handleChange} placeholder='Enter the task' />
                <p className="text-red-500">{formik.errors.task ? formik.errors.task : null}</p>
                </div>
                <div className="inputContainer flex flex-col gap-2">
                    <label  htmlFor="">Description</label>
                    <Textarea name='description' onChange={formik.handleChange} className='border' placeholder='Enter the task description' />
                </div>

                <div className="btn my-4">
                    <Button>Create Task</Button>
                </div>
            </form>
        </div>

        <div className="tasks">
            <h1 className="text-xl my-4 font-bold">
                My Tasks
            </h1>

            {!taskState.data.length ? <>No more tasks to show. Try creating new ones.</>  :taskState.data.map((task) => {
                return <TaskItem key={task.id} task={task} />
            })}

        </div>

    </div>
  )
}

export default TodoApp