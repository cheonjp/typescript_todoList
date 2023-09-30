import React, { useEffect, useState, useRef } from 'react'
import "./todo.scss"
import { AiOutlineCheck, AiFillDelete, AiOutlineEdit } from "react-icons/ai"

type Props = {
  text: string;
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>
  todoList: string[]
}

const Todo: React.FC<Props> = ({ text, setTodoList, todoList }) => {
  const [isDone, setIsDone] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)
  const [editableText, setEditableText] = useState<string>(text)
  const inputRef = useRef<HTMLInputElement>(null)

  const deletingTodo = (): void => {
    const index = todoList.indexOf(text)
    todoList.splice(index, 1)
    setTodoList([...todoList])

  }

  const editTodo = () => {
    setEdit(true)
  }

  useEffect(() => {
    edit && inputRef.current?.focus()
  }, [edit])


  return (
    <div className={isDone ? "todo isDone" : "todo"}>
      {edit ? <input type='text' onChange={(e) => setEditableText(e.target.value)} value={editableText} ref={inputRef} onKeyDown={(e)=> e.keyCode===13 && setEdit(false)} onBlur={() => setEdit(false)} /> : <span>{editableText}</span>
      }
      <div className="iconsContainer">
        <AiOutlineCheck onClick={() => setIsDone(!isDone)} />
        <AiOutlineEdit onClick={editTodo} />
        <AiFillDelete onClick={deletingTodo} />
      </div>
    </div>
  )
}

export default Todo