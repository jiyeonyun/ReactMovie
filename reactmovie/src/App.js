import { useState,useEffect } from 'react';

function App() {
  const[todo,setTodo] = useState('');
  const[todos ,setTodos] = useState([]);
  const onChange = (event)=>{ setTodo(event.target.value);};
  const onSubmit = (event)=>{
    event.preventDefault();
    if(todo === ''){
      return;
    }
    setTodos((currentArray) =>[todo,...currentArray]);
    setTodo('');
  };
  return (
  <div>
    <h1>My To Dos ({todos.length})</h1>
    <form onSubmit={onSubmit}>
    <input 
    onChange={onChange}
    type='text' 
    value={todo}
    placeholder='Write your to do...' />
    <button>Add To Do</button>
    </form>
  </div>
  );
}

export default App;
