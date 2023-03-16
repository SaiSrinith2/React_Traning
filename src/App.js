//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoFrom from './components/NewTodoForm';

function App()
 {
    const [showAddTodo,setShowAddTodo] = useState(false)
    const [todos,setTodos]=useState([
        { rowNum : 1 , rowDec : "Study React", rowAssigned : "Sai"},
        { rowNum : 2 , rowDec : "Study SQL", rowAssigned : "Sai"},
        { rowNum : 3 , rowDec : "cook", rowAssigned : "Sai"}
  ])

    const addTodo = (description,assigned) => {
        let rowNum=0;
        if(todos.length > 0)
        {
            rowNum = todos[todos.length-1].rowNum + 1;
        }
        else
        {
            rowNum = 1;
        }
  
    const newTodo = {rowNum : todos.length + 1 , rowDec : description, rowAssigned : assigned}
    setTodos(todos => [...todos,newTodo])
} 

  
  const deleteTodo = (deleteTodoRowNum) => {
    let filtered = todos.filter(function(value){ 
    return value.rowNum !== deleteTodoRowNum});
    setTodos(filtered);
    }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          My Action Plan Ready
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary mt-3' onClick={()=>{setShowAddTodo(!showAddTodo)}}>{showAddTodo ? 'close New todo' : 'New Todo'}</button>
          {showAddTodo && <NewTodoFrom addTodo={addTodo}/>
            }
        </div>
      </div>
    </div>
  );
}

export default App;
