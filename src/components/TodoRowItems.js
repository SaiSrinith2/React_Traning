function TodoRowItem(props){
  
    return (
        
        <tr onClick={()=>{props.deleteTodo(props.rowNum)}}>
            
                <th scope='row'>{props.rowNum}</th>
                <td>{props.rowDec}</td>
                <td>{props.rowAssigned}</td>
              </tr>
    )
}

export default TodoRowItem