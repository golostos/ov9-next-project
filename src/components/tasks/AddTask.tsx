import { useAppDispatch } from "@/lib/hooks"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { CollapseForm } from "./CollapseForm"
import { addTask } from "./TasksSlice"

export default function AddTask() {
  const dispatch = useAppDispatch()
  return (
    <div>
      <CollapseForm>
        <form className='flex flex-col gap-2' onSubmit={(event) => {
          event.preventDefault()
          const form = event.target
          if (form instanceof HTMLFormElement) {
            const formData = new FormData(form)
            const title = formData.get('title') as string
            const desc = formData.get('desc') as string
            if (!title || !desc) return
            const titleInput = form[0] as HTMLInputElement
            titleInput.value = ''
            const descInput = form.desc as HTMLInputElement
            descInput.value = ''
            dispatch(addTask({
              title,
              desc,
              id: String(Math.random()),
              completed: false
            }))
          }
        }}>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id='title' name='title' required />
          <Label htmlFor="desc">Description</Label>
          <Input type="text" id='desc' name='desc' required />
          <Button type='submit'>Add</Button>
        </form>
      </CollapseForm>
    </div>
  )
}
