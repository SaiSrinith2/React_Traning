import TodoRowItem from './TodoRowItems';
function TodoTable(props) {
    return(
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Discription</th>
            <th scope='col'>Assigned</th>
          </tr>
        </thead>
        <tbody>
            {
              
               props.todos.map(todo =>(
                <TodoRowItem
                key={todo.rowNum}
                rowNum={todo.rowNum}
                rowDec={todo.rowDec}
                rowAssigned={todo.rowAssigned}
                deleteTodo={props.deleteTodo}
          />  
               )) 
            }
          
           
        </tbody>
          </table>
    )
}
export default TodoTable

  //   rowNum={props.todos[0].rowNum}
            //   rowDec={props.todos[0].rowDec}
            //   rowAssigned={props.todos[0].rowAssigned}
            //     /> 
            //     <TodoRowItem
            //   rowNum={props.todos[1].rowNum}
            //   rowDec={props.todos[1].rowDec}
            //   rowAssigned={props.todos[1].rowAssigned}
            //     />  
            //     <TodoRowItem
            //   rowNum={props.todos[2].rowNum}
            //   rowDec={props.todos[2].rowDec}
            //   rowAssigned={props.todos[2].rowAssigned}