import React,{useState} from 'react';
function NewTodoFrom(props) {
    
        const [description, setDescription] = useState('');
        const [assigned, setAssigned] = useState('');
        const submitTodo = () => {
            if(description !=='' && assigned !==''){
                props.addTodo(description,assigned);
                setDescription('');
                setAssigned('');
            }
        }
        return(
    <div className='mt-5'>
        <form>
            <div className='mb-3'>
                <label  className='form-label'>Todo Assigned</label>

                <input
                 type='text'
                  className='form-control' 
                  placeholder='Enter Todo Assigned' 
                  required
                 onChange={(e)=>{setAssigned(e.target.value)}}
                 value={assigned}></input>
            </div>
            <div className='mb-3'>
                <label  className='form-label'>Todo Description</label>
                <textarea type='text' 
                className='form-control'
                 placeholder='Enter Todo Description' 
                 required
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
                ></textarea>
               
            </div>
            <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add Todo</button>
        </form>

</div>
    ) 
}
export default NewTodoFrom