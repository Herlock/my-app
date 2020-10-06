import React from 'react';
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
    {id:1, completed: false, title: 'ts'},
    {id:2, completed: false, title: 'react'},
    {id:3, completed: false, title: 'git'}
  ]
  
  return (
    <div className='wrapper'>
      <h1>Резюме разработчика</h1>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
