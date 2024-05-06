import express from 'express';
import bodyParser from 'body-parser';
import fs from "fs"
import {v4 as uuidv4} from 'uuid';


const app = express()
var jsonParser = bodyParser.json()

app.get("/", (req, res) => {
    fs.readFile('./src/routes/Todo.json', 'utf-8', (err, data) => {
        try {
            const todos = JSON.parse(data)
            res.send(todos);
        } catch (error) {
            console.log(error)
            res.status(400).json({meassage : "something went wrong"})
        }
        
    });
    

});

app.post("/", jsonParser , (req, res) => {
    const toDoData = req.body

    const toDoId = uuidv4()
    toDoData.id = toDoId

    fs.readFile('./src/routes/Todo.json', 'utf-8', (err, data) => {
        try {
            const todos = JSON.parse(data)
            todos.push(toDoData)
            const updateToDoData = JSON.stringify(todos)
            fs.writeFile("./src/routes/Todo.json",updateToDoData, (err)=> {
                try {
                    res.send(todos)
                } catch (error) {
                    console.log(error)
                    res.status(500).json({meassage : "internal issues in writing file"})
                }
            })
            
        } catch (error) {
            console.log(error)
            res.status(400).json({meassage : "something went wrong"})
        }
        

    });
})

app.put("/", jsonParser,(req, res) => {
    const updateToDoId = req.body.id
    const updateToDoTask = req.body.task
    const updateToDoCompleted = req.body.completed

    fs.readFile('./src/routes/Todo.json', 'utf-8', (err, data) => {
        try {
            const toDos = JSON.parse(data)
            const updateToDoIndex = toDos.findIndex((toDo: { id: string; }) => toDo.id == updateToDoId)

            if (updateToDoIndex !== -1){
                toDos[updateToDoIndex].task = updateToDoTask
                toDos[updateToDoIndex].completed = updateToDoCompleted

            }
            else{
                res.status(404).json({message : "No such task exist"})
            }
            
            const updateTodDos = JSON.stringify(toDos)
            fs.writeFile("./src/routes/Todo.json",updateTodDos, (err)=> {
                try {
                    res.send(toDos)
                } catch (error) {
                    console.log(error)
                    res.status(500).json({meassage : "internal issues in writing file"})
                }
            })

        } catch (error) {
            console.log(error)
            res.status(400).json({message : "something went wrong"})
        }
    }
)
})

app.delete("/", jsonParser, (req, res) => {
    const deleteToDoId = req.body.id

    fs.readFile('./src/routes/Todo.json', 'utf-8', (err, data) => {
        try {
            const allToDos = JSON.parse(data)
            const remainToDos = allToDos.filter((data: { id: number; }) => (data.id !== deleteToDoId))
            const updateTodDos = JSON.stringify(remainToDos)
            fs.writeFile("./src/routes/Todo.json", updateTodDos , () => {
                try {
                    // res.status(200).json({message : "Succesfully Deleted"})
                    res.send(remainToDos)
                } catch (error) {
                    res.status(500).json({message : "Fail to update the todos"})
                }
            })
            
        } catch (error) {
            console.log(error)
            res.status(400).json({message : "something went wrong"})
        }
    })

})


export default app