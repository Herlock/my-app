import React from 'react';
//import TodoList from './Todo/TodoList'

function App() {
/*  let [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'ts'},
    {id:2, completed: false, title: 'react'},
    {id:3, completed: false, title: 'git'}
  ])
  
function toggleTodo(id) {
  setTodos(
    todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
    })
  )
}
*/
  return (
    <div className='wrapper'>
      <div className='header'> Head </div>
      <nav className='navbar'> Nav </nav>
      <div className='content' > <img src='https://i.imgur.com/ZSzKRBo.jpg' alt='img' className='icon'/>ку</div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
