import { useState } from "react";
import { Button } from "./ui/button";

interface NotesProps  {
    toDo: string
    removeToDO: (index: string) => void
    editToDO: (toDo: string, completed: boolean, id: string) => void
    id : string
}

const Notes: React.FC<NotesProps> = ({toDo: toDo, removeToDO: removeToDo, id: id, editToDO}) => {
  const [contentEditable, setcontentEditable] = useState(false)
  const [divContent, setDivContent] = useState('Initial content');


  const editContent = () => (
    setcontentEditable(!contentEditable)
  )

  const handleBlur = () => {
    setcontentEditable(false);
    editToDO(divContent, false, id )
  };

  return (
    <div className="flex w-full max-w-2xl mx-auto space-x-2 mt-6">
      <div onInput={(e: React.FormEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        setDivContent(target.innerText)
      }} onBlur={handleBlur} contentEditable={contentEditable} className=" bg-white w-full max-w-xl rounded-lg pt-2 pl-2">{toDo}</div>
      <Button onClick={() => editContent()} >Edit</Button>
      <Button onClick={() => removeToDo(id)} variant="destructive" >Remove</Button>
    </div>
    
  );
};

export default Notes;


