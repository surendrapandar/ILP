import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface InputBoxProps {
    addToDO : (task: string, completed: boolean) => void;
}

const InputBox: React.FC<InputBoxProps> = ({addToDO: addTask}) => {
    const [task, setTask] = useState<string>("");
    const [completed, setcompleted] = useState<boolean>(false)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (task.trim() !== "") {
            addTask(task, completed);
            setTask("");
          }
    }
  return (
<form onSubmit={handleSubmit} className="flex justify-center w-full max-w-2xl mx-auto space-x-2 mt-6" action="">
  <Input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Write Your Task" />
  <Button type="submit">Add Task</Button>
</form>

  )
}

export default InputBox;