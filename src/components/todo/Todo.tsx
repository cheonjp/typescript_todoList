import React,{useEffect, useState} from 'react'
import "./todo.scss"
import {AiOutlineCheck,AiFillDelete,AiOutlineEdit} from "react-icons/ai"

type Props = {
    text:string;
    setTodoList:React.Dispatch<React.SetStateAction<string[]>>
    todoList:string[]
}

const Todo:React.FC<Props> = ({text,setTodoList,todoList}) => {
  const [isDone,setIsDone] = useState<boolean>(false)

  const deletingTodo = ():void =>{
    const index = todoList.indexOf(text)
    todoList.splice(index,1)
    setTodoList([...todoList])
    
  }

  return (
    <div className={isDone ? "todo isDone":"todo"}>
        <span>{text}</span>
        <div className="iconsContainer">
            <AiOutlineCheck onClick={()=>setIsDone(!isDone)}/>
            <AiOutlineEdit/>
            <AiFillDelete onClick={deletingTodo}/>
        </div>
    </div>
  )
}

export default Todo