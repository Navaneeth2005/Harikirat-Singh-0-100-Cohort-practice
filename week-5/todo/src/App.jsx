import { useState } from 'react'
//todos:[{
// title:"todo1",description:"first",completed"""}]

function App(){
  const [todos,setTodo]=useState([{
       title:"Go to gym",
       description:"never miss a day",
       completed:false
  },
  { 
     title:"DO DSA",
       description:"never miss a day",
       completed:false

  }
]);
    return (
      <div>
       
       {
        todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description} />
       })}

      </div>

    )
    function Todo(props){
         return <div>
          <h1>{props.title}</h1>
            <h1>{props.description}</h1>
         </div>
    }
}
export default App;
