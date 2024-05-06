import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import Notes from "./components/Notes";

export default function App() {
  interface Todo {
    task : string,
    id : string,
    completed: boolean
  }

  const [ToDoarray, setToDoArray] = useState<Todo[] | null>([])

  useEffect(  ()=> {
    const getToDos = async ()=> {
      try {
       const response =  await fetch("http://localhost:3000/todoroutes")
       const data = await response.json()
       console.log(data)
       setToDoArray(data)
      } catch (error) {
        console.log(error)
      }
    }

    getToDos()
    
  }, [])

  

  const addToDO = async (task: string, completed: boolean ) => {

    const toDOData = {
      task: task,
      completed: completed
    }
    try {
      const response = await fetch("http://localhost:3000/todoroutes", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( toDOData )
      })

      if (!response.ok){
        throw new Error("Faild To add task")
      }

      const data = await response.json();
      setToDoArray(data)
      console.log(data);

    } catch (error) {
      console.log(error)
    }

  };

  const removeToDo = async (id: string) => {
    console.log("delete button is clicked");
  
    try {
      const response = await fetch("http://localhost:3000/todoroutes", {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete task');
      }
  
      const data = await response.json();
      console.log(data);
      setToDoArray(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editToDO = async (task: string, completed: boolean, id: string) => {
    const toDOData = {
      id: id, 
      task: task,
      completed: completed
    }
    try {
      const response = await fetch("http://localhost:3000/todoroutes", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( toDOData )
      })

      if (!response.ok){
        throw new Error("Faild To add task")
      }

      const data = await response.json();
      setToDoArray(data)

    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  
  return (
    <>
    <InputBox addToDO={addToDO} />
    {/* <Notes task="This is a test Note" /> */}
    {
      ToDoarray && ToDoarray.map((element, index) => (
        <Notes key={index}  id={element.id} toDo={element.task} removeToDO={removeToDo} editToDO={editToDO} />
      ))
    }
    </>
  )
}