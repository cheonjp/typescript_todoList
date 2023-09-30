import React, { useState } from 'react';
import './App.scss';
import Todo from './components/todo/Todo';
import {Item} from './model';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  // const [todoList,setTodoList]=useState<Item[]>([])
  const [todoList,setTodoList]=useState<string[]>([])

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      if(inputValue !== ""){
        // setTodoList([...todoList, {id:todoList.length,todo:inputValue}])
        setTodoList([...todoList,inputValue])
      } 
      setInputValue("")
    }
  }
  const changeValue = (e:React.ChangeEvent<HTMLInputElement> ):void => {
    setInputValue(e.target.value)
  }


  return (
    <div className="App">
      <h1>To do list</h1>
      <div className="container">
        <input type="text"
          className='textInput'
          onKeyDown={addTodo}
          onChange = {changeValue}
          value = {inputValue}
        />
        <div className="todoList">
          {todoList && todoList.map(todo => (
            <Todo text={todo} setTodoList={setTodoList} todoList={todoList}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
